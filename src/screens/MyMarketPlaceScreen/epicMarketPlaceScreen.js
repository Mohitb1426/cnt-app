import { ofType } from 'redux-observable'
import { from, of } from 'rxjs'
import {
  mergeMap, pluck, takeUntil, catchError, map
} from 'rxjs/operators'
import Config from '../../common/Config'
import { makeDeleteRequest, makeGetRequest } from '../../common/NetworkOps'
import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, GET_CATEGORY, GET_MP_DATA, GET_PRODUCT_DATA_BY_ID, GET_PRODUCT_DETAILS, addedProduct, getMPData, gotCategory, gotMPData, gotProductDataById, gotProductDetails, onError } from './actionMarketPlaceScreen'
import { Routes } from '../../routes/Routes'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

const onMarketPlaceData = async () => {
  const res = await makeGetRequest(`${Config.marketPlace.getMp}`)
  return res
}

export const epicGetMarketPlaceData = (action$, state$) => action$.pipe(
  ofType(GET_MP_DATA),
  pluck('payload'),
  mergeMap(() => {
    return from(onMarketPlaceData()).pipe(
      map((res) => {
        if (res) {
          return gotMPData(res?.results)
        }
        return onError()
      }),
      takeUntil(action$.pipe(ofType(GET_MP_DATA))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onAddProduct = async (data) => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(Config.marketPlace.addProduct, {
    method: 'post',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: data,
    timeout: 18000
  }).then((res) => res.json())
    .then((res) => {
      response = res
    })
    .catch((error) => {
      const errorObject = {
        code: 201,
        message: 'Failure',
        data: error
      }
      response = errorObject
    })
  return response
}

export const epicAddProductPost = (action$, state$) => action$.pipe(
  ofType(ADD_PRODUCT),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation } = data
    const {
      title,
      price,
      description,
      brand,
      tag,
      selectedLanguage,
      selectedImages,
      userID
    } = requestBody
    const formData = new FormData()
    formData.append('name', title)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('brand', brand)
    formData.append('tag', tag)
    formData.append('selectedLanguage', selectedLanguage)
    formData.append('brand', brand)
    formData.append('user', userID)
    formData.append('image', {
      uri: selectedImages.uri,
      type: selectedImages.type,
      name: selectedImages.name
    })
    return from(onAddProduct(formData)).pipe(
      mergeMap((res) => {
        if (res) {
          navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
          return of(addedProduct(), getMPData())
        }
        return addedProduct()
      }),
      takeUntil(action$.pipe(ofType(ADD_PRODUCT))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onProductDetailsByID = async (id) => {
  const res = await makeGetRequest(`${Config.marketPlace.getMpById}${id}`)
  return res
}

export const epicGetProductDetails = (action$, state$) => action$.pipe(
  ofType(GET_PRODUCT_DETAILS),
  pluck('payload'),
  mergeMap((data) => {
    return from(onProductDetailsByID(data)).pipe(
      map((res) => {
        if (res) {
          return gotProductDetails(res)
        }
        return gotProductDetails(res)
      }),
      takeUntil(action$.pipe(ofType(GET_PRODUCT_DETAILS))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onGetCategory = async () => {
  const res = await makeGetRequest(`${Config.marketPlace.getCategory}`)
  return res
}

export const epicGetCategory = (action$, state$) => action$.pipe(
  ofType(GET_CATEGORY),
  pluck('payload'),
  mergeMap(() => {
    return from(onGetCategory()).pipe(
      map((res) => {
        if (res) {
          return gotCategory(res?.results)
        }
        return gotCategory(res)
      }),
      takeUntil(action$.pipe(ofType(GET_CATEGORY))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onEditProduct = async ({ formData, id }) => {
  let response
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  await fetch(`${Config.marketPlace.addProduct}${id}/`, {
    method: 'put',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData,
    timeout: 18000
  }).then((res) => res.json())
    .then((res) => {
      response = res
    })
    .catch((error) => {
      const errorObject = {
        code: 201,
        message: 'Failure',
        data: error
      }
      response = errorObject
    })
  return response
}

export const epicEditProductPost = (action$, state$) => action$.pipe(
  ofType(EDIT_PRODUCT),
  pluck('payload'),
  mergeMap((data) => {
    const { requestBody, navigation, id } = data
    const {
      title,
      price,
      description,
      brand,
      tag,
      selectedLanguage,
      selectedImages,
      userID
    } = requestBody
    const formData = new FormData()
    formData.append('name', title)
    formData.append('price', price)
    formData.append('description', description)
    formData.append('brand', brand)
    formData.append('tag', tag)
    formData.append('selectedLanguage', selectedLanguage)
    formData.append('brand', brand)
    formData.append('user', userID)
    formData.append('image', {
      uri: selectedImages.uri,
      type: selectedImages.type,
      name: selectedImages.name
    })
    return from(onEditProduct({ formData, id })).pipe(
      mergeMap((res) => {
        if (res) {
          navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
          return of(addedProduct(), getMPData())
        }
        return addedProduct()
      }),
      takeUntil(action$.pipe(ofType(EDIT_PRODUCT))),
      catchError((error) => {
        return of(onError(error.response?.data?.message || ''))
      })
    )
  })
)

const onDeleteProductData = async (id) => {
  const res = await makeDeleteRequest(`${Config.marketPlace.addProduct}${id}/`)
  return res
}

export const epicDeleteProductData = (action$, state$) =>
  action$.pipe(
    ofType(DELETE_PRODUCT),
    pluck('payload'),
    mergeMap(data => {
      const { productId, navigation } = data
      return from(onDeleteProductData(productId)).pipe(
        mergeMap(res => {
          if (res) {
            navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
            return of(addedProduct(), getMPData())
          }
          return of(onError(), addedProduct(), getMPData())
        }),
        takeUntil(action$.pipe(ofType(DELETE_PRODUCT))),
        catchError(error => {
          return of(onError(error.response?.data?.message || ''))
        })
      )
    })
  )
