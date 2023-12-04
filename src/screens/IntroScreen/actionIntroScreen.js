const module_key = 'introScreen'

export const IS_USER_SIGNED = `${module_key}_is_user_signed`

export const isUserSignedAction = (data) => ({
  type: IS_USER_SIGNED,
  payload: data
})
