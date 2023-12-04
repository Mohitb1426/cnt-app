import React, { useRef } from 'react'
import RouteGuest from './GuestScreens/GuestScreen'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import NetworkLoggerProvider from '../common/context/customInterceptor/NetworkLoggerProvider'
import { useDispatch, useSelector } from 'react-redux'
import RouteUser from './RouteUser'
import StorageUtils from '../common/StorageUtils'
import AsyncKeys from '../common/AsyncKeys'
import { isUserSignedAction } from '../screens/IntroScreen/actionIntroScreen'
import { Routes } from './Routes'
import linking from './Linking'
import { ZegoCallInvitationDialog } from '@zegocloud/zego-uikit-prebuilt-call-rn'

function RouteManager() {
  const dispatch = useDispatch()
  const routeNameRef = useRef()
  const navigationRef = useNavigationContainerRef()
  const { isUserSigned } = useSelector((state) => state.reducerIntroScreen)
  const token = StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)

  // const handleChangePassword = async () => {
  //   // StorageUtils.flush()
  //   const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
  //   if (token) {
  //     dispatch(isUserSignedAction(true))
  //     return
  //   }
  //   return navigationRef.navigate(Routes.SCREEN_INTRO)
  // }

  console.log(navigationRef, 'navigationRef')

  // React.useEffect(() => {
  //   handleChangePassword()
  // }, [])

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef.getCurrentRoute().name
        routeNameRef.current = currentRouteName
      }}
    >
      <ZegoCallInvitationDialog />
      {/* <NetworkStatusProvider> */}
      <NetworkLoggerProvider>
        <RouteGuest show={!token} />
        <RouteUser show={token} />
      </NetworkLoggerProvider>
      {/* </NetworkStatusProvider> */}
    </NavigationContainer>
  )
}

export default RouteManager
