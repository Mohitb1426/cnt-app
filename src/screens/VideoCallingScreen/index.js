/* eslint-disable react/prop-types */
import React from 'react'
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { View } from 'react-native'
import { Routes } from '../../routes/Routes'
import Config from '../../common/Config'
import { useSelector } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

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
          ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
          onOnlySelfInRoom: () => { navigation.navigate(Routes.CHAT_SCREEN) },
          onHangUp: () => { navigation.navigate(Routes.CHAT_SCREEN) }
        }}
      />
    </View>
  )
}
