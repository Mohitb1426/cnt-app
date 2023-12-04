import { ALREADY_EXISTS_ERROR, ON_ERROR, ON_REGISTER_USER, USER_REGISTERED } from './actionSignUpScreen'

const initialState = {
  isLoading: false,
  isUserAlreadyExits: false,
  errorMessage: ''
}

const reducerSignUpScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_REGISTER_USER:
      return {
        ...state,
        isLoading: true
      }
    case USER_REGISTERED:
      return {
        ...state,
        isLoading: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case ALREADY_EXISTS_ERROR:
      return {
        ...state,
        isUserAlreadyExits: payload?.isUserAlreadyExits,
        errorMessage: payload?.errorMessage,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducerSignUpScreen
