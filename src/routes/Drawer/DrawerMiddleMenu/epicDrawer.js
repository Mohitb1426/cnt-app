import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../../common/Config'
import { makePatchRequest, makePostRequest } from '../../../common/NetworkOps'
import { Routes } from '../../../routes/Routes'
import { ON_DELETE_USER, ON_LOGOUT, loggedOut, onDeleteUserSuccess, onError } from './actionDrawer'
import StorageUtils from '../../../common/StorageUtils'
import AsyncKeys from '../../../common/AsyncKeys'

const onLogout = async () => {
  const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  const data = { refresh: token }
  const res = await makePostRequest(Config.auth.logout, data)
  return res
}

export const epicOnLogout = (action$, state$) => action$.pipe(
  ofType(ON_LOGOUT),
  pluck('payload'),
  mergeMap((data) => {
    const { navigation } = data
    return from(onLogout()).pipe(
      map((res) => {
        if (res.code === 200) {
          navigation.navigate(Routes.SCREEN_INTRO)
        }
        return loggedOut()
      }),
      takeUntil(action$.pipe(ofType(ON_LOGOUT))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onDeleteUser = async () => {
  const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const payload = {
    is_active: false
  }
  const res = await makePatchRequest(`${Config.profile.deleteUser}${userID}/`, payload)
  return res
}

export const epicOnDeleteUser = (action$, state$) => action$.pipe(
  ofType(ON_DELETE_USER),
  pluck('payload'),
  mergeMap((data) => {
    return from(onDeleteUser()).pipe(
      map((res) => {
        console.log(res, 'res')
        if (res) {
          return onDeleteUserSuccess(true)
        }
        return onDeleteUserSuccess()
      }),
      takeUntil(action$.pipe(ofType(ON_DELETE_USER))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
