import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import { ON_REGISTER_USER, alreadyExistsError, onError, userRegistered } from './actionSignUpScreen'
import Config from '../../common/Config'
import { Routes } from '../../routes/Routes'

const registerUser = async (data) => {
  let response
  await fetch(Config.auth.registerUser, {
    method: 'post',
    body: data,
    timeout: 18000
  }).then((res) => res.json())
    .then((res) => {
      response = res
    })
    .catch((error) => {
      const errorObject = {
        code: 201,
        message: 'Failure',
        data: error
      }
      response = errorObject
    })
  return response
}

export const epicOnRegisterUserData = (action$, state$) => action$.pipe(
  ofType(ON_REGISTER_USER),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    const {
      fullname,
      phone,
      email,
      password,
      selectedImages
    } = requestBody
    const formData = new FormData()
    formData.append('fullname', fullname)
    formData.append('phone', phone)
    formData.append('email', email)
    formData.append('password', password)
    if (selectedImages?.uri) {
      formData.append('image', {
        uri: selectedImages.uri,
        type: selectedImages.type,
        name: selectedImages.name
      })
    }
    return from(registerUser(formData)).pipe(
      map((res) => {
        if (res?.status) {
          navigation.navigate(Routes.SCREEN_LOGIN)
          return userRegistered(false)
        }
        if (!res?.status) {
          return alreadyExistsError(
            { isUserAlreadyExits: true, errorMessage: res?.message })
        }
        return onError(res)
      }),
      takeUntil(action$.pipe(ofType(ON_REGISTER_USER))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
