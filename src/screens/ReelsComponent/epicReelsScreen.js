import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, takeUntil, catchError, map
} from 'rxjs/operators'
import Config from '../../common/Config'
import { GET_REELS_DATA, ON_REEL_LIKE, getReelsData, gotReelsData, onError, onReelLikeFalse, onReelLikeSuccess } from './actionReelsScreen'
import { makeGetRequest, makePatchRequest, makePostRequest } from '../../common/NetworkOps'

const onGetReels = async () => {
  const res = await makeGetRequest(`${Config.reels.getReels}`)
  return res
}

export const epicGetReelsData = (action$, state$) => action$.pipe(
  ofType(GET_REELS_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(onGetReels()).pipe(
      mergeMap((res) => {
        if (res) {
          return of(gotReelsData(res?.results), onReelLikeFalse(false))
        }
        return of(onError())
      }),
      takeUntil(action$.pipe(ofType(GET_REELS_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

// Reels Like
const onReelLikePost = async (data) => {
  const res = await makePostRequest(`${Config.like.reelLike}`, data)
  return res
}

export const epicReelLikePost = (action$, state$) =>
  action$.pipe(
    ofType(ON_REEL_LIKE),
    pluck('payload'),
    mergeMap(({ requestBody }) => {
      return from(onReelLikePost(requestBody)).pipe(
        mergeMap(res => {
          if (res) {
            return of(getReelsData(), onReelLikeSuccess())
          }
          return onReelLikeSuccess()
        }),
        takeUntil(action$.pipe(ofType(ON_REEL_LIKE))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )
