/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './style'
import Images from '../../common/Images'
import CustomButton from '../CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import LinearGradient from 'react-native-linear-gradient'

export default function StarBalanceCard ({
  data,
  labelText,
  buttonText,
  text
}) {
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <View style={styles.tagWrapper}>
          <View style={styles.subWrapper}>
            <View style={styles.firstContainerText}>
              <Text style={styles.tagSmallTextStyle}>Star Balance</Text>
              <View style={styles.row}>
                <Text style={styles.tagSecondTextStyle}>Conversion</Text>
                <Image source={Images.STAR_IMAGE} style={styles.smallImageStyle} />
              </View>
            </View>
            <View style={styles.secondContainerText}>
              <Image source={Images.STAR_IMAGE} style={styles.imageStyle} />
              <Text style={styles.tagTextStyle}>0</Text>
            </View>
          </View>
        </View>
      </LinearGradient >
      <View>
        <View style={styles.secondTagWrapper}>
          <View style={styles.firstTagContainer}>
            <Text style={styles.addStarText}>{text}</Text>
          </View>
          <View style={styles.secondTagContainer}>
            <Text style={styles.balanceTextStyle}>{labelText}</Text>
            <View style={styles.inputStyle}>
              <Image source={Images.STAR_IMAGE} style={styles.imageTwoStyle} />
              <Text style={styles.tagTwoTextStyle}>0</Text>
            </View>
            <View style={styles.listWrap}>
              {data?.map((item, index) => {
                return (
                  <View style={styles.textCover} key={index}>
                    <Text style={styles.balanceTwoTextStyle}> {item}</Text>
                  </View>
                )
              })}
            </View>
            <View style={styles.buttonContainer}>
              <CustomButton
                textStyle={styles.buttonTextMainStyle}
                customStyle={styles.customButtonCustomStyle}
                buttonText={buttonText}
                isDisabled={false}
                textColor={ColorTheme.WHITE}
                buttonColor={ColorTheme.GREEN_BG}
                fontFamily={Fonts.INTER_BOLD}
              />
            </View>
          </View>
        </View>
      </View>
    </View >
  )
}
