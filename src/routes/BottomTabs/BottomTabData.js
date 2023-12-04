import { CameraPermissionsScreen } from '../../screens/CameraScreen'
import HomeScreen from '../../screens/HomeScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import ReelsScreen from '../../screens/ReelsComponent'
import ScreenCreateReels from '../../screens/ScreenCreateReels'
import TweetScreen from '../../screens/TweetScreen'
import { Routes } from '../Routes'

export const ID_SCREEN_HOME = 1
export const ID_SCREEN_TWEET = 2
export const ID_SCREEN_CAMERA = 3
export const ID_SCREEN_REELS = 4
export const ID_SCREEN_PROFILE = 5

export const bottomTabBarData = [
  {
    id: ID_SCREEN_HOME,
    name: Routes.SCREEN_LOGIN,
    component: HomeScreen,
    eTitle: 'Home',
    iconSelected: 1,
    icon: 2
  },
  {
    id: ID_SCREEN_TWEET,
    name: Routes.COMING_SOON_SCREEN,
    component: TweetScreen,
    eTitle: 'Tweet',
    iconSelected: 3,
    icon: 4
  },
  {
    id: ID_SCREEN_CAMERA,
    name: Routes.CREATE_REELS_SCREEN,
    component: ScreenCreateReels,
    icon: 5,
    iconSelected: 5,
    largeSize: true
  },
  {
    id: ID_SCREEN_REELS,
    name: Routes.REEL_SCREEN_SCREEN,
    component: ReelsScreen,
    eTitle: 'Reels',
    iconSelected: 6,
    icon: 7
  },
  {
    id: ID_SCREEN_PROFILE,
    name: Routes.PROFILE_SCREEN,
    component: ProfileScreen,
    eTitle: 'Profile',
    iconSelected: 8,
    icon: 9
  }
]
