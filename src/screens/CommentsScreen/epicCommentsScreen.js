import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import { mergeMap, pluck, map, takeUntil, catchError } from 'rxjs/operators'
import Config from '../../common/Config'
import { CREATE_REELS_COMMENTS, GET_COMMENT, GET_REELS_COMMENTS, ON_CREATE_COMMENT, getComment, getReelComments, gotComment, gotReelComments, onCreatedComment, onError } from './actionCommentsScreen'
import { makeGetRequest, makePostRequest } from '../../common/NetworkOps'

const onCommentsPost = async (data) => {
  const res = await makePostRequest(Config.comments.comment, data)
  return res
}

export const epicOnCreateComment = (action$, state$) =>
  action$.pipe(
    ofType(ON_CREATE_COMMENT),
    pluck('payload'),
    mergeMap(data => {
      console.log(data, 'data')
      return from(onCommentsPost(data)).pipe(
        map(res => {
          if (res) {
            return getComment(data?.post)
          }
          return getComment(data?.post)
        }),
        takeUntil(action$.pipe(ofType(ON_CREATE_COMMENT))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const getCommentsData = async (data) => {
  const res = await makeGetRequest(`${Config.comments.comment}?postid=${data}`)
  return res
}

export const epicGetComments = (action$, state$) =>
  action$.pipe(
    ofType(GET_COMMENT),
    pluck('payload'),
    mergeMap(data => {
      return from(getCommentsData(data)).pipe(
        map(res => {
          if (res?.results) {
            return gotComment(res?.results)
          }
          return gotComment([])
        }),
        takeUntil(action$.pipe(ofType(GET_COMMENT))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const getReelsCommentsData = async (data) => {
  const res = await makeGetRequest(`${Config.comments.getReelComment}?reelid=${data}`)
  return res
}

export const epicGetReelsComments = (action$, state$) =>
  action$.pipe(
    ofType(GET_REELS_COMMENTS),
    pluck('payload'),
    mergeMap(data => {
      return from(getReelsCommentsData(data)).pipe(
        map(res => {
          if (res?.results) {
            return gotReelComments(res?.results)
          }
          return gotReelComments([])
        }),
        takeUntil(action$.pipe(ofType(GET_REELS_COMMENTS))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )

const onReelCommentsPost = async (data) => {
  const res = await makePostRequest(Config.comments.reelComment, data)
  return res
}

export const epicOnCreateReelComment = (action$, state$) =>
  action$.pipe(
    ofType(CREATE_REELS_COMMENTS),
    pluck('payload'),
    mergeMap(data => {
      return from(onReelCommentsPost(data)).pipe(
        map(res => {
          if (res) {
            return getReelComments(data?.reel)
          }
          return onCreatedComment(data?.post)
        }),
        takeUntil(action$.pipe(ofType(CREATE_REELS_COMMENTS))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )
