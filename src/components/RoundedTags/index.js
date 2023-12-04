/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'

export default function RoundedTags({
  image,
  text,
  goToMenu
}) {
  return (
    <TouchableOpacity onPress={() => goToMenu()} style={styles.tagWrapper}>
      <Image source={image} style={styles.imageStyle} />
      <Text style={styles.tagTextStyle}>{text}</Text>
    </TouchableOpacity>
  )
}
