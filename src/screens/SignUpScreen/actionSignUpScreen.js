const module_key = 'signUpScreen'

export const ON_REGISTER_USER = `${module_key}_on_register_user`
export const ON_ERROR = `${module_key}_on_error`
export const USER_REGISTERED = `${module_key}_user_registered`
export const ALREADY_EXISTS_ERROR = `${module_key}_already_exists_error`

export const onRegisterUser = (data) => ({
  type: ON_REGISTER_USER,
  payload: data
})

export const userRegistered = (data) => ({
  type: USER_REGISTERED,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const alreadyExistsError = (data) => ({
  type: ALREADY_EXISTS_ERROR,
  payload: data
})
