const module_key = 'messageScreen'

export const GET_MESSAGE_DATA = `${module_key}_get_message_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_MESSAGE_DATA = `${module_key}_got_message_data`

export const getMessageData = (data) => ({
  type: GET_MESSAGE_DATA,
  payload: {}
})

export const gotMessageData = (data) => ({
  type: GOT_MESSAGE_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})
