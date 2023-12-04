import { GET_REELS_DATA, GOT_REELS_DATA, ON_ERROR, ON_REEL_LIKE, ON_REEL_LIKE_FALSE } from './actionReelsScreen'

const initialState = {
  isLoading: true,
  reelData: [],
  reelLiked: false
}

const reducerReelsScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REELS_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_REELS_DATA:
      return {
        ...state,
        isLoading: false,
        reelData: payload
      }
    case ON_REEL_LIKE_FALSE:
      return {
        ...state,
        reelLiked: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        reelData: []
      }
    default:
      return state
  }
}

export default reducerReelsScreen
