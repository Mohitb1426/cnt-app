import React, { useCallback, useMemo, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { TextInput } from 'react-native-gesture-handler'
import CheckBox from '@react-native-community/checkbox'
import Images from '../../common/Images'
import { ColorTheme, ScreenDimensions } from '../../common/AppStyles'
import { useNavigation } from '@react-navigation/native'
import CustomButton from '../../components/CustomButton'
import Fonts from '../../common/Fonts'
import { useDispatch, useSelector } from 'react-redux'
import { onCreatePost } from './actionCreatePostScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import LinearGradient from 'react-native-linear-gradient'
import DocumentPicker from 'react-native-document-picker'
import ImagePicker from 'react-native-image-crop-picker'

export default function CreatePost() {
  const [selectedImages, setSelectedImages] = useState()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [postAsTweet, setPostAsTweet] = useState(false)
  const { isLoading } = useSelector(state => state.reducerCreatePostScreen)
  const dispatch = useDispatch()

  const navigation = useNavigation()
  const renderImageList = ({ item }) => {
    console.log(item?.uri)
    return (
      <View style={styles.flatListItems}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item?.uri }} style={styles.addImageStyle} />
        </View>
      </View>
    )
  }

  const imageOptions = {
    width: Dimensions.get('window').width,
    height: 300,
    compressImageQuality: 1,
    // cropping: true,
    mediaType: 'any'
  }

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

  const openGallery = useCallback(async () => {
    try {
      const media = await ImagePicker.openPicker(imageOptions)

      if (media.mime && media.mime.startsWith('image/')) {
        const croppedImage = await ImagePicker.openCropper({
          width: Dimensions.get('window').width,
          height: 300,
          compressImageQuality: 1,
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
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )
    const requestBody = {
      title,
      caption: description ?? 'any',
      image: selectedImages,
      post_as_tweet: postAsTweet,
      user: userID,
      isVideo: selectedImages?.type?.includes('video') || false
    }
    dispatch(onCreatePost({ requestBody, navigation, post: true }))
  }

  const isButtonDisable = useMemo(() => {
    if (description !== '' && !selectedImages?.uri) {
      return false
    }
    if (description === '' && selectedImages?.uri) {
      return false
    }
    if (description !== '' && selectedImages?.uri) {
      return false
    }
    return true
  }, [selectedImages, description])
  console.log(selectedImages, 'selectedImages')

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
          isButtonDisable
            ? [
              styles.customButtonCustomStyle,
              {
                backgroundColor: ColorTheme.WHITE,
                borderColor: ColorTheme.PRIMARY_BACKGROUND_01
              }
            ]
            : styles.customButtonCustomStyle
        }
        onButtonPress={createPost}
        buttonText="Create Post"
        isDisabled={isButtonDisable}
        textColor={
          isButtonDisable
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
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Create Post"
        isWhiteIcon={'#FFB804'}
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
      />
      <View style={styles.subWrapper}>
        <View style={styles.textWrapper}>
          {/* <TextInput
            placeholder="Type Title"
            style={styles.bigTextStyle}
            onChangeText={text => setTitle(text)}
          /> */}
          {/* <View style={styles.dividerStyle} /> */}
          <TextInput
            placeholder="Write something..."
            onChangeText={text => setDescription(text)}
          />
        </View>
        <View style={styles.listContainer}>
          <TouchableOpacity
            style={[styles.imageAddContainer, { marginRight: 4 }]}
            onPress={openGallery}>
            <Image source={Images.ADD_IMAGE} style={styles.imageAddStyle} />
          </TouchableOpacity>
          {/* <FlatList
            renderItem={renderImageList}
            data={selectedImages}
            horizontal
          /> */}
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
          onValueChange={newValue => setPostAsTweet(newValue)}
        />
        <Text>Post as Tweet</Text>
      </View>
      {getButtonStatus()}
    </View>
  )
}
