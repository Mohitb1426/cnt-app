/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar, StyleSheet } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import RouteManager from './routes/RouteManager'
import store from './services/redux/store'
import { Provider } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import ZegoUIKitPrebuiltCallService from '@zegocloud/zego-uikit-prebuilt-call-rn'
// import * as ZIM from 'zego-zim-react-native'
// import * as ZPNs from 'zego-zpns-react-native'

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide()
    // ZegoUIKitPrebuiltCallService.init(
    //   yourAppID, // You can get it from ZEGOCLOUD's console
    //   yourAppSign, // You can get it from ZEGOCLOUD's console
    //   userID, // It can be any valid characters, but we recommend using a phone number.
    //   userName,
    //   [ZIM, ZPNs],
    //   {
    //     ringtoneConfig: {
    //       incomingCallFileName: 'zego_incoming.mp3',
    //       outgoingCallFileName: 'zego_outgoing.mp3'
    //     },
    //     notifyWhenAppRunningInBackgroundOrQuit: true,
    //     isIOSSandboxEnvironment: true,
    //     androidNotificationConfig: {
    //       channelID: 'ZegoUIKit',
    //       channelName: 'ZegoUIKit'
    //     }
    //   })
  }, [])

  return (
    <GestureHandlerRootView style={styles.container}>
      <Provider store={store}>
        <StatusBar />
        <RouteManager />
      </Provider>
    </GestureHandlerRootView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
