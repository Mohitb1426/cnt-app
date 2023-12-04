/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import Images from '../../common/Images'
import SvgIcon from '../../common/SvgIcon'
import { useSelector } from 'react-redux'

export default function SettingsCard ({
  image,
  text
}) {
  const { profileData } = useSelector((state) => state.reducerProfileScreen)
  return (
    <View style={styles.tagWrapper}>
      <View style={styles.subContainer}>
        <Image source={{ uri: profileData?.profile_pic }} style={styles.imageStyle} />
        <Text style={styles.tagTextStyle}>{profileData?.fullname}</Text>
      </View>
      <View style={styles.subRoundContainer}>
        <SvgIcon.StarIcon />
        <Text style={styles.tagSmallTextStyle}>0</Text>
      </View>
    </View>
  )
}
