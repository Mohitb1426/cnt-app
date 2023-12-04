/* eslint-disable react/prop-types */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorTheme, FontTheme } from '../common/AppStyles'
import { Routes } from './Routes'
import ComponentDrawer from './Drawer/ComponentDrawer'
import CreatePost from '../screens/CreatePost'
import NotificationScreen from '../screens/NotificationScreen'
import MessagesScreen from '../screens/MessagesScreen'
import VideoCallingScreen from '../screens/VideoCallingScreen'
import ChatScreen from '../screens/ChatScreen'
import FollowScreen from '../screens/FollowScreen'
import FriendsScreen from '../screens/FriendsScreen'
import RedeemStar from '../screens/RedeemStar.js'
import AddStar from '../screens/AddStar'
import SettingsScreen from '../screens/SettingsScreen'
import FollowFriendScreen from '../screens/FollowFriendScreen'
import AddFriendScreen from '../screens/AddFriendScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { CameraPermissionsScreen } from '../screens/CameraScreen'
import TweetScreen from '../screens/TweetScreen'
import SearchScreen from '../screens/SearchScreen'
import MyMarketPlaceScreen from '../screens/MyMarketPlaceScreen'
import AddNewProductScreen from '../screens/AddNewProductScreen'
import AddProductWithFormScreen from '../screens/AddProductWithFormScreen'
import GroupAndCommunityScreen from '../screens/GroupAndCommunityScreen'
import CreateNewGroupScreen from '../screens/CreateNewGroupScreen'
import ProductDetailsScreen from '../screens/ProductDetailsScreen'
import ReelsScreen from '../screens/ReelsComponent'
import HomeScreen from '../screens/HomeScreen'
import ScreenNetworkLogger from '../common/context/customInterceptor/ScreenNetworkLogger'
import InviteFriendScreen from '../screens/inviteFriendScreen'
import EditPostScreen from '../screens/editPostsScreen'
import { ForgetPasswordScreen } from '../screens/ForgotPasswordScreen'
import { ChangePassword } from '../screens/ChangePassword'
import VoiceCallPage from '../screens/VoiceCallScreen'
import ChatTabScreen from '../screens/ChatTabScreen'
import CommentsScreen from '../screens/CommentsScreen'
import ImagePreviewScreen from '../screens/ImagePreviewScreen'
import { IntroScreen } from '../screens/IntroScreen'
import { LoginScreen } from '../screens/LoginScreen'
import { ZegoUIKitPrebuiltCallInCallScreen, ZegoUIKitPrebuiltCallWaitingScreen } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import ComingSoonIcon from '../assets/Icons/ComingSoonIcon/ComingSoonIcon'
import ScreenCreateReels from '../screens/ScreenCreateReels'

const StackNav = createStackNavigator()
const options = {
  animationEnabled: true,
  gesturesEnabled: true,
  swipeEnabled: true
}

const screenOptions = {
  ...options,
  headerTintColor: 'black',
  headerStyle: {
    backgroundColor: ColorTheme.blue
  },
  headerTitleStyle: {
    fontFamily: FontTheme.MEDIUM
  }
}

