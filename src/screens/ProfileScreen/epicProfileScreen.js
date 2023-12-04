import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, pluck, takeUntil, catchError, map } from 'rxjs/operators'
import Config from '../../common/Config'
import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest
} from '../../common/NetworkOps'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import {
  ADD_FRIEND,
  DELETE_PROFILE_POST_DATA,
  EDIT_PROFILE_POST_DATA,
  FOLLOW_USER,
  GET_POST_DATA_BY_ID,
  GET_PROFILE_DATA,
  GET_PROFILE_POST_DATA,
  GET_USER_FRIEND_LIST,
  LIKE_POST,
  SEARCH_USER,
  SENT_USER_REQUEST,
  UPDATE_PROFILE_IMAGE,
  getProfileData,
  getProfilePostData,
  gotPostDataById,
  gotProfileData,
  gotProfilePostData,
  gotSearchUser,
  gotUserFriendList,
  likedPost,
  onEditedProfilePostData,
  onError,
  searchUser
} from './actionProfileScreen'
import { Routes } from '../../routes/Routes'
import { getHomeFeedData } from '../HomeScreen/actionHomeScreen'
import { getMessageData } from '../MessagesScreen/actionMessageScreen'
import { getNotificationData } from '../NotificationScreen/actionNotificationScreen'
import { getReelsData } from '../ReelsComponent/actionReelsScreen'

const onGetProfile = async (data) => {
  const userId = await StorageUtils.getNumber(
    AsyncKeys.ASYNC_KEY_USER_ID,
    null
  )
  const id = data ?? userId
  const res = await makeGetRequest(`${Config.profile.profileApi}${id}/`)
  return res
}

export const epicGetProfileData = (action$, state$) =>
  action$.pipe(
    ofType(GET_PROFILE_DATA),
    pluck('payload'),
    mergeMap((data) => {
      return from(onGetProfile(data)).pipe(
        map(res => {
          if (res) {
            console.log(res, 'res')
            return gotProfileData(res)
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(GET_PROFILE_DATA))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onGetProfilePostData = async (data) => {
  const userId = await StorageUtils.getNumber(
    AsyncKeys.ASYNC_KEY_USER_ID,
    null
  )
  const res = await makeGetRequest(`${Config.post.getPostsList}?page=1&user=${data ?? userId}`)
  return res
}

export const epicGetProfilePostData = (action$, state$) =>
  action$.pipe(
    ofType(GET_PROFILE_POST_DATA),
    pluck('payload'),
    mergeMap((data) => {
      return from(onGetProfilePostData(data)).pipe(
        map(res => {
          if (res) {
            return gotProfilePostData(res)
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(GET_PROFILE_POST_DATA))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onEditProfilePostData = async (id, data) => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(`${Config.post.getPosts}${id}/`, {
    method: 'put',
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

export const epicEditProfilePostData = (action$, state$) =>
  action$.pipe(
    ofType(EDIT_PROFILE_POST_DATA),
    pluck('payload'),
    mergeMap(data => {
      const { postId, requestBody, navigation } = data
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
      return from(onEditProfilePostData(postId, formData)).pipe(
        map(res => {
          if (res) {
            navigation.goBack()
            return gotPostDataById(res)
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(EDIT_PROFILE_POST_DATA))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onGetPostData = async id => {
  const res = await makeGetRequest(`${Config.post.getPostsList}?id=${id}`)
  return res
}

export const epicGetPostData = (action$, state$) =>
  action$.pipe(
    ofType(GET_POST_DATA_BY_ID),
    pluck('payload'),
    mergeMap(data => {
      return from(onGetPostData(data)).pipe(
        map(res => {
          if (res?.results?.length > 0) {
            return gotPostDataById(res?.results[0])
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(GET_POST_DATA_BY_ID))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onDeletePostData = async id => {
  const res = await makeDeleteRequest(`${Config.post.getPosts}${id}/delete/`)
  return res
}

export const epicDeletePostData = (action$, state$) =>
  action$.pipe(
    ofType(DELETE_PROFILE_POST_DATA),
    pluck('payload'),
    mergeMap(data => {
      const { postId, navigation } = data
      return from(onDeletePostData(postId)).pipe(
        mergeMap(res => {
          if (res?.status) {
            navigation.navigate(Routes.PROFILE_SCREEN)
            return of(
              onEditedProfilePostData(),
              getHomeFeedData(1),
              getProfilePostData()
            )
          }
          return of(onError(), getHomeFeedData(1), getProfilePostData())
        }),
        takeUntil(action$.pipe(ofType(DELETE_PROFILE_POST_DATA))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onGetFriendList = async () => {
  const userId = await StorageUtils.getNumber(
    AsyncKeys.ASYNC_KEY_USER_ID,
    null
  )
  const res = await makeGetRequest(`${Config.friends.friends}?user=${userId}/`)
  return res
}

export const epicGetUserFriendList = (action$, state$) =>
  action$.pipe(
    ofType(GET_USER_FRIEND_LIST),
    pluck('payload'),
    mergeMap(() => {
      return from(onGetFriendList()).pipe(
        map(res => {
          if (res?.results) {
            return gotUserFriendList()
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(GET_USER_FRIEND_LIST))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onLikePost = async data => {
  const res = await makePostRequest(`${Config.like.like}`, data)
  return res
}

export const epicLikePost = (action$, state$) =>
  action$.pipe(
    ofType(LIKE_POST),
    pluck('payload'),
    mergeMap(({ requestBody }) => {
      return from(onLikePost(requestBody)).pipe(
        mergeMap(res => {
          if (res?.results) {
            return of(likedPost(), getHomeFeedData(1), getProfilePostData())
          }
          return of(onError(), getHomeFeedData(1), getProfilePostData())
        }),
        takeUntil(action$.pipe(ofType(LIKE_POST))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onEditProfilePicData = async data => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  const userId = await StorageUtils.getNumber(
    AsyncKeys.ASYNC_KEY_USER_ID,
    null
  )
  await fetch(`${Config.profile.profileApi}${userId}/`, {
    method: 'put',
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

export const epicEditProfilePicData = (action$, state$) =>
  action$.pipe(
    ofType(UPDATE_PROFILE_IMAGE),
    pluck('payload'),
    mergeMap(({ userName, image }) => {
      const formData = new FormData()
      formData.append('username', userName)
      formData.append('profile_pic', {
        uri: image.uri,
        type: image.type,
        name: image.name
      })
      formData.append('is_active', true)
      return from(onEditProfilePicData(formData)).pipe(
        mergeMap(res => {
          if (res) {
            return of(getProfileData(), onError())
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(UPDATE_PROFILE_IMAGE))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onGetSearch = async data => {
  const res = await makeGetRequest(
    `${Config.search.searchFriend}?search=${data}`
  )
  return res
}

export const epicGetSearchData = (action$, state$) =>
  action$.pipe(
    ofType(SEARCH_USER),
    pluck('payload'),
    mergeMap(data => {
      return from(onGetSearch(data)).pipe(
        map(res => {
          if (res?.results) {
            return gotSearchUser(res?.results)
          }
          return gotSearchUser([])
        }),
        takeUntil(action$.pipe(ofType(SEARCH_USER))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onAddFriend = async data => {
  const res = await makePostRequest(`${Config.friends.friends}`, data)
  return res
}

export const epicAddedPost = (action$, state$) =>
  action$.pipe(
    ofType(ADD_FRIEND),
    pluck('payload'),
    mergeMap((data) => {
      return from(onAddFriend(data)).pipe(
        mergeMap(res => {
          if (res) {
            return of(searchUser(''), getMessageData(), getNotificationData())
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(ADD_FRIEND))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onSentFriendRequest = async data => {
  const res = await makePostRequest(`${Config.friends.sentReqFriends}`, data)
  return res
}

export const epicSentFriendRequest = (action$, state$) =>
  action$.pipe(
    ofType(SENT_USER_REQUEST),
    pluck('payload'),
    mergeMap((data) => {
      return from(onSentFriendRequest(data)).pipe(
        mergeMap(res => {
          if (res) {
            return of(searchUser(''), getMessageData())
          }
          return onError()
        }),
        takeUntil(action$.pipe(ofType(SENT_USER_REQUEST))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onFollowUser = async (data) => {
  const res = await makePostRequest(Config.profile.followUser, data)
  return res
}

export const epicFollowUser = (action$, state$) => action$.pipe(
  ofType(FOLLOW_USER),
  pluck('payload'),
  mergeMap((data) => {
    return from(onFollowUser(data)).pipe(
      mergeMap((res) => {
        if (res) {
          return of(getProfilePostData(data?.to_user), getReelsData(), getProfileData(data?.to_user))
        }
        return of(onError())
      }),
      takeUntil(action$.pipe(ofType(FOLLOW_USER))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)
