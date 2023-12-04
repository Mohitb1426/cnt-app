import axios from 'axios'
import Config from './Config'
import StorageUtils from './StorageUtils'
import AsyncKeys from './AsyncKeys'

const unAuthRoutes = [
  Config.auth.registerUser,
  Config.auth.verifyPhoneNumber,
  Config.auth.verifyOtp,
  Config.auth.forgotPassword,
  Config.auth.resetPassword
]

const API_TIMEOUT = 18000

axios.interceptors.request.use(async (config) => {
  let newConfig = config
  try {
    const isTokenRequired = !unAuthRoutes.includes(config.url)
    if (isTokenRequired) {
      const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
      newConfig = {
        ...newConfig,
        headers: {
          ...newConfig.headers,
          Authorization: `Bearer ${token}`
          // 'auth-id': userId,
        },
        timeout: API_TIMEOUT
      }
    } else {
      newConfig = {
        ...newConfig,
        headers: {
          ...newConfig.headers
        },
        timeout: API_TIMEOUT
      }
    }
  } catch (e) {
    // captureApiFails(e)
    // debugLog(TAG, ' 40 Error in interceptor request', e)
  }
  return newConfig
}, (error) => {
  // captureApiFails(error)
  // debugLog(TAG, ' 44Error in interceptor request', error)
  return Promise.reject(error)
})

axios.interceptors.response.use(
  async (res) => {
    try {
      const { data } = res
      const { status, message, errorCode } = data
      // if (!status) debugLog(TAG, `${errorCode} - ${message} - ${res.config.url}`)
      return data
    } catch (e) {
      // captureApiFails(e)
      // debugLog(TAG, 'error', e)
    }
    return {
      success: false,
      message: 'NetworkOps: Something went wrong intercepting response'
    }
  },

  (error) => {
    // captureApiFails(error)
    // debugLog(TAG, error.message)
    return Promise.reject(error)
  }
)

export const makeGetRequest = (URL) => axios.get(URL)
export const makePostRequest = (URL, data = {}) => axios.post(URL, { ...data })
export const makePutRequest = (URL, data = {}) => axios.put(URL, { ...data })
export const makePatchRequest = (URL, data = {}) => axios.patch(URL, { ...data })
export const makeDeleteRequest = (URL) => axios.delete(URL)
