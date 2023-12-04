/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import SvgIcon from '../../common/SvgIcon'

export default function SettingsCommonCard ({
  text,
  itemArray
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.tagWrapper}>
        <Text style={styles.tagTextStyle}>{text}</Text>
      </View>
      {itemArray?.map((item) => {
        return (
          <TouchableOpacity onPress={item?.onClick} key={item?.id} style={styles.subContainer}>
            <View style={styles.subRoundContainer}>
              {item?.icon
                ? <Image source={item?.icon} style={{
                  height: 20, width: 20, resizeMode: 'contain'
                }} />
                : null}
              <Text style={styles.tagSmallTextStyle}>{item?.name}</Text>
            </View>
            <View style={styles.lastContainer}>
              {item?.value ? <Text style={styles.lastContainerText}>{item?.value}</Text> : null}
              <SvgIcon.RightIcon />
            </View>
          </TouchableOpacity>
        )
      })}

    </View>
  )
}
