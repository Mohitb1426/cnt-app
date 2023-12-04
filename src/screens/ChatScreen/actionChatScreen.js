const module_key = 'chatScreen'

export const GET_CHAT_DATA = `${module_key}_get_chat_data`
export const GOT_CHAT_DATA = `${module_key}_got_chat_data`
export const ON_ERROR = `${module_key}_on_error`
export const GET_CHAT_DATA_BY_ROOM = `${module_key}_get_chat_data_by_room`
export const GOT_CHAT_DATA_BY_ROOM = `${module_key}_got_chat_data_by_room`
export const RESET_CHAT_DATA = `${module_key}_reset_chat_data`
export const STORE_CHAT_ROOM_DETAILS = `${module_key}_store_chat_room_details`

export const getChatData = (data) => ({
  type: GET_CHAT_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const gotChatData = (data) => ({
  type: GOT_CHAT_DATA,
  payload: data
})

export const getChatDataByRoom = (data) => ({
  type: GET_CHAT_DATA_BY_ROOM,
  payload: data
})

export const gotChatDataByRoom = (data) => ({
  type: GOT_CHAT_DATA_BY_ROOM,
  payload: data
})

export const resetChatData = (data) => ({
  type: RESET_CHAT_DATA,
  payload: data
})

export const storeChatRoomDetails = (data) => ({
  type: STORE_CHAT_ROOM_DETAILS,
  payload: data
})
