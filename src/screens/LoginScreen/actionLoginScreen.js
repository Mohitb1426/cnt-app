const module_key = 'loginScreen'

export const ON_SIGN_IN = `${module_key}_on_sign_in`
export const ON_ERROR = `${module_key}_on_error`
export const SET_MOBILE_NUMBER = `${module_key}_set_mobile_number`
export const SET_COUNTRY_CODE = `${module_key}_set_country_code`
export const OTP_SENT = `${module_key}_otp_sent`
export const USER_NOT_EXISTS = `${module_key}_user_not_exists`

export const onSignIn = (data) => ({
  type: ON_SIGN_IN,
  payload: data
})

export const setMobileNumber = (data) => ({
  type: SET_MOBILE_NUMBER,
  payload: data
})

export const setCountryCode = (data) => ({
  type: SET_COUNTRY_CODE,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const otpSent = (data) => ({
  type: OTP_SENT,
  payload: data
})

export const userExists = (data) => ({
  type: USER_NOT_EXISTS,
  payload: data
})
