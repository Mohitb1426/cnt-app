import { GOT_OTP_TOKEN, ON_ERROR, ON_OTP_VERIFY, OTP_NOT_EXISTS, SET_USER_ID } from './actionOtpScreen'

const initialState = {
  isLoading: false,
  otpNotExists: false,
  errorMessage: '',
  userId: ''
}

const reducerOtpScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_OTP_VERIFY:
      return {
        ...state,
        isLoading: true
      }
    case OTP_NOT_EXISTS:
      return {
        ...state,
        isLoading: false,
        otpNotExists: payload?.otpNotExists,
        errorMessage: payload?.errorMessage
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case GOT_OTP_TOKEN:
      return {
        ...state,
        isLoading: false
      }
    case SET_USER_ID:
      return {
        ...state,
        userId: payload,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducerOtpScreen
