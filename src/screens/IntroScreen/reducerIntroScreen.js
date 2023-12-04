import { IS_USER_SIGNED } from './actionIntroScreen'

const initialState = {
  isLoading: false,
  isUserSigned: false
}

const reducerIntroScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_USER_SIGNED:
      return {
        ...state,
        isUserSigned: payload
      }
    default:
      return state
  }
}

export default reducerIntroScreen
