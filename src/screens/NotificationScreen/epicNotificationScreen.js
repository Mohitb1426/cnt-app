import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makeGetRequest, makePutRequest } from '../../common/NetworkOps'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { GET_NOTIFICATION, MARK_ALL_AS_READ, gotNotificationData, onError, readDone } from './actionNotificationScreen'

const getNotificationDataById = async () => {
  const userId = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const res = await makeGetRequest(`${Config.notification.notification}?user=${userId}`)
  return res
}

export const epicNotificationData = (action$, state$) => action$.pipe(
  ofType(GET_NOTIFICATION),
  pluck('payload'),
  mergeMap(() => {
    return from(getNotificationDataById()).pipe(
      map((res) => {
        if (res?.results) {
          return gotNotificationData(res?.results)
        }
        return onError([])
      }),
      takeUntil(action$.pipe(ofType(GET_NOTIFICATION))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const markAllAsReadApiCall = async () => {
  const userId = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const res = await makePutRequest(`${Config.notification.markAllAsRead}?user=${userId}`)
  return res
}

export const epicMarkAllAsRead = (action$, state$) => action$.pipe(
  ofType(MARK_ALL_AS_READ),
  pluck('payload'),
  mergeMap(() => {
    return from(markAllAsReadApiCall()).pipe(
      map((res) => {
        if (res) {
          return readDone()
        }
      }),
      takeUntil(action$.pipe(ofType(MARK_ALL_AS_READ))),
      catchError((error) => {
        return of(readDone(error))
      })
    )
  })
)
