import { GET_CHAT_DATA_BY_ROOM, GOT_CHAT_DATA_BY_ROOM, ON_ERROR, RESET_CHAT_DATA, STORE_CHAT_ROOM_DETAILS } from './actionChatScreen'

const initialState = {
  isLoading: true,
  chatData: {},
  chatRoomData: [],
  chatRoomDetails: {}
}

const reducerChatScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CHAT_DATA_BY_ROOM:
      return {
        ...state,
        isLoading: true
      }
    case GOT_CHAT_DATA_BY_ROOM:
      return {
        ...state,
        isLoading: false,
        chatRoomData: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case RESET_CHAT_DATA:
      return {
        ...state,
        isLoading: false,
        chatRoomData: []
      }
    case STORE_CHAT_ROOM_DETAILS:
      return {
        ...state,
        chatRoomDetails: payload
      }
    default:
      return state
  }
}

export default reducerChatScreen
