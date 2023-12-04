import React, { useCallback, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Platform, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import CustomButton from '../CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../common/Images'
import SvgIcon from '../../common/SvgIcon'
import ImageCropPicker from 'react-native-image-crop-picker'
import { showProfileImageAction, updateProfileList } from '../../screens/ProfileScreen/actionProfileScreen'
import { CustomModal } from '../CustomModal'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { onAddStory } from '../../screens/HomeScreen/actionHomeScreen'

export default function index ({
  buttonText, isOtherUser = false
}) {
  const { profileData, isPostLoading, showProfileImage } = useSelector((state) => state.reducerProfileScreen)
  const dispatch = useDispatch()

  const captureDataForStory = async image => {
    const parts = image.path.split('/')
    const uri = Platform.OS === 'ios' ? `file:///${image.path}` : image.path
    const name = parts[parts.length - 1]
    const type = image.mime
    const file = {
      uri,
      name,
      type
    }
    const userId = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )
    dispatch(onAddStory({ file, userId }))
  }

  const openGalleryForStory = useCallback(() => {
    ImageCropPicker.openPicker({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      compressImageQuality: 0.8,
      cropping: true,
      mediaType: 'photo'
    })
      .then(image => {
        captureDataForStory(image)
      })
      .catch(e => {
        // debugLog('e', e);
      })
  })

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
    dispatch(updateProfileList({
      userName: profileData?.username,
      image: file
    }))
  }

  const imageOptions = {
    width: Dimensions.get('window').width,
    height: 400,
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

  if (isPostLoading) {
    return <ActivityIndicator style={{
      marginVertical: 20
    }} size="large" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
  }
  return (
    <>
      <View>
        <LinearGradient
          colors={['#075E54', '#128C7E']}
          start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
          <View style={styles.firstContainer}>
            <View style={styles.TextPosition}>
              <View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Text numberOfLines={1} style={styles.boldStyle}>{profileData?.fullname}</Text>
                  <Image source={Images.TICK_ICON} style={{ marginLeft: 5, height: 20, width: 20, resizeMode: 'contain' }} />
                </View>
                <View style={{ paddingVertical: 5, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={styles.simpleWhileStyle}>{profileData?.location}</Text>
                  {/* <CustomButton
                    onButtonPress={openGalleryForStory}
                    textStyle={styles.buttonTextMainStyle}
                    customStyle={styles.customButtonCustomStyle}
                    buttonText={buttonText ?? 'Add Story'}
                    isDisabled={false}
                    textColor={ColorTheme.WHITE}
                    buttonColor={ColorTheme.GREEN_BG}
                    fontFamily={Fonts.INTER_BOLD}
                  /> */}
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => {
              dispatch(showProfileImageAction(true))
            }} style={styles.imagePosition}>
              {profileData?.profile_pic
                ? <Image source={{ uri: profileData?.profile_pic }} style={styles.coverImageStyle} />
                : <Image style={styles.coverDummyImageStyle} />}
            </TouchableOpacity>
          </View>
          {isOtherUser
            ? null
            : <TouchableOpacity onPress={openGallery} style={{ right: 5, bottom: 0, position: 'absolute' }}>
              <SvgIcon.editprofile />
            </TouchableOpacity>}
        </LinearGradient>
        <View style={styles.subFirstContainer}>
          <View style={styles.subSecondContainer}>
            <Text style={styles.buttonTextStyle}>{profileData?.posts || 0}</Text>
            <Text style={styles.simpleTextStyle}>Posts</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.subSecondContainer}>
            <Text style={styles.buttonTextStyle}>{profileData?.followers_users?.length || 0}</Text>
            <Text style={styles.simpleTextStyle}>Followers</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.subSecondContainer}>
            <Text style={styles.buttonTextStyle}>{profileData?.following_users?.length || 0}</Text>
            <Text style={styles.simpleTextStyle}>Following</Text>
          </View>
        </View>
        <View style={styles.thirdContainer}>
          <Text style={styles.descriptionStyle}>{profileData?.bio}</Text>
          {/* <Text style={styles.descriptionStyle}>do eiuiusmod</Text>
                <Text style={styles.descriptionStyle}>Lorem ipsum ,ui dipsumdhdgh veihdfh sdhdsfjkd dsfjhd dfjhdsjhjk egtewyuy erwewuy dnfdhdsd</Text> */}
        </View>
      </View>
      {showProfileImage
        ? <CustomModal
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          visible={showProfileImage}
          markingType="period"
          modalHeight={150}
          alignBottom={false}
          backdropOpacity={0.2}
          onBackdropPress={() => {
            dispatch(showProfileImageAction(false))
          }}
          onModalHide={() => {
            dispatch(showProfileImageAction(false))
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <Image source={{ uri: profileData?.profile_pic }} style={styles.imageStyle} />
          </View>
        </CustomModal>
        : null}
    </>
  )
}
