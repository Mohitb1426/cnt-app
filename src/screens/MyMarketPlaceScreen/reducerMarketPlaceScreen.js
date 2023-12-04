import { ADDED_PRODUCT, ADD_PRODUCT, EDIT_PRODUCT, GET_CATEGORY, GET_MP_DATA, GET_PRODUCT_DETAILS, GOT_CATEGORY, GOT_MP_DATA, GOT_PRODUCT_DATA_BY_ID, GOT_PRODUCT_DETAILS, ON_ERROR } from './actionMarketPlaceScreen'

const initialState = {
  isLoading: true,
  mpData: [],
  productDetails: [],
  isProductDetailsLoading: true,
  isCategoryLoading: true,
  categoryData: [],
  productDataById: []
}

const reducerMarketPlaceScreen = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MP_DATA:
      return {
        ...state,
        isLoading: true
      }
    case GOT_MP_DATA:
      return {
        ...state,
        isLoading: false,
        mpData: payload
      }
    case ON_ERROR:
      return {
        ...state,
        isLoading: false,
        mpData: [],
        isProductDetailsLoading: false
      }
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        isProductDetailsLoading: true
      }
    case GOT_PRODUCT_DETAILS:
      return {
        ...state,
        isProductDetailsLoading: false,
        productDetails: payload
      }
    case GET_CATEGORY:
      return {
        ...state,
        isCategoryLoading: true
      }
    case GOT_CATEGORY:
      return {
        ...state,
        isCategoryLoading: false,
        categoryData: payload
      }
    case ADD_PRODUCT:
      return {
        ...state,
        isProductCreating: true
      }
    case EDIT_PRODUCT:
      return {
        ...state,
        isProductCreating: true
      }
    case ADDED_PRODUCT:
      return {
        ...state,
        isProductCreating: false
      }
    case GOT_PRODUCT_DATA_BY_ID:
      return {
        ...state,
        productDataById: payload
      }
    default:
      return state
  }
}

export default reducerMarketPlaceScreen
