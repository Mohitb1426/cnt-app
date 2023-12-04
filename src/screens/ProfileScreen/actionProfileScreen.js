const module_key = 'profileScreen'

export const GET_PROFILE_DATA = `${module_key}_get_profile_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_PROFILE_DATA = `${module_key}_got_profile_data`
export const GET_PROFILE_POST_DATA = `${module_key}_get_profile_post_data`
export const GOT_PROFILE_POST_DATA = `${module_key}_got_profile_post_data`
export const EDIT_PROFILE_POST_DATA = `${module_key}_edit_profile_post_data`
export const DELETE_PROFILE_POST_DATA = `${module_key}_delete_profile_post_data`
export const ON_EDITED_PROFILE_POST_DATA = `${module_key}_on_edited_profile_post_data`
export const GET_POST_DATA_BY_ID = `${module_key}_get_post_data_by_id`
export const GOT_POST_DATA_BY_ID = `${module_key}_got_post_data_by_id`
export const GET_USER_FRIEND_LIST = `${module_key}_get_user_friend_list`
export const GOT_USER_FRIEND_LIST = `${module_key}_got_user_friend_list`
export const LIKE_POST = `${module_key}_like_post`
export const DISLIKE_POST = `${module_key}_dislike_post`
export const UPDATE_PROFILE_IMAGE = `${module_key}_update_profile_image`
export const SEARCH_USER = `${module_key}_search_user`
export const GOT_SEARCH_USER = `${module_key}_got_search_user`
export const ADD_FRIEND = `${module_key}_add_friend`
export const SET_MEMBER = `${module_key}_set_member`
export const LIKED_CLICKED = `${module_key}_liked_clicked`
export const SHOW_PROFILE_IMAGE = `${module_key}_show_profile_image`
export const SENT_USER_REQUEST = `${module_key}_sent_user_request`
export const FOLLOW_USER = `${module_key}_follow_user`

export const getProfileData = data => ({
  type: GET_PROFILE_DATA,
  payload: data
})

export const onError = data => ({
  type: ON_ERROR,
  payload: data
})

export const gotProfileData = data => ({
  type: GOT_PROFILE_DATA,
  payload: data
})

export const getProfilePostData = data => ({
  type: GET_PROFILE_POST_DATA,
  payload: data
})

export const gotProfilePostData = data => ({
  type: GOT_PROFILE_POST_DATA,
  payload: data
})

export const editProfilePostData = data => ({
  type: EDIT_PROFILE_POST_DATA,
  payload: data
})

export const onEditedProfilePostData = data => ({
  type: ON_EDITED_PROFILE_POST_DATA,
  payload: data
})

export const deleteProfilePostData = data => ({
  type: DELETE_PROFILE_POST_DATA,
  payload: data
})

export const getPostDataById = data => ({
  type: GET_POST_DATA_BY_ID,
  payload: data
})

export const gotPostDataById = data => ({
  type: GOT_POST_DATA_BY_ID,
  payload: data
})

export const getUserFriendList = data => ({
  type: GET_USER_FRIEND_LIST,
  payload: data
})

export const gotUserFriendList = data => ({
  type: GOT_USER_FRIEND_LIST,
  payload: data
})

export const likePost = data => ({
  type: LIKE_POST,
  payload: data
})

export const likedPost = data => ({
  type: DISLIKE_POST,
  payload: data
})

export const updateProfileList = data => ({
  type: UPDATE_PROFILE_IMAGE,
  payload: data
})

export const searchUser = data => ({
  type: SEARCH_USER,
  payload: data
})

export const gotSearchUser = data => ({
  type: GOT_SEARCH_USER,
  payload: data
})

export const addUserFriend = data => ({
  type: ADD_FRIEND,
  payload: data
})

export const sentUserRequest = data => ({
  type: SENT_USER_REQUEST,
  payload: data
})

export const setMember = data => ({
  type: SET_MEMBER,
  payload: data
})

export const likeClicked = data => ({
  type: LIKED_CLICKED,
  payload: data
})

export const showProfileImageAction = data => ({
  type: SHOW_PROFILE_IMAGE,
  payload: data
})

export const followUser = data => ({
  type: FOLLOW_USER,
  payload: data
})
