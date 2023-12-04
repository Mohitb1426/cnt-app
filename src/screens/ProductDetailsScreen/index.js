/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { ColorTheme, ScreenDimensions } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import CustomButton from '../../components/CustomButton'
import Fonts from '../../common/Fonts'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../MyMarketPlaceScreen/actionMarketPlaceScreen'

export default function ProductDetailsScreen ({ navigation, route }) {
  const { params } = route
  const dispatch = useDispatch()
  const { isProductDetailsLoading, productDetails } = useSelector((state) => state.reducerMarketPlaceScreen)

  useEffect(() => {
    dispatch(getProductDetails(params?.productId))
  }, [])

  if (isProductDetailsLoading) {
    return <ActivityIndicator style={{
      marginVertical: 20, flex: 1, justifyContent: 'center', alignItems: 'center'
    }} size="large" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
  }

  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        title={productDetails?.name}
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        goBack={() => navigation.goBack()}
        isYellowIcon={true}
        isWhiteIcon="#FFB804"
      />
      <View style={styles.mainWrapper}>
        <View>
          <Image source={{ uri: productDetails?.image }} style={{
            width: ScreenDimensions.width,
            height: 250,
            resizeMode: 'stretch'
          }} />
          <View style={{ position: 'absolute', bottom: 10, right: 10 }}>
            <SvgIcon.newIcon />
          </View>
        </View>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
          <Text style={{
            fontSize: 20,
            fontWeight: '500',
            color: ColorTheme.BLACK
          }}>{productDetails?.name}</Text>
          <CustomButton
            customStyle={styles.customButtonCustomStyle}
            textStyle={{
              fontSize: 12,
              fontWeight: '400'
            }}
            buttonText={`Rs ${productDetails?.price}`}
            isDisabled={false}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
            fontFamily={Fonts.INTER_BOLD}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10, marginTop: 20, backgroundColor: ColorTheme.WHITE }}>
          <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: ColorTheme.BLACK
          }}>{productDetails?.description}
          </Text>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1, marginTop: 20 }}>
          <CustomButton
            customStyle={styles.buttonCustomStyle}
            textStyle={{
              fontSize: 16,
              fontWeight: '400'
            }}
            buttonText={'Message'}
            isDisabled={false}
            textColor={ColorTheme.WHITE}
            buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
            fontFamily={Fonts.INTER_BOLD}
          />
        </View>
      </View>
    </View>
  )
}
