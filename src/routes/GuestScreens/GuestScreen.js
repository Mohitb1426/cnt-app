/* eslint-disable react/prop-types */
import React from 'react'
import {
  createStackNavigator
} from '@react-navigation/stack'
import { Routes } from '../Routes'
import { IntroScreen } from '../../screens/IntroScreen'
import { LoginScreen } from '../../screens/LoginScreen'
import { OtpScreen } from '../../screens/OtpScreen'
import { ForgetPasswordScreen } from '../../screens/ForgotPasswordScreen'
import { ChangePassword } from '../../screens/ChangePassword'
import SignUpScreen from '../../screens/SignUpScreen'
import ComingSoonIcon from '../../assets/Icons/ComingSoonIcon/ComingSoonIcon'
import ScreenNetworkLogger from '../../common/context/customInterceptor/ScreenNetworkLogger'

const StackNav = createStackNavigator()

function RouteGuest ({ show }) {
  if (!show) return null

  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <StackNav.Screen
        name={Routes.SCREEN_LOGIN}
        component={LoginScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_INTRO}
        component={IntroScreen}
      />
      <StackNav.Screen
        name={Routes.SCREEN_OTP}
        component={OtpScreen}
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
        name={Routes.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <StackNav.Screen
        name={Routes.COMING_SOON_SCREEN}
        component={ComingSoonIcon}
      />
      <StackNav.Screen
        name={Routes.SCREEN_NETWORK_LOGGER}
        component={ScreenNetworkLogger}
        options={{ headerShown: false }}
      />
    </StackNav.Navigator>
  )
}
export default RouteGuest
