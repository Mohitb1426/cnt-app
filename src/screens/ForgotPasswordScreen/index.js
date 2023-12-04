/* eslint-disable react/prop-types */
import React, { useMemo, useRef, useState } from 'react'
import {
  View, Text, Image, TextInput, ScrollView, ActivityIndicator
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import Images from '../../common/Images'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import PhoneInput from 'react-native-phone-number-input/lib'
import { Routes } from '../../routes/Routes'
import SvgIcon from '../../common/SvgIcon'
import { onForgotPassword, userNotExistsForgotPassword } from './actionForgotPasswordScreen'
import { useDispatch, useSelector } from 'react-redux'
import AsyncKeys from '../../common/AsyncKeys'
import StorageUtils from '../../common/StorageUtils'
import { CustomModal } from '../../components/CustomModal'

export function ForgetPasswordScreen ({ navigation }) {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [formattedValue, setFormattedValue] = useState('')
  const [emailAddressError, setEmailAddressError] = useState('')
  const phoneInput = useRef(null)
  const {
    isLoading, showErrorMessage,
    errorMessage
  } = useSelector((state) => state.reducerForgotPasswordScreen)

  const handleResetPassword = () => {
    const requestBody = {
      phone: value,
      email: emailAddress
    }
    dispatch(onForgotPassword({ requestBody, navigation }))
  }
  const goBack = () => {
    navigation.navigate(Routes.SCREEN_LOGIN)
  }
  const isButtonDisable = useMemo(() => {
    return (emailAddress !== '' || value !== '') && emailAddressError === ''
  }, [emailAddress, value])

  const validateEmailAddress = (email) => {
    if (!email) {
      setEmailAddressError('Email address is required')
      return false
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

    if (!emailRegex.test(email)) {
      setEmailAddressError('Invalid email address')
      return false
    }
    setEmailAddressError('')
    return true
  }

  const onChangeNumber = async (number) => {
    setValue(number)
    await StorageUtils.setUserPref(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, number)
  }

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
      onButtonPress={handleResetPassword}
      buttonText='Reset Password'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE} buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }

  return (
    <View style={styles.mainContainer}>
      <HeaderComponent goBack={goBack} isColor={ColorTheme.WHITE} title='Forgot Password' />
      <ScrollView>
        <View style={styles.secondContainer}>
          <View style={styles.firstFlex}>
            <Image source={Images.FORGET_PASSWORD_IMAGE} style={styles.coverImageStyle} />
          </View>
          <View style={styles.thirdContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.loginTextStyle}>We will send a mail to the email
                address you registered to regain your password</Text>
            </View>
            <View style={styles.emailViewContainer}>
              <SvgIcon.EmailIcon />
              <TextInput
                style={styles.textStyle}
                placeholder='Enter Email Address'
                onChangeText={(text) => {
                  setEmailAddress(text)
                  validateEmailAddress(text)
                }}
              />
            </View>
            {emailAddressError !== '' && <Text style={styles.errorMessage}>{emailAddressError}</Text>}
            <View style={styles.dividerWrapper}>
              <View style={styles.dividerStyle} />
              <Text style={styles.orStyle}>OR</Text>
              <View style={styles.dividerStyle} />
            </View>
            <PhoneInput
              textContainerStyle={styles.phoneInputTextStyle}
              containerStyle={styles.input}
              ref={phoneInput}
              defaultValue={value}
              defaultCode="DM"
              layout="first"
              onChangeText={(text) => onChangeNumber(text)}
              onChangeFormattedText={(text) => {
                const currentCountryCode = phoneInput.current?.getCallingCode()
                setFormattedValue(currentCountryCode)
              }}
              autoFocus
            />
            {/* <View style={styles.secondFlex}>
              <Text style={styles.loginSubTextStyle}>{`Email sent to ${emailAddress}`} </Text>
            </View> */}
            {getButtonStatus()}
          </View>
        </View>
      </ScrollView>
      {showErrorMessage
        ? <CustomModal
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          visible={showErrorMessage}
          markingType="period"
          modalHeight={200}
          alignBottom={false}
          onBackdropPress={() => {
            dispatch(userNotExistsForgotPassword({
              showErrorMessage: false,
              errorMessage: ''
            }))
          }}
          onModalHide={() => {
            dispatch(userNotExistsForgotPassword({
              showErrorMessage: false,
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
                dispatch(userNotExistsForgotPassword({
                  showErrorMessage: false,
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