function RouteUser({ show }) {
  if (!show) return null
  return (
    <StackNav.Navigator
      initialRouteName={'ComponentDrawer'}
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNav.Screen
        name="ComponentDrawer"
        component={ComponentDrawer}
        options={() => {
          return {
            ...screenOptions,
            headerShown: false,
            title: 'Home'
          }
        }}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="ZegoUIKitPrebuiltCallWaitingScreen"
        component={ZegoUIKitPrebuiltCallWaitingScreen}
      />
      <StackNav.Screen
        options={{ headerShown: false }}
        name="ZegoUIKitPrebuiltCallInCallScreen"
        component={ZegoUIKitPrebuiltCallInCallScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_INTRO}
        component={IntroScreen}
      />
      <StackNav.Screen
        name={Routes.CREATE_REELS_SCREEN}
        component={ScreenCreateReels}
      />
      <StackNav.Screen
        name={Routes.COMING_SOON_SCREEN}
        component={ComingSoonIcon}
      />
      <StackNav.Screen
        name={Routes.CHAT_SCREEN}
        component={ChatScreen}
      />
      <StackNav.Screen
        name={Routes.FORGET_PASSWORD_SCREEN}
        component={ForgetPasswordScreen}
      />
      <StackNav.Screen
        name={Routes.CHANGE_PASSWORD_SCREEN}
        component={ChangePassword}
      />
      <StackNav.Screen
        name={Routes.FOLLOW_SCREEN}
        component={FollowScreen}
      />
      <StackNav.Screen
        name={Routes.FRIENDS_SCREEN}
        component={FriendsScreen}
      />
      <StackNav.Screen
        name={Routes.VIDEO_CALLING_SCREEN}
        component={VideoCallingScreen}
      />
      <StackNav.Screen
        name={Routes.REDEEM_STAR_SCREEN}
        component={RedeemStar}
      />
      <StackNav.Screen
        name={Routes.ADD_STAR_SCREEN}
        component={AddStar}
      />
      <StackNav.Screen
        name={Routes.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <StackNav.Screen
        name={Routes.FOLLOW_FRIEND_SCREEN}
        component={FollowFriendScreen}
      />
      <StackNav.Screen
        name={Routes.ADD_FRIEND_SCREEN}
        component={AddFriendScreen}
      />
      <StackNav.Screen
        name={Routes.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <StackNav.Screen
        name={Routes.REEL_SCREEN_SCREEN}
        component={ReelsScreen}
      />
      <StackNav.Screen
        name={Routes.HOME_SCREEN}
        component={HomeScreen}
      />
      <StackNav.Screen
        name={Routes.CREATE_POST_SCREEN}
        component={CreatePost}
      />
      <StackNav.Screen
        name={Routes.NOTIFICATION_SCREEN}
        component={NotificationScreen}
      />
      <StackNav.Screen
        name={Routes.MESSAGES_SCREEN}
        component={MessagesScreen}
      />
      <StackNav.Screen
        name={Routes.CAMERA_SCREEN}
        component={CameraPermissionsScreen}
      />
      <StackNav.Screen
        name={Routes.TWEET_SCREEN}
        component={TweetScreen}
      />
      <StackNav.Screen
        name={Routes.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <StackNav.Screen
        name={Routes.MY_MARKET_PLACE_SCREEN}
        component={MyMarketPlaceScreen}
      />
      <StackNav.Screen
        name={Routes.ADD_NEW_PRODUCT}
        component={AddNewProductScreen}
      />
      <StackNav.Screen
        name={Routes.ADD_PRODUCT_WITH_FORM_SCREEN}
        component={AddProductWithFormScreen}
      />
      <StackNav.Screen
        name={Routes.GROUP_AND_COMMUNITY_SCREEN}
        component={GroupAndCommunityScreen}
      />
      <StackNav.Screen
        name={Routes.CREATE_NEW_GROUP_SCREEN}
        component={CreateNewGroupScreen}
      />
      <StackNav.Screen
        name={Routes.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
      <StackNav.Screen
        name={Routes.INVITE_FRIENDS_SCREEN}
        component={InviteFriendScreen}
      />
      <StackNav.Screen
        name={Routes.EDIT_POSTS_SCREEN}
        component={EditPostScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_NETWORK_LOGGER}
        component={ScreenNetworkLogger}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.VOICE_CALL_SCREEN}
        component={VoiceCallPage}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.CHAT_TAB_SCREEN}
        component={ChatTabScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.COMMENTS_SCREEN}
        component={CommentsScreen}
        options={{ headerShown: false }}
      />
      <StackNav.Screen
        name={Routes.IMAGE_PREVIEW}
        component={ImagePreviewScreen}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  )
}

export default RouteUser
