import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { Routes } from '../../routes/Routes'
import { ON_CREATE_GROUP, onCreatedGroup, onError } from './actionCreateNewGroupScreen'
import AsyncKeys from '../../common/AsyncKeys'
import StorageUtils from '../../common/StorageUtils'

const onCreateGroup = async (data) => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(Config.groupAndCommunity.createGroup, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`
    },
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

export const epicOnCreateNewGroup = (action$, state$) => action$.pipe(
  ofType(ON_CREATE_GROUP),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    const {
      image,
      user,
      name,
      description,
      privacy,
      member
    } = requestBody
    const formData = new FormData()
    formData.append('name', name)
    formData.append('description', description)
    formData.append('privacy', privacy)
    formData.append('user', user)
    if (member?.length > 0) {
      formData.append('member', member.join(','))
    }
    const imageUrl = Object.keys(image).length === 0
      ? ''
      : {
          uri: image?.uri,
          type: image?.type,
          name: image?.name
        }
    if (imageUrl !== '') {
      formData.append('image', imageUrl)
    }
    return from(onCreateGroup(formData)).pipe(
      map((res) => {
        if (res) {
          navigation.navigate(Routes.GROUP_AND_COMMUNITY_SCREEN)
          return onCreatedGroup()
        }
        return onCreatedGroup()
      }),
      takeUntil(action$.pipe(ofType(ON_CREATE_GROUP))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
