import { combineReducers } from 'redux'

import reducerLoginScreen from '../../screens/LoginScreen/reducerLoginScreen'
import reducerSignUpScreen from '../../screens/SignUpScreen/reducerSignUpScreen'
import reducerOtpScreen from '../../screens/OtpScreen/reducerOtpScreen'
import reducerForgotPasswordScreen from '../../screens/ForgotPasswordScreen/reducerForgotPasswordScreen'
import reducerChangePasswordScreen from '../../screens/ChangePassword/reducerChangePasswordScreen'
import reducerIntroScreen from '../../screens/IntroScreen/reducerIntroScreen'
import reducerDrawer from '../../routes/Drawer/DrawerMiddleMenu/reducerDrawer'
import reducerCreateNewGroupScreen from '../../screens/CreateNewGroupScreen/reducerCreateNewGroupScreen'
import reducerGroupAndCommunityScreen from '../../screens/GroupAndCommunityScreen/reducerGroupAndCommunityScreen'
import reducerCreatePostScreen from '../../screens/CreatePost/reducerCreatePostScreen'
import reducerProfileScreen from '../../screens/ProfileScreen/reducerProfileScreen'
import reducerHomeScreen from '../../screens/HomeScreen/reducerHomeScreen'
import reducerNotificationScreen from '../../screens/NotificationScreen/reducerNotificationScreen'
import reducerMessageScreen from '../../screens/MessagesScreen/reducerMessageScreen'
import reducerReelsScreen from '../../screens/ReelsComponent/reducerReelsScreen'
import reducerMarketPlaceScreen from '../../screens/MyMarketPlaceScreen/reducerMarketPlaceScreen'
import reducerChatScreen from '../../screens/ChatScreen/reducerChatScreen'
import reducerCommentsScreen from '../../screens/CommentsScreen/reducerCommentsScreen'

const rootReducer = combineReducers({
  reducerLoginScreen,
  reducerSignUpScreen,
  reducerOtpScreen,
  reducerForgotPasswordScreen,
  reducerChangePasswordScreen,
  reducerIntroScreen,
  reducerDrawer,
  reducerCreateNewGroupScreen,
  reducerGroupAndCommunityScreen,
  reducerCreatePostScreen,
  reducerProfileScreen,
  reducerHomeScreen,
  reducerNotificationScreen,
  reducerMessageScreen,
  reducerReelsScreen,
  reducerMarketPlaceScreen,
  reducerChatScreen,
  reducerCommentsScreen
})

export default rootReducer
