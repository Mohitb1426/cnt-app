const module_key = 'reelsScreen'

export const GET_REELS_DATA = `${module_key}_get_reels_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_REELS_DATA = `${module_key}_got_reels_data`
export const ON_REEL_LIKE = `${module_key}_on_reel_like`
export const ON_REEL_LIKE_SUCCESS = `${module_key}_on_reel_like_success`
export const ON_REEL_LIKE_FALSE = `${module_key}_on_reel_like_false`

export const getReelsData = (data) => ({
  type: GET_REELS_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const gotReelsData = (data) => ({
  type: GOT_REELS_DATA,
  payload: data
})

export const onReelLike = (data) => ({
  type: ON_REEL_LIKE,
  payload: data
})

export const onReelLikeSuccess = (data) => ({
  type: ON_REEL_LIKE_SUCCESS,
  payload: data
})

export const onReelLikeFalse = (data) => ({
  type: ON_REEL_LIKE_FALSE,
  payload: data
})
