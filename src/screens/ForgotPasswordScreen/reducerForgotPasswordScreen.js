import { ON_ERROR, ON_FORGOT_PASSWORD, ON_FORGOT_PASSWORD_DONE, USER_NOT_EXISTS_FORGOT_PASSWORD } from './actionForgotPasswordScreen'

const initialState = {
  isLoading: false,
  showErrorMessage: false,
  errorMessage: ''
}

const reducerForgotPasswordScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_FORGOT_PASSWORD:
      return {
        ...state,
        isLoading: true
      }
    case ON_FORGOT_PASSWORD_DONE:
      return {
        ...state,
        isLoading: false
      }
    case USER_NOT_EXISTS_FORGOT_PASSWORD:
      return {
        showErrorMessage: payload?.showErrorMessage,
        errorMessage: payload?.errorMessage,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducerForgotPasswordScreen
