/* eslint-disable react/prop-types */
import React from 'react'
import { View } from 'react-native'
import styles from './style'
import SvgIcons from '../../common/SvgIcon'

export function ComingSoonScreen ({ navigation }) {
  // const navigateTo = () => {
  //   navigation.navigate(Routes.HOME_SCREEN)
  // }

  return (
    <View style={styles.comingSoonContainerStyle}>
      <View style={styles.comingSoonSvgContainerStyle}>
        <SvgIcons.ComingSoonIcon />
      </View>
    </View>
  )
}
