import { GET_COMMENT, GET_REELS_COMMENTS, GOT_COMMENT, GOT_REELS_COMMENTS, ON_ERROR } from './actionCommentsScreen'

const initialState = {
  isLoading: false,
  commentData: []
}

const reducerCommentsScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COMMENT:
      return {
        ...state,
        isLoading: false
      }
    case GOT_COMMENT:
      return {
        ...state,
        commentData: payload,
        isLoading: false
      }
    case GET_REELS_COMMENTS:
      return {
        ...state,
        isLoading: false
      }
    case GOT_REELS_COMMENTS:
      return {
        ...state,
        commentData: payload,
        isLoading: false
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state
  }
}

export default reducerCommentsScreen
