/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Platform, ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import style from './style'
import CustomButton from '../../components/CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import SvgIcon from '../../common/SvgIcon'
import { Picker } from '@react-native-picker/picker'
import LinearGradient from 'react-native-linear-gradient'
import ImageCropPicker from 'react-native-image-crop-picker'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, addedProduct, editProduct, getProductDetails, gotProductDetails } from '../MyMarketPlaceScreen/actionMarketPlaceScreen'

export default function AddProductWithFormScreen({ navigation, route }) {
  const [selectedLanguage, setSelectedLanguage] = useState('1')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [brand, setBrand] = useState('')
  const [tag, setTag] = useState('')
  const [selectedImages, setSelectedImages] = useState('')
  const dispatch = useDispatch()

  const { isProductCreating, productDetails } = useSelector((state) => state.reducerMarketPlaceScreen)

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

  const addMProduct = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const requestBody = {
      title,
      price,
      description,
      brand,
      tag,
      selectedLanguage,
      selectedImages,
      userID
    }
    if (route?.params?.productId) {
      dispatch(editProduct({ id: route?.params?.productId, requestBody, navigation }))
      return
    }
    dispatch(addProduct({ requestBody, navigation }))
  }

  const getButtonStatus = () => {
    if (isProductCreating) {
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
        customStyle={selectedImages === '' || description === ''
          ? [style.customButtonCustomStyle, {
            backgroundColor: ColorTheme.WHITE,
            borderColor: ColorTheme.PRIMARY_BACKGROUND_01
          }]
          : style.customButtonCustomStyle}
        onButtonPress={addMProduct}
        buttonText={route?.params?.productId ? 'Edit Product' : 'Add Product'}
        isDisabled={selectedImages === '' || description === ''}
        textColor={selectedImages === '' || description === ''
          ? ColorTheme.PRIMARY_BACKGROUND_COLOR_01
          : ColorTheme.WHITE}
        buttonColor={ColorTheme.GREEN_BG}
        fontFamily={Fonts.INTER_BOLD}
      />
    )
  }

  useEffect(() => {
    return () => {
      dispatch(addedProduct())
    }
  }, [])

  useEffect(() => {
    if (route?.params?.productId) {
      dispatch(getProductDetails(route?.params?.productId))
    }
    return () => {
      dispatch(gotProductDetails([]))
    }
  }, [])

  useEffect(() => {
    if (productDetails) {
      const file = {
        uri: productDetails?.image,
        name: productDetails?.image,
        type: 'image/jpeg'
      }
      setSelectedImages(file)
      setTitle(productDetails?.name)
      setBrand(productDetails?.brand)
      setDescription(productDetails?.description)
      setPrice(productDetails?.price?.toString())
      setTag(productDetails?.tags)
    }
  }, [productDetails])

  return (
    <View style={style.mainWrapper}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#FFFFFF', '#FFFFFF']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent isColor={ColorTheme.WHITE} goBack={() => navigation.goBack()} title="Fill Details" />
      <View style={style.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View style={style.subContainer}>
            <TouchableOpacity onPress={openGallery} style={style.cameraIconStyle}>
              {!selectedImages?.uri
                ? <SvgIcon.CameraIcon />
                : <Image source={{ uri: selectedImages?.uri }} style={style.addImageStyle} />}
            </TouchableOpacity>
            <Text style={{ color: 'red' }}>Required</Text>
            <View style={style.textInputContainer}>
              <Text style={{ marginLeft: 10 }}>Title<Text style={style.star}> *</Text></Text>
              <TextInput
                style={style.textStyle}
                // placeholder='Title'
                value={title}
                onChangeText={(text) => setTitle(text)}
              />
            </View>
            <View style={style.textInputContainer}>
              <Text style={{ marginLeft: 10 }}>Price<Text style={style.star}> *</Text></Text>
              <TextInput
                style={style.textStyle}
                // placeholder='Price'
                keyboardType='numeric'
                value={price}
                onChangeText={(text) => setPrice(text)}
              />
            </View>
            <View style={{
              backgroundColor: ColorTheme.TEXT_GREEN_COLOR,
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 40,
              borderWidth: 1,
              borderColor: '#bdc3c7',
              overflow: 'hidden'
            }}>
              <Picker
                style={{
                  width: 300, height: 40, color: ColorTheme.TEXT_YELLOW_COLOR
                }}
                dropdownIconColor={ColorTheme.TEXT_YELLOW_COLOR}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Home" value="2" />
                <Picker.Item label="Electronics" value="1" />
              </Picker>
            </View>
            <View style={style.textInputContainer}>
              <Text style={{ marginLeft: 10 }}>Description<Text style={style.star}> *</Text></Text>
              <TextInput
                style={style.descriptionTextStyle}
                // placeholder='Description'
                value={description}
                onChangeText={(text) => setDescription(text)}
              />
            </View>
            <View style={style.textInputContainer}>
              <Text style={{ marginLeft: 10 }}>Brand</Text>
              <TextInput
                style={style.textStyle}
                // placeholder='Brand'
                value={brand}
                onChangeText={(text) => setBrand(text)}
              />
            </View>
            <View style={style.textInputContainer}>
              <Text style={{ marginLeft: 10 }}>Add Tags</Text>
              <TextInput
                style={style.descriptionTextStyle}
                // placeholder='Add Tags'
                value={tag}
                onChangeText={(text) => setTag(text)}
              />
            </View>
            {getButtonStatus()}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
