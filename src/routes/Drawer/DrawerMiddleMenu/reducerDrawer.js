import { LOGGED_OUT, ON_DELETE_USER_SUCCESS, ON_ERROR, ON_LOGOUT } from './actionDrawer'

const initialState = {
  isLoading: false,
  isDeleteUser: false
}

const reducerDrawer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_LOGOUT:
      return {
        ...state,
        isLoading: true
      }
    case LOGGED_OUT:
      return {
        ...state,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case ON_DELETE_USER_SUCCESS:
      return {
        ...state,
        isDeleteUser: payload
      }
    default:
      return state
  }
}

export default reducerDrawer
