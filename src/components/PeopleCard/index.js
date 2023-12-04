/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'

export default function PeopleCard ({
  id,
  image,
  name,
  mutualFriends
}) {
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.row}>
        <Image source={image} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>{name}</Text>
          <Text>{mutualFriends}</Text>
        </View>
      </View>
    </View>
  )
}
