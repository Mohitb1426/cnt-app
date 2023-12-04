/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useState } from 'react'
import { Image, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import style from './style'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import SvgIcon from '../../common/SvgIcon'
import CheckBox from '@react-native-community/checkbox'
import ImagePicker from 'react-native-image-crop-picker'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { useDispatch, useSelector } from 'react-redux'
import { onCreateGroup } from './actionCreateNewGroupScreen'
import { ActivityIndicator } from 'react-native-paper'
import { Routes } from '../../routes/Routes'
import LinearGradient from 'react-native-linear-gradient'
import { setMember } from '../ProfileScreen/actionProfileScreen'

export default function CreateNewGroupScreen ({ navigation }) {
  const [isPublic, setIsPublic] = useState(false)
  const [isPrivate, setIsPrivate] = useState(false)
  const [groupName, setGroupName] = useState('')
  const [description, setDescription] = useState('')
  const [selectedImages, setSelectedImages] = useState('')
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.reducerCreateNewGroupScreen)
  const { member } = useSelector((state) => state.reducerProfileScreen)

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

  const openGallery = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
      includeBase64: false,
      mediaType: 'photo'
    })
      .then((image) => {
        captureData(image)
      })
      .catch((e) => {
        // debugLog('e', e);
      })
  })
  const onCreateGrp = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)

    const requestBody = {
      image: selectedImages,
      user: userID,
      name: groupName,
      description,
      privacy: isPublic ? 'public' : isPrivate ? 'private' : 'other',
      member
    }
    dispatch(onCreateGroup({ requestBody, navigation }))
    dispatch(setMember([]))
  }

  const isButtonDisable = useMemo(() => {
    return groupName !== '' && description !== ''
  }, [groupName, description])

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
      onButtonPress={onCreateGrp}
      buttonText='Create'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE}
      buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }

  return (
    <View style={style.mainWrapper}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#FFFFFF', '#FFFFFF']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        goBack={() => navigation.goBack()}
        isColor={ColorTheme.WHITE} title="Create New" />
      <View style={style.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={style.subContainer}>
            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TouchableOpacity onPress={openGallery} style={style.cameraIconStyle}>
                {selectedImages === ''
                  ? <SvgIcon.CameraIcon />
                  : <Image source={{ uri: selectedImages?.uri }} style={style.addImageStyle} />}
              </TouchableOpacity>
              <View style={style.textInputContainer}>
                <Text style={{ marginLeft: 10 }}>Name The Group<Text style={{ color: 'red' }}> *</Text></Text>
                <TextInput
                  style={style.textStyle}
                  // placeholder='Name The Group'
                  onChangeText={(text) => setGroupName(text)}
                />
              </View>
              <View style={style.textInputContainer}>
                <Text style={{ marginLeft: 10 }}>Description<Text style={{ color: 'red' }}> *</Text></Text>
                <TextInput
                  style={[style.textStyle, {
                    height: 90,
                    textAlignVertical: 'top',
                    borderRadius: 10
                  }]}
                  // placeholder='Description'
                  onChangeText={(text) => setDescription(text)}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                disabled={false}
                value={isPublic}
                onValueChange={(newValue) => setIsPublic(newValue)}
              />
              <Text style={{
                fontSize: 14,
                fontWeight: '700',
                color: ColorTheme.TEXT_GREEN_COLOR
              }}>Create Public</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                disabled={false}
                value={isPrivate}
                onValueChange={(newValue) => setIsPrivate(newValue)}
              />
              <Text style={{
                fontSize: 14,
                fontWeight: '700',
                color: ColorTheme.TEXT_GREEN_COLOR
              }}>Create Private</Text>
            </View>
            {/* <CustomButton
                            customStyle={style.buttonCustomStyle}
                            buttonText='Add Member'
                            isDisabled={false}
                            textColor={ColorTheme.WHITE}
                            buttonColor={ColorTheme.GREEN_BG}
                            fontFamily={Fonts.INTER_BOLD}
                        /> */}
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.INVITE_FRIENDS_SCREEN)}
              style={{
                backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingVertical: 10,
                paddingHorizontal: 20,
                marginVertical: 30
              }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '400',
                color: ColorTheme.TEXT_YELLOW_COLOR
              }}>Add Member</Text>
              <SvgIcon.addIcon />
            </TouchableOpacity>
            {getButtonStatus()}
            {/* <CustomButton
              customStyle={style.customButtonCustomStyle}
              onButtonPress={onCreateGrp}
              buttonText='Create'
              isDisabled={false}
              textColor={ColorTheme.WHITE}
              buttonColor={ColorTheme.GREEN_BG}
              fontFamily={Fonts.INTER_BOLD}
            /> */}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
