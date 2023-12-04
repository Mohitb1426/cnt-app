/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import Images from '../../common/Images'
import PhoneInput from 'react-native-phone-number-input'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import { Routes } from '../../routes/Routes'
import { onSignIn, setCountryCode, setMobileNumber, userExists } from './actionLoginScreen'
import AsyncKeys from '../../common/AsyncKeys'
import StorageUtils from '../../common/StorageUtils'
import { CustomModal } from '../../components/CustomModal'
import { getFirstInstallTime } from 'react-native-device-info'

export function LoginScreen({ navigation }) {
  const [value, setValue] = useState('')
  const [zegoCloudFirstTimeId, setZegoCloudFirstTimeId] = useState('')
  const [zegoCloudFirstTimeName, setZegoCloudFirstTimeName] = useState('')
  const [formattedValue, setFormattedValue] = useState('')
  const phoneInput = useRef(null)
  const dispatch = useDispatch()
  const {
    isLoading, userNotExists,
    errorMessage
  } =
    useSelector((state) => state.reducerLoginScreen)
  const onChangeNumber = async (number) => {
    setValue(number)
    dispatch(setMobileNumber(number))
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, number)
  }

  useEffect(() => {
    getFirstInstallTime().then(firstInstallTime => {
      const id = String(firstInstallTime).slice(-5)
      setZegoCloudFirstTimeId(id)
      const name = 'user_' + id
      setZegoCloudFirstTimeName(name)
    })
  }, [])

  const goBack = () => {
    navigation.navigate(Routes.SCREEN_INTRO)
  }
  const handleSignIn = async () => {
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_MOBILE_ID, zegoCloudFirstTimeId)
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_MOBILE_NAME, zegoCloudFirstTimeName)
    const requestBody = {
      countryCode: formattedValue,
      phone: value
    }
    dispatch(onSignIn({ requestBody, navigation }))
  }

  const isButtonDisable = useMemo(() => {
    return value !== '' && formattedValue !== ''
  }, [value, formattedValue])

  const getButtonStatus = () => {
    if (isLoading) {
      return <ActivityIndicator style={{
        marginVertical: 20
      }} size="small" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
    }
    return <CustomButton
      customStyle={!isButtonDisable
        ? [styles.customButtonCustomStyle, {
          backgroundColor: ColorTheme.WHITE,
          borderColor: ColorTheme.PRIMARY_BACKGROUND_01
        }]
        : styles.customButtonCustomStyle}
      onButtonPress={handleSignIn}
      buttonText='Sign in'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE}
      buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }

  useEffect(() => {
    return () => {
      setValue('')
    }
  }, [])

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent isColor={ColorTheme.WHITE} goBack={goBack} title='Sign in' />
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        <View style={styles.secondContainer}>
          <View style={styles.firstFlex}>
            <Image source={Images.LOGIN_IMAGE} style={styles.coverImageStyle} />
          </View>
          <View style={styles.thirdContainer}>
            <Text style={styles.loginTextStyle}>Login</Text>
            <Text style={styles.loginTextSUbStyle}>with Your phone number</Text>
            <View>
              <PhoneInput
                textContainerStyle={{
                  paddingVertical: 0,
                  paddingHorizontal: 0,
                  borderRadius: 20,
                  backgroundColor: '#f9f9f9'
                }}
                containerStyle={styles.input}
                ref={phoneInput}
                defaultValue={value}
                defaultCode="IN"
                layout="first"
                onChangeText={(text) => onChangeNumber(text)}
                onChangeFormattedText={(text) => {
                  const currentCountryCode = phoneInput.current?.getCallingCode()
                  setFormattedValue(currentCountryCode)
                  dispatch(setCountryCode(currentCountryCode))
                }}
                autoFocus
              />
            </View>
            {getButtonStatus()}
            <TouchableOpacity onPress={() => navigation.navigate(Routes.FORGET_PASSWORD_SCREEN)}>
              <Text style={styles.loginSubTextColorStyle}>Forgotten Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.secondFlex}>
            <Text style={styles.loginSubTextStyle}>Have not any account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.SIGN_UP_SCREEN)}>
              <Text style={styles.loginSubTextColorStyle}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {userNotExists
        ? <CustomModal
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          visible={userNotExists}
          markingType="period"
          modalHeight={200}
          alignBottom={false}
          onBackdropPress={() => {
            dispatch(userExists({
              userNotExists: false,
              errorMessage: ''
            }))
          }}
          onModalHide={() => {
            dispatch(userExists({
              userNotExists: false,
              errorMessage: ''
            }))
          }}
        >
          <View style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 25,
              marginBottom: 10,
              color: ColorTheme.BLACK,
              fontWeight: '700'
            }}>Error</Text>
            <Text style={{
              fontSize: 14,
              color: ColorTheme.PRIMARY_RED_COLOR
            }}>{errorMessage}</Text>
            <CustomButton
              customStyle={styles.customButtonCustomStyle}
              onButtonPress={() => {
                dispatch(userExists({
                  userNotExists: false,
                  errorMessage: ''
                }))
              }
              }
              buttonText={'Ok'}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_BOLD}
            />
          </View>
        </CustomModal>
        : null}
    </View>
  )
}
