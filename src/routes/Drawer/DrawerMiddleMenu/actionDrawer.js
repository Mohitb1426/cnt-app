const module_key = 'drawerScreen'

export const ON_LOGOUT = `${module_key}_on_logout`
export const LOGGED_OUT = `${module_key}_logged_out`
export const ON_ERROR = `${module_key}_on_error`
export const ON_DELETE_USER = `${module_key}_on_delete_user`
export const ON_DELETE_USER_SUCCESS = `${module_key}_on_delete_user_success`

export const onLogout = (data) => ({
  type: ON_LOGOUT,
  payload: data
})

export const loggedOut = (data) => ({
  type: LOGGED_OUT,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onDeleteUser = (data) => ({
  type: ON_DELETE_USER,
  payload: data
})

export const onDeleteUserSuccess = (data) => ({
  type: ON_DELETE_USER_SUCCESS,
  payload: data
})
