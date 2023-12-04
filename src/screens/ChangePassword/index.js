/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import Images from '../../common/Images'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import {
  onForgotPassword,
  onPasswordValidationError
} from './actionChangePasswordScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { Routes } from '../../routes/Routes'
import { CustomModal } from '../../components/CustomModal'
import LinearGradient from 'react-native-linear-gradient'

export function ChangePassword ({ navigation }) {
  const dispatch = useDispatch()
  const [oldPasswordHidden, setOldPasswordHidden] = useState(true)
  const [newPasswordHidden, setNewPasswordHidden] = useState(true)
  const [newConfirmPasswordHidden, setNewConfirmPasswordHidden] =
    useState(true)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newConfirmPassword, setNewConfirmPassword] = useState('')
  const { isLoading, passwordValidationError, errorMessage } = useSelector(
    state => state.reducerChangePasswordScreen
  )
  const handleChangePassword = async () => {
    const mobileNumber = await StorageUtils.getString(
      AsyncKeys.ASYNC_KEY_PHONE_NUMBER,
      null
    )

    const requestBody = {
      phone: mobileNumber,
      oldpassword: oldPassword,
      password: newPassword,
      confirmpassword: newConfirmPassword
    }
    dispatch(onForgotPassword({ requestBody, navigation }))
    navigation.navigate(Routes.SCREEN_LOGIN)
  }

  const isButtonDisable = useMemo(() => {
    return (
      oldPassword !== '' &&
      newPassword !== '' &&
      newConfirmPassword !== '' &&
      newPassword === newConfirmPassword
    )
  }, [oldPassword, newPassword, newConfirmPassword])

  const getButtonStatus = () => {
    if (isLoading) {
      return (
        <ActivityIndicator
          style={{
            marginVertical: 20
          }}
          size="small"
          color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
        />
      )
    }
    return (
      <CustomButton
        customStyle={
          !isButtonDisable
            ? [
                styles.customButtonCustomStyle,
                {
                  backgroundColor: ColorTheme.WHITE,
                  borderColor: ColorTheme.PRIMARY_BACKGROUND_01
                }
              ]
            : styles.customButtonCustomStyle
        }
        onButtonPress={handleChangePassword}
        buttonText="Save Now!"
        isDisabled={!isButtonDisable}
        textColor={
          !isButtonDisable
            ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
            : ColorTheme.WHITE
        }
        buttonColor={ColorTheme.GREEN_BG}
        fontFamily={Fonts.INTER_BOLD}
      />
    )
  }

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
      </LinearGradient>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        isColor={ColorTheme.WHITE}
        title="Change Password"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.secondaryContainer}>
          <View style={styles.secondContainer}>
            <View style={styles.firstFlex}>
              <Image
                source={Images.CHANGE_PASSWORD_IMAGE}
                style={styles.coverImageStyle}
              />
            </View>
            <View style={styles.thirdContainer}>
              <View style={styles.emailViewContainer}>
                <TextInput
                  style={styles.textStyle}
                  placeholder="Old Password"
                  onChangeText={text => setOldPassword(text)}
                  secureTextEntry={oldPasswordHidden} // Use secureTextEntry to hide the password
                />
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10
                  }}
                  onPress={() => setOldPasswordHidden(!oldPasswordHidden)}>
                  <Image
                    source={
                      oldPasswordHidden
                        ? Images.EYE_HIDE_IMAGE
                        : Images.EYE_IMAGE
                    }
                    style={styles.mailIconStyle}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.emailViewContainer}>
                <TextInput
                  style={styles.textStyle}
                  placeholder="Password"
                  secureTextEntry={newPasswordHidden} // Use secureTextEntry to hide the password
                  onChangeText={text => setNewPassword(text)}
                />
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    padding: 10,
                    alignItems: 'center'
                  }}
                  onPress={() => setNewPasswordHidden(!newPasswordHidden)}>
                  <Image
                    source={
                      newPasswordHidden
                        ? Images.EYE_HIDE_IMAGE
                        : Images.EYE_IMAGE
                    }
                    style={styles.mailIconStyle}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.emailViewContainer}>
                <TextInput
                  style={styles.textStyle}
                  placeholder="Confirm Password"
                  secureTextEntry={newConfirmPasswordHidden} // Use secureTextEntry to hide the password
                  onChangeText={text => setNewConfirmPassword(text)}
                />
                <TouchableOpacity
                  style={{
                    justifyContent: 'center',
                    padding: 10,
                    alignItems: 'center'
                  }}
                  onPress={() =>
                    setNewConfirmPasswordHidden(!newConfirmPasswordHidden)
                  }>
                  <Image
                    source={
                      newConfirmPasswordHidden
                        ? Images.EYE_HIDE_IMAGE
                        : Images.EYE_IMAGE
                    }
                    style={styles.mailIconStyle}
                  />
                </TouchableOpacity>
              </View>
              {newPassword !== newConfirmPassword && (
                <Text style={styles.errorMessage}>Passwords do not match</Text>
              )}
              {getButtonStatus()}
            </View>
          </View>
        </View>
      </ScrollView>
      {passwordValidationError
        ? (
        <CustomModal
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          visible={passwordValidationError}
          markingType="period"
          modalHeight={200}
          alignBottom={false}
          onBackdropPress={() => {
            dispatch(
              onPasswordValidationError({
                passwordValidationError: false,
                errorMessage: ''
              })
            )
          }}
          onModalHide={() => {
            dispatch(
              onPasswordValidationError({
                passwordValidationError: false,
                errorMessage: ''
              })
            )
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 10,
                color: ColorTheme.BLACK,
                fontWeight: '700'
              }}>
              Error
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: ColorTheme.PRIMARY_RED_COLOR
              }}>
              {errorMessage}
            </Text>
            <CustomButton
              customStyle={styles.customButtonCustomStyle}
              onButtonPress={() => {
                dispatch(
                  onPasswordValidationError({
                    passwordValidationError: false,
                    errorMessage: ''
                  })
                )
              }}
              buttonText={'Ok'}
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_BOLD}
            />
          </View>
        </CustomModal>
          )
        : null}
    </View>
  )
}
