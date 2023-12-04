/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { storeChatRoomDetails } from '../../screens/ChatScreen/actionChatScreen'

export default function MessagesCard({
  chatuser,
  last_message,
  id,
  roomId
}) {
  const TimeAgoComponent = () => {
    return moment(last_message?.timestamp).fromNow()
  }
  const navigation = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={{ borderBottomWidth: 2, borderBottomColor: '#EFEFF4' }}>
      <TouchableOpacity onPress={() => {
        const dataChat = {
          userId: chatuser?.id,
          roomId,
          chatuser
        }
        dispatch(storeChatRoomDetails(dataChat))
        navigation.navigate(Routes.CHAT_SCREEN)
      }}
        style={styles.subContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.imageContainer]}>
            <Image source={{ uri: chatuser?.profile_pic }} style={styles.addImageStyle} />
          </View>
          <View style={styles.textMainContainer}>
            <View style={styles.textSubContainer}>
              <Text style={styles.textStyle}>{chatuser?.fullname}</Text>
            </View>
            <Text numberOfLines={2} style={[styles.subTextStyle, {
              fontWeight: true ? '800' : '400'
            }]}>{last_message?.message}</Text>
          </View>
        </View>
        <View style={styles.alightEnd}>
          <Text style={styles.timeTextStyle}>{TimeAgoComponent()}</Text>
          {/* {count &&
                        <View style={styles.countContainerStyle}>
                            <Text style={styles.countStyle}>{count}</Text>
                        </View>} */}
        </View>
      </TouchableOpacity>
    </View>
  )
}
