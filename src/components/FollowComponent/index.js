/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'

export default function FollowComponent({
  id,
  name,
  userName,
  userImage,
  postHeading,
  postImage,
  padding,
  groupAndCommunityDeatilsData
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.subContainer, { padding }]}>
        <View style={styles.containerFirst}>
          <View style={styles.innerFirstContainer}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: groupAndCommunityDeatilsData?.image }} style={styles.profileImageStyle} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.boldTextStyle}>{groupAndCommunityDeatilsData?.name}</Text>
              <Text style={styles.simpleTextStyle}>{userName}</Text>
            </View>
          </View>
        </View>
        <View style={styles.postImageWrapper}>
          <View style={styles.imagePostContainer}>
            <Image source={postImage} style={styles.profileImageStyle} />
          </View>
        </View>
      </View>
    </View>

  )
}
