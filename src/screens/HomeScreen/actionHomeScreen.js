const module_key = 'homeScreen'

export const GET_HOME_FEED_DATA = `${module_key}_get_home_feed_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_HOME_FEED_DATA = `${module_key}_got_home_feed_data`
export const ON_ADD_STORY = `${module_key}_on_add_story`
export const ON_ADDED_STORY = `${module_key}_on_added_story`
export const GET_USER_STORY = `${module_key}_get_user_story`
export const GOT_USER_STORY = `${module_key}_got_user_story`
export const GET_ALL_STORY = `${module_key}_get_all_story`
export const GOT_ALL_STORY = `${module_key}_got_all_story`
export const PAGINATION_LOADER = `${module_key}_pagination_loader`
export const IS_LOADING_HOME = `${module_key}_is_loading_home`
export const ON_VIEW_POST = `${module_key}_on_view_post`

export const getHomeFeedData = (data) => ({
  type: GET_HOME_FEED_DATA,
  payload: data
})

export const gotHomeFeedData = (data) => ({
  type: GOT_HOME_FEED_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const onAddStory = (data) => ({
  type: ON_ADD_STORY,
  payload: data
})

export const onAddedStory = (data) => ({
  type: ON_ADDED_STORY,
  payload: data
})

export const getUserStory = (data) => ({
  type: GET_USER_STORY,
  payload: {}
})

export const gotUserStory = (data) => ({
  type: GOT_USER_STORY,
  payload: data
})

export const getAllStory = (data) => ({
  type: GET_ALL_STORY,
  payload: {}
})

export const gotAllStory = (data) => ({
  type: GOT_ALL_STORY,
  payload: data
})

export const paginationLoader = (data) => ({
  type: PAGINATION_LOADER,
  payload: data
})

export const isLoadingHome = (data) => ({
  type: IS_LOADING_HOME,
  payload: data
})

export const onViewPost = (data) => ({
  type: ON_VIEW_POST,
  payload: data
})
