import { GET_MESSAGE_DATA, GOT_MESSAGE_DATA, ON_ERROR } from './actionMessageScreen'

const initialState = {
  isLoading: true,
  messagesListData: []
}

const reducerMessageScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MESSAGE_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_MESSAGE_DATA:
      return {
        ...state,
        isLoading: false,
        messagesListData: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        messagesListData: []
      }
    default:
      return state
  }
}

export default reducerMessageScreen
