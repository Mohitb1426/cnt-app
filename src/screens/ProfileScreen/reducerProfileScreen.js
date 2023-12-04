import {
  ADD_FRIEND,
  GET_POST_DATA_BY_ID,
  GET_PROFILE_DATA,
  GET_PROFILE_POST_DATA,
  GOT_POST_DATA_BY_ID,
  GOT_PROFILE_DATA,
  GOT_PROFILE_POST_DATA,
  GOT_SEARCH_USER,
  GOT_USER_FRIEND_LIST,
  LIKED_CLICKED,
  ON_ERROR,
  SEARCH_USER,
  SENT_USER_REQUEST,
  SET_MEMBER,
  SHOW_PROFILE_IMAGE,
  UPDATE_PROFILE_IMAGE
} from './actionProfileScreen'

const initialState = {
  isLoading: true,
  errorMessage: '',
  userId: '',
  profileData: {},
  profilePostData: [],
  isPostLoading: true,
  isEdited: false,
  postDataById: {},
  userFriendList: [],
  searchLoading: true,
  friendList: [],
  member: [],
  likeClick: false,
  showProfileImage: false
}

const reducerProfileScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_PROFILE_DATA:
      return {
        ...state,
        isLoading: false,
        profileData: payload
      }
    case GOT_PROFILE_POST_DATA:
      return {
        ...state,
        isPostLoading: false,
        profilePostData: payload
      }
    case GET_PROFILE_POST_DATA:
      return {
        ...state,
        isPostLoading: true
      }
    case GET_POST_DATA_BY_ID:
      return {
        ...state,
        isPostLoading: true
      }
    case GOT_POST_DATA_BY_ID:
      return {
        ...state,
        isPostLoading: false,
        postDataById: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        isPostLoading: false,
        userFriendList: [],
        searchLoading: false
      }
    case GOT_USER_FRIEND_LIST:
      return {
        ...state,
        userFriendList: payload
      }
    case UPDATE_PROFILE_IMAGE:
      return {
        ...state,
        isLoading: true
      }
    case SEARCH_USER:
      return {
        ...state,
        searchLoading: true
      }
    case GOT_SEARCH_USER:
      return {
        ...state,
        searchLoading: false,
        friendList: payload
      }
    case ADD_FRIEND:
      return {
        ...state,
        searchLoading: false
      }
    case SET_MEMBER:
      return {
        ...state,
        member: payload
      }
    case LIKED_CLICKED:
      return {
        ...state,
        likeClick: payload
      }
    case SHOW_PROFILE_IMAGE:
      return {
        ...state,
        showProfileImage: payload
      }
    // case SENT_USER_REQUEST:
    //   return {
    //     ...state,
    //     showProfileImage: payload
    //   }
    default:
      return state
  }
}

export default reducerProfileScreen
