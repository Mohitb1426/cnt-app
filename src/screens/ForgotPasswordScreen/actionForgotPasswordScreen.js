const module_key = 'forgotPasswordScreen'

export const ON_FORGOT_PASSWORD = `${module_key}_on_forgot_password`
export const ON_ERROR = `${module_key}_on_error`
export const USER_NOT_EXISTS_FORGOT_PASSWORD = `${module_key}_user_not_exists_forgot_password`
export const ON_FORGOT_PASSWORD_DONE = `${module_key}_on_forgot_password_done`

export const onForgotPassword = (data) => ({
  type: ON_FORGOT_PASSWORD,
  payload: data
})

export const onForgotPasswordDone = (data) => ({
  type: ON_FORGOT_PASSWORD_DONE,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})
export const userNotExistsForgotPassword = (data) => ({
  type: USER_NOT_EXISTS_FORGOT_PASSWORD,
  payload: data
})
