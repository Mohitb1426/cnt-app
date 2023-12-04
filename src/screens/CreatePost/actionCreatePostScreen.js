const module_key = 'createPost'

export const ON_CREATE_POST = `${module_key}_on_create_post`
export const ON_ERROR = `${module_key}_on_error`
export const ON_CREATED_POST = `${module_key}_on_created_post`

export const onCreatePost = (data) => ({
  type: ON_CREATE_POST,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onCreatedPost = (data) => ({
  type: ON_CREATED_POST,
  payload: data
})
