const module_key = 'changePasswordScreen'

export const ON_CHANGE_PASSWORD = `${module_key}_on_change_password`
export const ON_ERROR = `${module_key}_on_error`
export const PASSWORD_VALIDATION_ERROR = `${module_key}_password_validation_error`
export const ON_CHANGE_PASSWORD_DONE = `${module_key}_on_change_password_done`

export const onForgotPassword = (data) => ({
  type: ON_CHANGE_PASSWORD,
  payload: data
})

export const onForgotPasswordDone = (data) => ({
  type: ON_CHANGE_PASSWORD_DONE,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onPasswordValidationError = (data) => ({
  type: PASSWORD_VALIDATION_ERROR,
  payload: data
})
