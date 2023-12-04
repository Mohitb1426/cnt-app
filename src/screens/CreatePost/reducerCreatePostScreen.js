import { ON_CREATED_POST, ON_CREATE_POST, ON_ERROR } from './actionCreatePostScreen'

const initialState = {
  isLoading: false,
  showErrorMessage: false,
  errorMessage: '',
  postCreated: false
}

const reducerCreatePostScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_CREATE_POST:
      return {
        ...state,
        isLoading: true
      }
    case ON_CREATED_POST:
      return {
        ...state,
        isLoading: false,
        postCreated: true
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

export default reducerCreatePostScreen
