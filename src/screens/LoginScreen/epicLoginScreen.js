import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import { ON_SIGN_IN, onError, otpSent, userExists } from './actionLoginScreen'
import Config from '../../common/Config'
import { makePostRequest } from '../../common/NetworkOps'
import { Routes } from '../../routes/Routes'

const onSignIn = async (data) => {
  const res = await makePostRequest(Config.auth.verifyPhoneNumber, data)
  return res
}

export const epicOnSignIn = (action$, state$) => action$.pipe(
  ofType(ON_SIGN_IN),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    return from(onSignIn(requestBody)).pipe(
      map((res) => {
        if (res?.status) {
          navigation.navigate(Routes.SCREEN_OTP)
          return otpSent()
        }
        if (!res?.status) {
          return userExists({
            userNotExists: true,
            errorMessage: res?.message
          })
        }
        return onError()
      }),
      takeUntil(action$.pipe(ofType(ON_SIGN_IN))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
