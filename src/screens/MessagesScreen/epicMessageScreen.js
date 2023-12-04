import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makeGetRequest } from '../../common/NetworkOps'
import { GET_MESSAGE_DATA, gotMessageData, onError } from './actionMessageScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

const getMessageData = async () => {
  const userId = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const res = await makeGetRequest(`${Config.chat.message}?userid=${userId}`)
  return res
}

export const epicGetMeessageFeedData = (action$, state$) => action$.pipe(
  ofType(GET_MESSAGE_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(getMessageData()).pipe(
      map((res) => {
        if (res?.results) {
          return gotMessageData(res?.results)
        }
        return onError([])
      }),
      takeUntil(action$.pipe(ofType(GET_MESSAGE_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
