import { GET_HOME_FEED_DATA, GET_USER_STORY, GOT_ALL_STORY, GOT_HOME_FEED_DATA, GOT_USER_STORY, IS_LOADING_HOME, ON_ADDED_STORY, ON_ADD_STORY, ON_ERROR, PAGINATION_LOADER } from './actionHomeScreen'

const initialState = {
  isLoading: true,
  homeFeedData: [],
  showErrorMessage: false,
  errorMessage: '',
  isStoryLoading: false,
  userStory: [],
  allStory: [],
  isLoadData: false
}

const reducerHomeScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_HOME_FEED_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_HOME_FEED_DATA:
      return {
        ...state,
        homeFeedData: payload,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        homeFeedData: [],
        isStoryLoading: false
      }
    case ON_ADD_STORY:
      return {
        ...state,
        isStoryLoading: true,
        isLoading: true

      }
    case ON_ADDED_STORY:
      return {
        ...state,
        isStoryLoading: false
      }
    case GET_USER_STORY:
      return {
        ...state,
        isStoryLoading: true,
        isLoading: true
      }
    case GOT_USER_STORY:
      return {
        ...state,
        userStory: payload
      }
    case GOT_ALL_STORY:
      return {
        ...state,
        allStory: payload,
        isLoading: false
      }
    case PAGINATION_LOADER:
      return {
        ...state,
        isLoadData: payload
      }
    case IS_LOADING_HOME:
      return {
        ...state,
        isLoading: payload
      }
    default:
      return state
  }
}

export default reducerHomeScreen
