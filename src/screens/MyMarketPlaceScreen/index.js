/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import MarketPlaceCardComponent from '../../components/MarketPlaceCardComponent'
import Images from '../../common/Images'
import { Routes } from '../../routes/Routes'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { getMPData } from './actionMarketPlaceScreen'

export default function MyMarketPlaceScreen({ navigation }) {
  const dispatch = useDispatch()
  const { isLoading, mpData } = useSelector((state) => state.reducerMarketPlaceScreen)
  const dummyData = [
    {
      id: '1',
      image: Images.DUMMY_IMAGE_1,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    },
    {
      id: '2',
      image: Images.DUMMY_IMAGE_2,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    },
    {
      id: '3',
      image: Images.DUMMY_IMAGE_3,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    },
    {
      id: '4',
      image: Images.DUMMY_IMAGE_1,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    },
    {
      id: '5',
      image: Images.DUMMY_IMAGE_2,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    },
    {
      id: '6',
      image: Images.DUMMY_IMAGE_3,
      productName: 'UI Designer',
      price: 'Rs 990.00'
    }
  ]
  const renderProductList = ({ item }) => {
    return (
      <MarketPlaceCardComponent {...item} />

    )
  }
  useEffect(() => {
    dispatch(getMPData())
  }, [])

  if (isLoading) {
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
        title="My Marketplace"
        isWhiteIcon='#FFB804'
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        goBack={() => navigation.goBack()}
        isYellowIcon={true}
      />
      <View style={styles.mainWrapper}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.ADD_PRODUCT_WITH_FORM_SCREEN)} style={[styles.buttonBackground, { backgroundColor: ColorTheme.BACKGROUND_COLOR_01 }]}>
            <SvgIcon.AddProductIcon />
            <Text style={[styles.textStyle, {
              color: ColorTheme.TEXT_YELLOW_COLOR
            }]}>Add Product</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.ADD_NEW_PRODUCT)} style={[styles.buttonBackground, { backgroundColor: ColorTheme.BACKGROUND_COLOR_02 }]}>
            <SvgIcon.CategoryIcon />
            <Text style={[styles.textStyle, {
              color: ColorTheme.TEXT_GREEN_COLOR
            }]}>Categories</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.marketCardWrapper}>
          <FlatList
            data={mpData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
            keyExtractor={({ id }) => id.toString()}
            renderItem={renderProductList} />
        </View>
      </View>
    </View>
  )
}
