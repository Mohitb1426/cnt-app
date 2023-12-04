const module_key = 'groupAndCommunity'

export const GET_GROUP_DATA = `${module_key}_get_group_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_GROUP_DATA = `${module_key}_GOT_GROUP_DATA`
export const GET_BY_ID_GROUP_DATA = `${module_key}_get_by_id_group_data`
export const GOT_BY_ID_GROUP_DATA = `${module_key}_got_by_id_group_data`
export const FOLLOW_GROUP = `${module_key}_follow_group`

export const getGroupData = (data) => ({
  type: GET_GROUP_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const gotGroupData = (data) => ({
  type: GOT_GROUP_DATA,
  payload: data
})

export const getByidGroupData = (data) => ({
  type: GET_BY_ID_GROUP_DATA,
  payload: data
})
export const gotByIdGroupData = (data) => ({
  type: GOT_BY_ID_GROUP_DATA,
  payload: data
})

export const followGroup = (data) => ({
  type: FOLLOW_GROUP,
  payload: data
})
