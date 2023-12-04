import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makePostRequest } from '../../common/NetworkOps'
import { ON_OTP_VERIFY, onError, otpNotExistsAction, setUserId } from './actionOtpScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { isUserSignedAction } from '../IntroScreen/actionIntroScreen'

const onVerifyOtp = async (data) => {
  const res = await makePostRequest(Config.auth.verifyOtp, data)
  if (res?.access) {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, res?.access)
  }
  if (res?.refresh) {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_REFRESH_TOKEN, res?.refresh)
  }
  if (res?.userid) {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_USER_ID, res?.userid)
  }
  return res
}

export const epicOnVerifyOtp = (action$, state$) => action$.pipe(
  ofType(ON_OTP_VERIFY),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody } = data
    return from(onVerifyOtp(requestBody)).pipe(
      mergeMap((res) => {
        const firstField = Object.keys(res)[0]
        const firstError = res[firstField][0]
        if (res?.userid) {
          return of(isUserSignedAction(true), setUserId(res?.userid))
        }
        return otpNotExistsAction({
          otpNotExists: true,
          errorMessage: firstError
        })
      }),
      takeUntil(action$.pipe(ofType(ON_OTP_VERIFY))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
