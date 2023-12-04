const module_key = 'marketPlace'

export const GET_MP_DATA = `${module_key}_get_mp_data`
export const ON_ERROR = `${module_key}_on_error`
export const GOT_MP_DATA = `${module_key}_got_mp_data`
export const ADD_PRODUCT = `${module_key}_add_product`
export const EDIT_PRODUCT = `${module_key}_edit_product`
export const ADDED_PRODUCT = `${module_key}_added_product`
export const GET_PRODUCT_DETAILS = `${module_key}_get_product_details`
export const GOT_PRODUCT_DETAILS = `${module_key}_got_product_details`
export const GET_CATEGORY = `${module_key}_get_category`
export const GOT_CATEGORY = `${module_key}_got_category`
export const GET_PRODUCT_DATA_BY_ID = `${module_key}_get_product_data_by_id`
export const GOT_PRODUCT_DATA_BY_ID = `${module_key}_got_product_data_by_id`
export const DELETE_PRODUCT = `${module_key}_delete_product`

export const getMPData = (data) => ({
  type: GET_MP_DATA,
  payload: data
})

export const onError = (data) => ({
  type: ON_ERROR,
  payload: data
})

export const gotMPData = (data) => ({
  type: GOT_MP_DATA,
  payload: data
})

export const addProduct = (data) => ({
  type: ADD_PRODUCT,
  payload: data
})
export const editProduct = (data) => ({
  type: EDIT_PRODUCT,
  payload: data
})

export const addedProduct = (data) => ({
  type: ADDED_PRODUCT,
  payload: data
})

export const getProductDetails = (data) => ({
  type: GET_PRODUCT_DETAILS,
  payload: data
})

export const gotProductDetails = (data) => ({
  type: GOT_PRODUCT_DETAILS,
  payload: data
})

export const getCategory = (data) => ({
  type: GET_CATEGORY,
  payload: data
})

export const gotCategory = (data) => ({
  type: GOT_CATEGORY,
  payload: data
})

export const getProductDataById = (data) => ({
  type: GET_CATEGORY,
  payload: data
})

export const gotProductDataById = (data) => ({
  type: GOT_CATEGORY,
  payload: data
})

export const deleteProduct = (data) => ({
  type: DELETE_PRODUCT,
  payload: data
})
