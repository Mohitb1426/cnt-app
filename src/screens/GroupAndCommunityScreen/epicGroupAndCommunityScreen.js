import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, takeUntil, catchError, map
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps'
import { FOLLOW_GROUP, GET_BY_ID_GROUP_DATA, GET_GROUP_DATA, getByidGroupData, gotByIdGroupData, gotGroupData, onError } from './actionGroupAndCommunityScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

const onGetGroupData = async () => {
  const userId = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const res = await makeGetRequest(`${Config.groupAndCommunity.editGroup}`)
  return res
}

export const epicGetGroupData = (action$, state$) => action$.pipe(
  ofType(GET_GROUP_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(onGetGroupData()).pipe(
      map((res) => {
        if (res?.results) {
          return gotGroupData(res?.results)
        }
        return onError()
      }),
      takeUntil(action$.pipe(ofType(GET_GROUP_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onGetByIdGroupData = async (id) => {
  const res = await makeGetRequest(`${Config.groupAndCommunity.editGroup}${id}`)
  return res
}

export const epicGetByIdGroupData = (action$, state$) => action$.pipe(
  ofType(GET_BY_ID_GROUP_DATA),
  pluck('payload'),
  mergeMap((data) => {
    return from(onGetByIdGroupData(data)).pipe(
      map((res) => {
        if (res) {
          return gotByIdGroupData(res)
        }
        return onError()
      }),
      takeUntil(action$.pipe(ofType(GET_BY_ID_GROUP_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onFollowGroup = async (data) => {
  const res = await makePostRequest(Config.groupAndCommunity.followGroup, data)
  return res
}

export const epicFollowGroup = (action$, state$) => action$.pipe(
  ofType(FOLLOW_GROUP),
  pluck('payload'),
  mergeMap((data) => {
    return from(onFollowGroup(data)).pipe(
      map((res) => {
        if (res) {
          return getByidGroupData(data?.groupid)
        }
        return onError()
      }),
      takeUntil(action$.pipe(ofType(FOLLOW_GROUP))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
