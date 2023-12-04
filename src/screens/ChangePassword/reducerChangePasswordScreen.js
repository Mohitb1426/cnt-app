import { ON_CHANGE_PASSWORD, ON_CHANGE_PASSWORD_DONE, ON_ERROR, PASSWORD_VALIDATION_ERROR } from './actionChangePasswordScreen'

const initialState = {
  isLoading: false,
  passwordValidationError: false,
  errorMessage: ''
}

const reducerChangePasswordScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_CHANGE_PASSWORD:
      return {
        ...state,
        isLoading: true
      }
    case ON_CHANGE_PASSWORD_DONE:
      return {
        ...state,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case PASSWORD_VALIDATION_ERROR:
      return {
        ...state,
        isLoading: false,
        passwordValidationError: payload?.passwordValidationError,
        errorMessage: payload?.errorMessage
      }
    default:
      return state
  }
}

export default reducerChangePasswordScreen
