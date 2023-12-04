const module_key = 'commentScreen'

export const ON_CREATE_COMMENT = `${module_key}_on_create_comment`
export const ON_ERROR = `${module_key}_on_error`
export const ON_CREATED_COMMENT = `${module_key}_on_created_comment`
export const GET_COMMENT = `${module_key}_get_comment`
export const GOT_COMMENT = `${module_key}_got_comment`
export const GET_REELS_COMMENTS = `${module_key}_get_reels_comments`
export const GOT_REELS_COMMENTS = `${module_key}_got_reels_comments`
export const CREATE_REELS_COMMENTS = `${module_key}_create_reels_comments`

export const onCreateComment = (data) => ({
  type: ON_CREATE_COMMENT,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onCreatedComment = (data) => ({
  type: ON_CREATED_COMMENT,
  payload: data
})

export const getComment = (data) => ({
  type: GET_COMMENT,
  payload: data
})

export const gotComment = (data) => ({
  type: GOT_COMMENT,
  payload: data
})

export const getReelComments = (data) => ({
  type: GET_REELS_COMMENTS,
  payload: data
})

export const gotReelComments = (data) => ({
  type: GOT_REELS_COMMENTS,
  payload: data
})

export const createReelComments = (data) => ({
  type: CREATE_REELS_COMMENTS,
  payload: data
})
