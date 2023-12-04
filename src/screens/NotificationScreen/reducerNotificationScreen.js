import { GET_NOTIFICATION, GOT_NOTIFICATION, MARK_ALL_AS_READ, ON_ERROR } from './actionNotificationScreen'

const initialState = {
  isLoading: true,
  notificationData: []
}

const reducerNotificationScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_NOTIFICATION:
      return {
        ...state,
        isLoading: true
      }
    case GOT_NOTIFICATION:
      return {
        ...state,
        isLoading: false,
        notificationData: payload
      }
    case MARK_ALL_AS_READ:
      return {
        ...state,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        notificationData: []
      }
    default:
      return state
  }
}

export default reducerNotificationScreen
