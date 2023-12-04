import {
  GET_BY_ID_GROUP_DATA,
  GET_GROUP_DATA,
  GOT_BY_ID_GROUP_DATA,
  GOT_GROUP_DATA,
  ON_ERROR
} from './actionGroupAndCommunityScreen'

const initialState = {
  isLoading: true,
  groupAndCommunityData: [],
  groupAndCommunityDeatilsData: {},
  isDetailsLoading: true
}

const reducerGroupAndCommunityScreen = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case GET_GROUP_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_GROUP_DATA:
      return {
        ...state,
        isLoading: false,
        groupAndCommunityData: payload
      }
    case GET_BY_ID_GROUP_DATA:
      return {
        ...state,
        isDetailsLoading: true
      }
    case GOT_BY_ID_GROUP_DATA:
      return {
        ...state,
        isDetailsLoading: false,
        groupAndCommunityDeatilsData: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        isDetailsLoading: false
      }
    default:
      return state
  }
}

export default reducerGroupAndCommunityScreen
