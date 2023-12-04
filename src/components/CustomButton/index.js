/* eslint-disable react/prop-types */
import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  Image
} from 'react-native'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'

function CustomButton (props) {
  const {
    textStyle = {},
    customStyle = {},
    isDisabled = false,
    buttonColor = '#ffff',
    buttonText = '',
    textColor = 'black',
    customButtonFontFamily = 'LATO_REGULAR',
    isImage1 = null,
    onButtonPress = () => { }
  } = props

  const textCustomStyle = [
    styles.buttonText,
    {
      color: textColor,
      fontFamily: customButtonFontFamily,
      fontWeight: '700'
    },
    textStyle
  ]
  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 12,
          minHeight: 58,
          backgroundColor: buttonColor,
          width: 291,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.5,
          borderColor: ColorTheme.GREY_TEXT
        },
        customStyle
      ]}
      activeOpacity={1}
      onPress={() => onButtonPress()}
      disabled={isDisabled}
    >
      <View
        style={styles.mainViewStyle}
      >
        <Text
          style={textCustomStyle}
        >
          {' '}
          {buttonText}
        </Text>
        {isImage1 && (
          <View
            style={styles.imageContainer}
          >
            <Image
              style={styles.imageStyle}
              source={isImage1}
              resizeMode="contain"
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default React.memo(CustomButton)
