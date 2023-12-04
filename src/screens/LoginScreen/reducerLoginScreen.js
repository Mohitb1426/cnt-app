import { ON_ERROR, ON_SIGN_IN, OTP_SENT, SET_COUNTRY_CODE, SET_MOBILE_NUMBER, USER_NOT_EXISTS } from './actionLoginScreen'

const initialState = {
  isLoading: false,
  mobileNumber: '',
  countryCode: '',
  userNotExists: false,
  errorMessage: ''
}

const reducerLoginScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_SIGN_IN:
      return {
        ...state,
        isLoading: true
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    case SET_MOBILE_NUMBER:
      return {
        ...state,
        mobileNumber: payload
      }
    case SET_COUNTRY_CODE:
      return {
        ...state,
        countryCode: payload
      }
    case OTP_SENT:
      return {
        ...state,
        isLoading: false
      }
    case USER_NOT_EXISTS:
      return {
        ...state,
        isLoading: false,
        userNotExists: payload?.userNotExists,
        errorMessage: payload?.errorMessage
      }
    default:
      return state
  }
}

export default reducerLoginScreen
