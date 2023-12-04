import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makePostRequest } from '../../common/NetworkOps'
import { Routes } from '../../routes/Routes'
import { ON_FORGOT_PASSWORD, onError, onForgotPasswordDone, userNotExistsForgotPassword } from './actionForgotPasswordScreen'

const onForgotPassword = async (data) => {
  const res = await makePostRequest(Config.auth.forgotPassword, data)
  return res
}

export const epicOnForgotPassword = (action$, state$) => action$.pipe(
  ofType(ON_FORGOT_PASSWORD),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    return from(onForgotPassword(requestBody)).pipe(
      map((res) => {
        if (res?.status) {
          navigation.navigate(Routes.CHANGE_PASSWORD_SCREEN)
          return onForgotPasswordDone()
        }
        if (!res?.status) {
          return userNotExistsForgotPassword({
            showErrorMessage: true,
            errorMessage: res?.message
          })
        }
      }),
      takeUntil(action$.pipe(ofType(ON_FORGOT_PASSWORD))),
      catchError((error) => {
        console.log(error.response?.data?.message, 'error')
        return of(userNotExistsForgotPassword({
          showErrorMessage: true,
          errorMessage: error.response?.data?.message
        }), onError(error.response?.data?.message || ''))
      })
    )
  })
)
