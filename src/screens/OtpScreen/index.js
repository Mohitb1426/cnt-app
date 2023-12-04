/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from 'react'
import {
  View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import Images from '../../common/Images'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { DEFAULT_OTP_TIMER } from './Contants'
import { useDispatch, useSelector } from 'react-redux'
import { onOtpVerify, otpNotExistsAction } from './actionOtpScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { onSignIn } from '../LoginScreen/actionLoginScreen'
import { CustomModal } from '../../components/CustomModal'

export function OtpScreen ({ navigation }) {
  const [otp, setOtp] = useState('')
  const [otpTimer, setOtpTimer] = useState(DEFAULT_OTP_TIMER)
  const dispatch = useDispatch()
  const { mobileNumber, countryCode } = useSelector((store) => store.reducerLoginScreen)
  const { isUserSigned } = useSelector((store) => store.reducerIntroScreen)
  const {
    isLoading, otpNotExists,
    errorMessage
  } =
    useSelector((state) => state.reducerOtpScreen)
  const handleVerifyOtp = async () => {
    const requestBody = {
      phone: mobileNumber,
      otp
    }
    dispatch(onOtpVerify({ requestBody, navigation }))
  }
  const getOtpTimer = () => {
    return otpTimer === 0 ? null : `${otpTimer} Sec left`
  }
  useEffect(() => {
    const otpIntervalRef = setTimeout(() => {
      setOtpTimer(otpTimer - 1)
    }, 1000)
    if (otpTimer === 0) {
      clearTimeout(otpIntervalRef)
    }
    return () => {
      clearTimeout(otpIntervalRef)
    }
  }, [otpTimer])

  const resendOtp = async () => {
    setOtpTimer(DEFAULT_OTP_TIMER)
    const mobileNumber = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_PHONE_NUMBER, null)

    const requestBody = {
      countryCode,
      phone: mobileNumber
    }
    dispatch(onSignIn({ requestBody, navigation }))
  }
  useEffect(() => {
    if (isUserSigned) {
      navigation.navigate('ComponentDrawer')
    }
  }, [isUserSigned])

  const isButtonDisable = useMemo(() => {
    return otp.length === 4
  }, [otp])

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
      onButtonPress={handleVerifyOtp}
      buttonText='Verify Now'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE}
      buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }
  console.log(otpNotExists, 'otpNotExists')
  return (
    <View style={styles.mainContainer}>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        isColor={ColorTheme.WHITE}
        title='Phone Verification' />
      <ScrollView>
        <View style={styles.secondContainer}>
          <View style={styles.firstFlex}>
            <Image source={Images.OTP_IMAGE} style={styles.coverImageStyle} />
          </View>
          <View style={styles.thirdContainer}>
            <View style={styles.textWrapper}>
              <Text style={styles.loginTextStyle}>OTP Verification</Text>
              <Text style={styles.loginSubTextStyle}>{'An authentication code has been sent to your Mobile number and Email Address'}</Text>
            </View>
            <OTPInputView
              style={styles.otpView}
              pinCount={4}
              // code={otp}
              onCodeChanged={(code) => {
                if (code.length === 4) {
                  setOtp(code)
                  // handleVerifyOtp()
                }
              }}
              autoFocusOnLoad
              codeInputFieldStyle={styles.otpItem}
              codeInputHighlightStyle={styles.otpItemHigh}
              onCodeFilled={(code) => {
                if (code.length === 4) {
                  setOtp(code)
                  // handleVerifyOtp()
                }
              }}
            />
            <View style={styles.secondFlex}>
              <Text style={styles.loginSubTextStyle}>I didn't receive code </Text>
              <TouchableOpacity onPress={resendOtp}>
                <Text style={styles.loginSubTextColorStyle}>Resend code </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.loginSubTextTimerStyle}>{getOtpTimer()}</Text>
            {getButtonStatus()}
          </View>
        </View>
      </ScrollView>
      {otpNotExists
        ? <CustomModal
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          visible={otpNotExists}
          markingType="period"
          modalHeight={200}
          alignBottom={false}
          onBackdropPress={() => {
            dispatch(otpNotExistsAction({
              otpNotExists: false,
              errorMessage: ''
            }))
          }}
          onModalHide={() => {
            dispatch(otpNotExistsAction({
              otpNotExists: false,
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
                dispatch(otpNotExistsAction({
                  otpNotExists: false,
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
