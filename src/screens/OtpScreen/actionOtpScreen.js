const module_key = 'otpScreen'

export const ON_OTP_VERIFY = `${module_key}_on_otp_verify`
export const ON_ERROR = `${module_key}_on_error`
export const OTP_NOT_EXISTS = `${module_key}_otp_not_exists`
export const GOT_OTP_TOKEN = `${module_key}_got_otp_token`
export const SET_USER_ID = `${module_key}_set_user_id`

export const onOtpVerify = (data) => ({
  type: ON_OTP_VERIFY,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const otpNotExistsAction = (data) => ({
  type: OTP_NOT_EXISTS,
  payload: data
})

export const gotOtpToken = (data) => ({
  type: GOT_OTP_TOKEN,
  payload: data
})

export const setUserId = (data) => ({
  type: SET_USER_ID,
  payload: data
})
