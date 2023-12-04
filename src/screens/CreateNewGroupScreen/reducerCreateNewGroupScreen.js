import { ON_CREATED_GROUP, ON_CREATE_GROUP, ON_ERROR } from './actionCreateNewGroupScreen'

const initialState = {
  isLoading: false,
  showErrorMessage: false,
  errorMessage: ''
}

const reducerCreateNewGroupScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_CREATE_GROUP:
      return {
        ...state,
        isLoading: true
      }
    case ON_CREATED_GROUP:
      return {
        ...state,
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

export default reducerCreateNewGroupScreen
