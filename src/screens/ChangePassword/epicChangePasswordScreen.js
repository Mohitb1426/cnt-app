import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makePostRequest } from '../../common/NetworkOps'
import { Routes } from '../../routes/Routes'
import { ON_CHANGE_PASSWORD, onError, onForgotPasswordDone, onPasswordValidationError } from './actionChangePasswordScreen'

const onChangePassword = async (data) => {
  const res = await makePostRequest(Config.auth.resetPassword, data)
  return res
}

export const epicOnChangePassword = (action$, state$) => action$.pipe(
  ofType(ON_CHANGE_PASSWORD),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    return from(onChangePassword(requestBody)).pipe(
      map((res) => {
        if (res?.status) {
          navigation.navigate(Routes.SCREEN_LOGIN)
          return onForgotPasswordDone()
        }
        if (!res?.status) {
          return onPasswordValidationError({
            passwordValidationError: true,
            errorMessage: res?.message
          })
        }
        onError()
      }),
      takeUntil(action$.pipe(ofType(ON_CHANGE_PASSWORD))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
