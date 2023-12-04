/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import Fonts from '../../common/Fonts'
import { ColorTheme } from '../../common/AppStyles'
import CustomButton from '../../components/CustomButton'
import { Routes } from '../../routes/Routes'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import {
  addUserFriend,
  sentUserRequest,
  setMember
} from '../../screens/ProfileScreen/actionProfileScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

export default function FriendsCard ({
  id,
  profile_pic,
  fullname,
  mutualFriends = 0,
  follow,
  inviteText,
  addFriend = false,
  group
}) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { member } = useSelector(state => state.reducerProfileScreen)

  const addFriendUser = async () => {
    if (group) {
      const memberArray = [...member, id]
      dispatch(setMember(memberArray))
      return
    }
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )

    const reqBody = {
      from_user: userID,
      to_user: id
      // status: 'send-request'
    }
    dispatch(sentUserRequest(reqBody))
  }
  return (
    <View style={styles.mainWrapper}>
      {fullname
        ? (
        <>
          <TouchableOpacity
            onPress={() => {
              return navigation.navigate(Routes.FOLLOW_FRIEND_SCREEN, {
                userId: id
              })
            }}
            style={styles.row}>
            <Image source={profile_pic} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.boldText}>{fullname}</Text>
              <Text>{`Mutual Friends ${mutualFriends}`}</Text>
            </View>
          </TouchableOpacity>
          {follow
            ? (
            <CustomButton
              textStyle={styles.buttonTextStyle}
              customStyle={styles.customButtonCustomStyle}
              buttonText={'Add Friend'}
              isDisabled={false}
              fontFamily={Fonts.INTER_BOLD}
              textColor={ColorTheme.WHITE}
              onButtonPress={addFriendUser}
              buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
            />
              )
            : (
            <CustomButton
              textStyle={styles.buttonTextStyle}
              customStyle={styles.customButtonCustomStyle}
              buttonText={'Add Member'}
              isDisabled={false}
              fontFamily={Fonts.INTER_BOLD}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
            />
              )}
        </>
          )
        : null}
    </View>
  )
}
