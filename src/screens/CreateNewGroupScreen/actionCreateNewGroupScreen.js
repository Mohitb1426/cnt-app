const module_key = 'createNewGroup'

export const ON_CREATE_GROUP = `${module_key}_on_create_group`
export const ON_ERROR = `${module_key}_on_error`
export const ON_CREATED_GROUP = `${module_key}_on_created_group`

export const onCreateGroup = (data) => ({
  type: ON_CREATE_GROUP,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onCreatedGroup = (data) => ({
  type: ON_CREATED_GROUP,
  payload: data
})
