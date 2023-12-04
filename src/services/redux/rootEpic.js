/* eslint-disable no-console */
import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs'
import { epicOnRegisterUserData } from '../../screens/SignUpScreen/epicSignUpScreen'
import { epicOnSignIn } from '../../screens/LoginScreen/epicLoginScreen'
import { epicOnVerifyOtp } from '../../screens/OtpScreen/epicOtpScreen'
import { epicOnForgotPassword } from '../../screens/ForgotPasswordScreen/epicForgotPasswordScreen'
import { epicOnChangePassword } from '../../screens/ChangePassword/epicChangePasswordScreen'
import { epicOnDeleteUser, epicOnLogout } from '../../routes/Drawer/DrawerMiddleMenu/epicDrawer'
import { epicOnCreateNewGroup } from '../../screens/CreateNewGroupScreen/epicCreateNewGroupScreen'
import { epicFollowGroup, epicGetByIdGroupData, epicGetGroupData } from '../../screens/GroupAndCommunityScreen/epicGroupAndCommunityScreen'
import { epicOnCreatePost } from '../../screens/CreatePost/epicCreatePostScreen'
import { epicAddedPost, epicDeletePostData, epicEditProfilePicData, epicEditProfilePostData, epicFollowUser, epicGetPostData, epicGetProfileData, epicGetProfilePostData, epicGetSearchData, epicGetUserFriendList, epicLikePost, epicSentFriendRequest } from '../../screens/ProfileScreen/epicProfileScreen'
import { epicGetAllStory, epicGetHomeFeedData, epicGetUserStory, epicOnAddStory, epicOnViewPost } from '../../screens/HomeScreen/epicHomeScreen'
import { epicMarkAllAsRead, epicNotificationData } from '../../screens/NotificationScreen/epicNotificationScreen'
import { epicGetReelsData, epicReelLikePost } from '../../screens/ReelsComponent/epicReelsScreen'
import { epicAddProductPost, epicDeleteProductData, epicEditProductPost, epicGetCategory, epicGetMarketPlaceData, epicGetProductDetails } from '../../screens/MyMarketPlaceScreen/epicMarketPlaceScreen'
import { epicGetChatData, epicGetChatDataRoom } from '../../screens/ChatScreen/epicChatScreen'
import { epicGetComments, epicGetReelsComments, epicOnCreateComment, epicOnCreateReelComment } from '../../screens/CommentsScreen/epicCommentsScreen'
import { epicGetMeessageFeedData } from '../../screens/MessagesScreen/epicMessageScreen'

const epics = [
  epicOnRegisterUserData,
  epicOnSignIn,
  epicOnVerifyOtp,
  epicOnForgotPassword,
  epicOnChangePassword,
  epicOnLogout,
  epicOnCreateNewGroup,
  epicGetGroupData,
  epicOnCreatePost,
  epicGetProfileData,
  epicGetProfilePostData,
  epicGetPostData,
  epicEditProfilePostData,
  epicDeletePostData,
  epicGetHomeFeedData,
  epicOnAddStory,
  epicGetUserStory,
  epicGetAllStory,
  epicNotificationData,
  epicGetUserFriendList,
  epicGetHomeFeedData,
  epicLikePost,
  epicGetReelsData,
  epicGetMarketPlaceData,
  epicAddProductPost,
  epicGetProductDetails,
  epicGetCategory,
  epicEditProfilePicData,
  epicGetSearchData,
  epicAddedPost,
  epicGetChatData,
  epicGetByIdGroupData,
  epicGetComments,
  epicOnCreateComment,
  epicGetMeessageFeedData,
  epicGetChatDataRoom,
  epicGetReelsComments,
  epicOnCreateReelComment,
  epicReelLikePost,
  epicOnDeleteUser,
  epicSentFriendRequest,
  epicEditProductPost,
  epicDeleteProductData,
  epicFollowGroup,
  epicFollowUser,
  epicOnViewPost,
  epicMarkAllAsRead
]
const TAG = 'rootEpic: '

const rootEpic = (a$, s$, d) => combineEpics(...epics)(a$, s$, d).pipe(
  catchError((error, source) => {
    console.log(error, TAG)
    // captureErrorLogs(error);
    return source
  })
)

export default rootEpic
