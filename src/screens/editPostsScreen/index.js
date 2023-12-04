/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { TextInput } from 'react-native-gesture-handler'
import CheckBox from '@react-native-community/checkbox'
import Images from '../../common/Images'
import { ColorTheme } from '../../common/AppStyles'
import ImagePicker from 'react-native-image-crop-picker'
import CustomButton from '../../components/CustomButton'
import Fonts from '../../common/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { editProfilePostData, getPostDataById } from '../ProfileScreen/actionProfileScreen'
import LinearGradient from 'react-native-linear-gradient'

export default function EditPostScreen({ navigation, route }) {
  const [selectedImages, setSelectedImages] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [postAsTweet, setPostAsTweet] = useState(false)
  const { isLoading } = useSelector((state) => state.reducerCreatePostScreen)
  const { postDataById } = useSelector((state) => state.reducerProfileScreen)

  const dispatch = useDispatch()
  const { params } = route

  const renderImageList = ({ item }) => {
    return (
      <View style={styles.flatListItems} >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item?.uri }} style={styles.addImageStyle} />
        </View>
      </View>
    )
  }

  useEffect(() => {
    if (postDataById) {
      const file = {
        uri: postDataById?.image,
        name: postDataById?.image,
        type: 'image/jpeg'
      }
      setSelectedImages(file)
      setTitle(postDataById?.title)
      setDescription(postDataById?.caption)
      setPostAsTweet(postDataById?.post_as_tweet)
    }
  }, [postDataById])

  const captureData = image => {
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
    // cropping: true,
    mediaType: 'any'
  }

  const openGallery = useCallback(async () => {
    try {
      const media = await ImagePicker.openPicker(imageOptions)

      if (media.mime && media.mime.startsWith('image/')) {
        const croppedImage = await ImagePicker.openCropper({
          width: Dimensions.get('window').width,
          height: 300,
          compressImageQuality: 0.8,
          path: media.path,
          cropperCircleOverlay: false
        })
        captureData(croppedImage)
      } else if (media.mime && media.mime.startsWith('video/')) {
        captureData(media)
      } else {
        // Handle other media types if needed
      }
    } catch (error) {
      // Handle error if needed
    }
  })

  const createPost = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const requestBody = {
      title,
      caption: description,
      image: selectedImages,
      post_as_tweet: postAsTweet,
      user: userID,
      isVideo: selectedImages?.type?.includes('video') || false
    }
    dispatch(editProfilePostData({
      postId: params.postId,
      requestBody,
      navigation
    }))
  }

  useEffect(() => {
    if (params?.postId) {
      dispatch(getPostDataById(params?.postId))
    }
  }, [params.postId])

  const isButtonDisable = useMemo(() => {
    return selectedImages?.uri && description !== ''
  }, [description, selectedImages])

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
      onButtonPress={createPost}
      buttonText='Edit Post'
      isDisabled={!isButtonDisable}
      textColor={!isButtonDisable
        ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
        : ColorTheme.WHITE}
      buttonColor={ColorTheme.GREEN_BG}
      fontFamily={Fonts.INTER_BOLD}
    />
  }
  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Edit Post"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isWhiteIcon='#FFB804'
      />
      <View style={styles.subWrapper}>
        <View style={styles.textWrapper}>
          {/* <TextInput
            placeholder='Type Title'
            style={styles.bigTextStyle}
            value={title}
            onChangeText={(text) => setTitle(text)}
          /> */}
          {/* <View style={styles.dividerStyle} /> */}
          <TextInput
            value={description}
            placeholder='Write something...'
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity style={[styles.imageAddContainer, { marginRight: 4 }]} onPress={openGallery}>
            <Image source={Images.ADD_IMAGE} style={styles.imageAddStyle} />
          </TouchableOpacity>
          {selectedImages?.uri
            ? (
              <View style={styles.imageContainer}>
                <Image
                  source={{ uri: selectedImages?.uri }}
                  style={styles.addImageStyle}
                />
              </View>
            )
            : null}
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={postAsTweet}
          onValueChange={(newValue) => setPostAsTweet(newValue)}
        />
        <Text>Post as Tweet</Text>
      </View>
      {getButtonStatus()}
    </View>
  )
}
