const module_key = 'notificationScreen'

export const GET_NOTIFICATION = `${module_key}_get_notification`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_NOTIFICATION = `${module_key}_got_notification`
export const MARK_ALL_AS_READ = `${module_key}_mark_all_as_read`
export const READ_DONE = `${module_key}_read_done`

export const getNotificationData = (data) => ({
  type: GET_NOTIFICATION,
  payload: {}
})

export const gotNotificationData = (data) => ({
  type: GOT_NOTIFICATION,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const markAllAsRead = () => ({
  type: MARK_ALL_AS_READ,
  payload: {}
})

export const readDone = (data) => ({
  type: READ_DONE,
  payload: data
})
