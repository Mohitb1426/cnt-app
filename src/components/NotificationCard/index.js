/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, View } from 'react-native'
import CustomButton from '../CustomButton'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import moment from 'moment'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import {
  addUserFriend
} from '../../screens/ProfileScreen/actionProfileScreen'
import { useDispatch } from 'react-redux'

export default function NotificationCard({
  image,
  user,
  message,
  timestamp,
  notificationtype
}) {
  const dispatch = useDispatch()

  const msg = () => {
    switch (notificationtype) {
      case 'friend_request':
        return 'Friend Request'
      case 'post_like':
        return 'Like Your Post!'
      case 'follow':
        return 'Following You!'
      default:
        return ''
    }
  }

  const TimeAgoComponent = () => {
    return moment(timestamp).fromNow()
  }

  const onAcceptFriendRequest = async () => {
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )

    const reqBody = {
      to_user: userID,
      from_user: user?.id,
      status: 'accepted'
    }
    dispatch(addUserFriend(reqBody))
  }

  return (
    <View style={styles.subContainer}>
      <View style={{ flexDirection: 'row' }}>
        <View style={[styles.imageContainer]}>
          <Image source={{ uri: user?.profile_pic }} style={styles.addImageStyle} />
        </View>
        <View style={styles.textMainContainer}>
          <View>
            <Text style={styles.textStyle}>{user?.fullname}</Text>
          </View>
          <Text numberOfLines={1} style={styles.subTextStyle}>{msg()}</Text>
          <Text style={styles.timeTextStyle}>{TimeAgoComponent()}</Text>
        </View>
      </View>
      {notificationtype === 'friend_request' && (
        <View>
          <CustomButton
            customStyle={styles.customButtonCustomStyle}
            textStyle={{ fontSize: 12, fontWeight: '400' }}
            onButtonPress={onAcceptFriendRequest}
            buttonText={'Accept'}
            isDisabled={false}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
            fontFamily={Fonts.INTER_BOLD}
          />
        </View>
      )}
    </View>
  )
}
