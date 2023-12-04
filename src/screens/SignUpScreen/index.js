/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import style from './style'
import CheckBox from '@react-native-community/checkbox'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import SvgIcon from '../../common/SvgIcon'
import { Routes } from '../../routes/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { alreadyExistsError, onRegisterUser } from './actionSignUpScreen'
import { CustomModal } from '../../components/CustomModal'
import ImageCropPicker from 'react-native-image-crop-picker'
import ErrorHandler from '../../common/ErrorHandler'

export default function SignUpScreen ({ navigation }) {
  const [selectedImages, setSelectedImages] = useState('')
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [emailAddressError, setEmailAddressError] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const {
    isLoading, isUserAlreadyExits,
    errorMessage
  } =
    useSelector((state) => state.reducerSignUpScreen)
  const goBack = () => {
    navigation.navigate(Routes.SCREEN_LOGIN)
  }

  const captureData = (image) => {
    const parts = image.path.split('/')
    const uri = Platform.OS === 'ios' ? `file:///${image.path}` : image.path
    const name = parts[parts.length - 1]
    const type = image.mime
    const file = {
      uri,
      name,
      type
    }
    setSelectedImages(file)
  }

  const imageOptions = {
    width: Dimensions.get('window').width,
    height: 300,
    compressImageQuality: 0.8,
    cropping: true,
    mediaType: 'photo'
  }

  const openGallery = useCallback(() => {
    ImageCropPicker.openPicker(imageOptions)
      .then((image) => {
        captureData(image)
      })
      .catch((e) => {
        // debugLog('e', e);
      })
  })

  const isButtonDisable = useMemo(() => {
    return (
      fullName !== '' &&
      phoneNumber !== '' &&
      emailAddress !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      toggleCheckBox &&
      !phoneNumberError &&
      !emailAddressError &&
      password === confirmPassword
    )
  }, [fullName, phoneNumber, emailAddress, password, confirmPassword, toggleCheckBox, phoneNumberError, emailAddressError])

  const validatePhoneNumber = (number) => {
    if (!number) {
      setPhoneNumberError('Phone number is required')
      return false
    }
    if (!/^\d+$/.test(number)) {
      setPhoneNumberError('Invalid phone number')
      return false
    }
    setPhoneNumberError('')
    return true
  }

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

  const validateConfirmPassword = (confirmPassword) => {
    if (!confirmPassword) {
      return false
    }
    if (confirmPassword !== password) {
      return false
    }
    return true
  }

  const onSignUp = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      return
    }
    if (!validateEmailAddress(emailAddress)) {
      return
    }
    if (!validateConfirmPassword(confirmPassword)) {
      return
    }

    const requestBody = {
      fullname: fullName,
      phone: phoneNumber,
      email: emailAddress,
      password,
      selectedImages
    }
    dispatch(onRegisterUser({ requestBody, navigation }))
  }

  const getButtonStatus = () => {
    if (isLoading) {
      return <ActivityIndicator style={{
        marginVertical: 20
      }} size="small" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
    }
    return <CustomButton
      customStyle={!isButtonDisable
        ? [style.customButtonCustomStyle, {
            backgroundColor: ColorTheme.WHITE,
            borderColor: ColorTheme.PRIMARY_BACKGROUND_01
          }]
        : style.customButtonCustomStyle}
      onButtonPress={onSignUp}
      buttonText='Sign up'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE}
      buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }

  return (
    <ErrorHandler componentName="SignUp">
      <View style={style.mainWrapper}>
        <ErrorHandler componentName="HeaderComponent">
          <HeaderComponent goBack={goBack} isColor={ColorTheme.WHITE} title="Sign up" />
        </ErrorHandler>
        <View style={style.mainContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <View style={style.subContainer}>
              <TouchableOpacity onPress={openGallery} style={style.cameraIconStyle}>
                {selectedImages === ''
                  ? <SvgIcon.CameraIcon />
                  : <Image source={{ uri: selectedImages?.uri }} style={style.addImageStyle} />}
              </TouchableOpacity>
              <TextInput
                style={style.textStyle}
                placeholder='Full Name'
                onChangeText={(text) => setFullName(text)}
              />
              <TextInput
                style={style.textStyle}
                placeholder='Phone Number'
                maxLength={10}
                onChangeText={(text) => {
                  setPhoneNumber(text)
                  validatePhoneNumber(text)
                }}
              />
              {phoneNumberError !== '' && <Text style={style.errorMessage}>{phoneNumberError}</Text>}
              <TextInput
                style={style.textStyle}
                placeholder='Email'
                onChangeText={(text) => {
                  setEmailAddress(text)
                  validateEmailAddress(text)
                }}
              />
              {emailAddressError !== '' && <Text style={style.errorMessage}>{emailAddressError}</Text>}
              <TextInput
                style={style.textStyle}
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
              />
              <TextInput
                style={style.textStyle}
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
              />
              {password !== confirmPassword && <Text style={style.errorMessage}>Passwords do not match</Text>}

              <View style={style.checkBoxWrapper}>
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
                <Text style={style.label}>By creating an account you agree to
                  our Terms of Service and Privacy Policy</Text>
              </View>
              <View style={style.secondFlex}>
                <Text style={style.loginSubTextStyle}>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(Routes.SCREEN_LOGIN)}>
                  <Text style={style.loginSubTextColorStyle}>Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {getButtonStatus()}
        </View>
        {isUserAlreadyExits
          ? <CustomModal
            borderBottomLeftRadius={25}
            borderBottomRightRadius={25}
            visible={isUserAlreadyExits}
            markingType="period"
            modalHeight={200}
            alignBottom={false}
            onBackdropPress={() => {
              dispatch(alreadyExistsError(
                { isUserAlreadyExits: false, errorMessage: '' }))
            }}
            onModalHide={() => {
              dispatch(alreadyExistsError(
                { isUserAlreadyExits: false, errorMessage: '' }))
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
                customStyle={style.customButtonCustomStyle}
                onButtonPress={() => {
                  dispatch(alreadyExistsError(
                    { isUserAlreadyExits: false, errorMessage: '' }))
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
    </ErrorHandler>
  )
}
