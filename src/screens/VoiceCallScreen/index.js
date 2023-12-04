/* eslint-disable react/prop-types */
import React from 'react'
import { ZegoUIKitPrebuiltCall, GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { View } from 'react-native'
import { Routes } from '../../routes/Routes'
import Config from '../../common/Config'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { useSelector } from 'react-redux'

export default function VoiceCallPage ({ navigation, route }) {
  const userId = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const { params } = route
  const { profileData } = useSelector((state) => state.reducerProfileScreen)
  return (
    <View style={{ flex: 1 }}>
      <ZegoUIKitPrebuiltCall
        appID={Number(Config.appId)}
        appSign={Config.appSignId.toString()}
        userID={String(userId)}
        userName={profileData?.fullname}
        callID={params?.chatRoomData?.roomId}
        config={{
          ...GROUP_VOICE_CALL_CONFIG,
          onHangUp: () => { navigation.navigate(Routes.CHAT_SCREEN) }
        }}
      />
    </View>
  )
}
