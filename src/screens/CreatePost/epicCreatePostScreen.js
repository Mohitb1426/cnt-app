import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, pluck, map, takeUntil, catchError } from 'rxjs/operators'
import Config from '../../common/Config'
import { Routes } from '../../routes/Routes'
import { ON_CREATE_POST, onCreatedPost, onError } from './actionCreatePostScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

const onCreatePost = async data => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(Config.post.createPost, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: data,
    timeout: 18000
  })
    .then(res => res.json())
    .then(res => {
      response = res
    })
    .catch(error => {
      const errorObject = {
        code: 201,
        message: 'Failure',
        data: error
      }
      response = errorObject
    })
  return response
}

export const epicOnCreatePost = (action$, state$) =>
  action$.pipe(
    ofType(ON_CREATE_POST),
    pluck('payload'),
    mergeMap(data => {
      const { requestBody, navigation, post } = data
      const { title, caption, image, post_as_tweet, user, isVideo } = requestBody
      const formData = new FormData()
      formData.append('title', title)
      formData.append('post_as_tweet', post_as_tweet)
      formData.append('caption', caption)
      formData.append('user', user)
      if (image?.uri) {
        formData.append('is_video', isVideo)
        if (isVideo) {
          formData.append('video', {
            uri: image.uri,
            type: image.type,
            name: image.name
          })
        } else {
          formData.append('image', {
            uri: image.uri,
            type: image.type,
            name: image.name
          })
        }
      } else {
        formData.append('image', '')
        formData.append('is_video', 'No')
      }

      return from(onCreatePost(formData)).pipe(
        map(res => {
          if (res) {
            if (post) {
              navigation.navigate(Routes.SCREEN_DRAWER)
              return onCreatedPost()
            }
            if (!post) {
              navigation.navigate(Routes.REEL_SCREEN_SCREEN)
              return onCreatedPost()
            }
          }
          return onCreatedPost()
        }),
        takeUntil(action$.pipe(ofType(ON_CREATE_POST))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )
