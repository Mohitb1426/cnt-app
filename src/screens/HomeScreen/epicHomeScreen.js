import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, map, takeUntil, catchError
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps'
import { GET_ALL_STORY, GET_HOME_FEED_DATA, GET_USER_STORY, ON_ADD_STORY, ON_VIEW_POST, getAllStory, getHomeFeedData, getUserStory, gotAllStory, gotHomeFeedData, gotUserStory, onAddedStory, onError, paginationLoader } from './actionHomeScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

const getHomeFeed = async (data) => {
  const res = await makeGetRequest(`${Config.post.getPostsList}?page=${data}`)
  return res
}

export const epicGetHomeFeedData = (action$, state$) => action$.pipe(
  ofType(GET_HOME_FEED_DATA),
  pluck('payload'),
  mergeMap((data) => {
    return from(getHomeFeed(data)).pipe(
      mergeMap((res) => {
        if (res?.results?.length > 0) {
          return of(paginationLoader(true), gotHomeFeedData(res?.results))
        }
        return of(paginationLoader(true), gotHomeFeedData([]))
      }),
      takeUntil(action$.pipe(ofType(GET_HOME_FEED_DATA))),
      catchError((error) => {
        return of(gotHomeFeedData([]), onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onStoryAdd = async (data) => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(Config.story.create, {
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

export const epicOnAddStory = (action$, state$) => action$.pipe(
  ofType(ON_ADD_STORY),
  pluck('payload'),
  mergeMap((data) => {
    const { file, userId } = data
    const formData = new FormData()
    formData.append('user', userId)
    formData.append('image', {
      uri: file.uri,
      type: file.type,
      name: file.name
    })
    return from(onStoryAdd(formData)).pipe(
      mergeMap((res) => {
        if (res) {
          return of(getUserStory(res), getHomeFeedData(1), getAllStory())
        }
        return of(onAddedStory(res))
      }),
      takeUntil(action$.pipe(ofType(ON_ADD_STORY))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const getUserStoryById = async () => {
  const userId = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const res = await makeGetRequest(`${Config.story.getStories}${userId}`)
  return res
}

export const epicGetUserStory = (action$, state$) => action$.pipe(
  ofType(GET_USER_STORY),
  pluck('payload'),
  mergeMap(() => {
    return from(getUserStoryById()).pipe(
      map((res) => {
        if (res) {
          return gotUserStory(res)
        }
        return gotUserStory([])
      }),
      takeUntil(action$.pipe(ofType(GET_USER_STORY))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const getAllStories = async () => {
  const res = await makeGetRequest(Config.story.userStory)
  return res
}

export const epicGetAllStory = (action$, state$) => action$.pipe(
  ofType(GET_ALL_STORY),
  pluck('payload'),
  mergeMap(() => {
    return from(getAllStories()).pipe(
      map((res) => {
        if (res) {
          return gotAllStory(res)
        }
        return gotAllStory([])
      }),
      takeUntil(action$.pipe(ofType(GET_ALL_STORY))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

// VIEW COUNT
const onViewPostApiCall = async (data) => {
  const res = await makePostRequest(Config.post.viewPost, data)
  return res
}

export const epicOnViewPost = (action$, state$) => action$.pipe(
  ofType(ON_VIEW_POST),
  pluck('payload'),
  mergeMap((data) => {
    return from(onViewPostApiCall(data)).pipe(
      map((res) => {
        if (res) {
          return paginationLoader(true)
        }
        return paginationLoader(true)
      }),
      takeUntil(action$.pipe(ofType(ON_VIEW_POST))),
      catchError((error) => {
        return of(gotHomeFeedData([]), onError(error.response?.data?.message || ''))
      })
    )
  })
)
