/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import SvgIcon from '../../../../common/SvgIcon'
import { ColorTheme } from '../../../../common/AppStyles'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../../../routes/Routes'
import { ZegoSendCallInvitationButton } from '@zegocloud/zego-uikit-prebuilt-call-rn'

export default function ChatHeaderComponent ({ friendOnline, chatData }) {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <View style={style.headerView}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={style.backButton}>
          <SvgIcon.LeftArrow color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
        </TouchableOpacity>
        <View>
          <Image source={{ uri: chatData?.chatuser?.profile_pic }} style={style.imageStyle} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.FOLLOW_FRIEND_SCREEN, {
          userId: chatData?.chatuser?.id
        })}
          style={style.headerTextStyle}>
          <Text
            numberOfLines={1}
            style={[style.headerText, { color: '#000000' }]}>
            {chatData?.chatuser?.fullname}
          </Text>
          {friendOnline ? <View style={style.dot} /> : null}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.VOICE_CALL_SCREEN, {
            chatRoomData: chatData
          })}
          style={style.SvgIconStyle}>
          <SvgIcon.PhoneIcon />
        </TouchableOpacity>
        {/* <ZegoSendCallInvitationButton
          invitees={['invitees'].map((inviteeID) => {
            return { userID: inviteeID, userName: 'user_' + inviteeID }
          })}
          isVideoCall={true}
          resourceID={'euwoiruoijfdkhkjfdfd'} // Please fill in the resource ID name that has been configured in the ZEGOCLOUD's console here.
        /> */}
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.VIDEO_CALLING_SCREEN, {
            chatRoomData: chatData
          })}
          style={style.SvgIconStyle}>
          <SvgIcon.VideoIcon />
        </TouchableOpacity>
        <TouchableOpacity style={style.SvgIconStyle}>
          <SvgIcon.ThreeDotIcon
            color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
