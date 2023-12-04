import Config from 'react-native-config'
// import { Platform } from 'react-native'

export const BASE_URL_USER = Config.API_HOST_USER

const isStaging = Config.APP_ENV === 'staging'
const useInterceptor = Config.USE_INTERCEPTOR === 'true'
const versionName = Config.ANDROID_VERSION_NAME
const appSignId = Config.APP_SIGN
const appId = Config.APP_ID
// const ANDROID_APP_ID = 'com.cnt'
// const ANDROID_URL = `https://play.google.com/store/apps/details?id=${ANDROID_APP_ID}`
// const APP_URL = (Platform.OS === 'ios') ? IOS_URL : ANDROID_URL;
export default {
  appId,
  appSignId,
  versionName,
  isStaging,
  useInterceptor,
  auth: {
    verifyPhoneNumber: `${BASE_URL_USER}api/verify/phone/`,
    verifyOtp: `${BASE_URL_USER}api/verify/otp/`,
    registerUser: `${BASE_URL_USER}api/register/`,
    forgotPassword: `${BASE_URL_USER}api/forgot-password/`,
    resetPassword: `${BASE_URL_USER}api/reset-password/`,
    logout: `${BASE_URL_USER}api/token/logout/`,
  },
  groupAndCommunity: {
    createGroup: `${BASE_URL_USER}api/v1/group-community/`,
    editGroup: `${BASE_URL_USER}api/v1/group/`,
    followGroup: `${BASE_URL_USER}api/v1/group-follow/`
  },
  post: {
    createPost: `${BASE_URL_USER}api/v1/create-post/`,
    getPosts: `${BASE_URL_USER}api/v1/post/`,
    getPostsList: `${BASE_URL_USER}api/v1/list-post/`,
    viewPost: `${BASE_URL_USER}api/v1/viewer/`
  },
  profile: {
    profileApi: `${BASE_URL_USER}api/v1/profile/`,
    deleteUser: `${BASE_URL_USER}api/v1/profile/`,
    followUser: `${BASE_URL_USER}api/v1/follow-user/`
  },
  story: {
    userStory: `${BASE_URL_USER}api/v1/getAllStories/`,
    getStories: `${BASE_URL_USER}api/v1/getUserStories/`,
    create: `${BASE_URL_USER}api/v1/create-story/`
  },
  notification: {
    notification: `${BASE_URL_USER}api/v1/notification/list`,
    markAllAsRead: `${BASE_URL_USER}api/v1/mark-as-allseen/`
  },
  friends: {
    friends: `${BASE_URL_USER}api/v1/friend/`,
    sentReqFriends: `${BASE_URL_USER}api/v1/send-friend-request/`
  },
  chat: {
    chat: `${BASE_URL_USER}api/v1/chat/`,
    message: `${BASE_URL_USER}api/v1/mychat/`,
    messageByRoomId: `${BASE_URL_USER}api/v1/chat/messages/`
  },
  like: {
    like: `${BASE_URL_USER}api/v1/like-dislike-post/`,
    reelLike: `${BASE_URL_USER}api/v1/reel-likedislike/`
  },
  reels: {
    getReels: `${BASE_URL_USER}api/v1/reels`
  },
  marketPlace: {
    getMp: `${BASE_URL_USER}api/v1/product/`,
    addProduct: `${BASE_URL_USER}api/v1/product/`,
    getMpById: `${BASE_URL_USER}api/v1/product/`,
    getCategory: `${BASE_URL_USER}api/v1/product-category/`
  },
  search: {
    searchFriend: `${BASE_URL_USER}api/v1/search-user/`
  },
  comments: {
    comment: `${BASE_URL_USER}api/v1/comment/`,
    reelComment: `${BASE_URL_USER}api/v1/reel-comment/`,
    getReelComment: `${BASE_URL_USER}api/v1/reels-comment/`

  }
}
