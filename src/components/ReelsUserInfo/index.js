/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../common/Images'
import styles from './style'
import CustomButton from '../CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { Routes } from '../../routes/Routes'
import { useNavigation } from '@react-navigation/native'
import { followUser } from '../../screens/ProfileScreen/actionProfileScreen'
import { useDispatch } from 'react-redux'
import { onReelLikeFalse } from '../../screens/ReelsComponent/actionReelsScreen'

export default function ReelsUserInfo({ item }) {
  const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const onFollowUser = async () => {
    dispatch(onReelLikeFalse(true))
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const reqBody = {
      from_user: userID,
      to_user: item?.user?.id,
      status: 'accepted'
    }
    dispatch(followUser(reqBody))
  }

  console.log(item?.user?.followers, userID, item?.user?.followers?.includes(userID), 'item?.user?.followers')
  const getFollowButton = () => {
    if (Number(userID) === Number(item?.user?.id)) {
      return null
    }
    if (item?.user?.following?.includes(userID)) {
      return null
    }
    return (
      <CustomButton
        customStyle={styles.customButtonCustomStyle}
        textStyle={{ fontSize: 12, fontWeight: '400' }}
        onButtonPress={onFollowUser}
        buttonText={'Follow'}
        isDisabled={false}
        textColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
        buttonColor={ColorTheme.TEXT_YELLOW_COLOR}
        fontFamily={Fonts.INTER_BOLD}
      />
    )
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.FOLLOW_FRIEND_SCREEN, {
              userId: item?.user?.id
            })
          }
          style={styles.flexRow}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item?.user?.profile_pic }}
              style={styles.addImageStyle}
            />
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.mainTextStyle}>{item?.user?.fullname}</Text>
            <Text style={styles.subTextStyle}>{`${item?.user?.followers?.length} Followers`}</Text>
          </View>
        </TouchableOpacity>
        {getFollowButton()}
        <View style={styles.borderStyle}>
          <View style={styles.starImageContainer}>
            <Image
              source={Images.STAR_IMAGE}
              style={styles.addStarImageStyle}
            />
          </View>
          <Text style={styles.cardTextStyle}>0</Text>
        </View>
      </View>
      <Text style={styles.subDisTextStyle}>{item?.caption}</Text>
    </View>
  )
}
