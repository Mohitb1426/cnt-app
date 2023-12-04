import React, { useEffect } from 'react'
import { ActivityIndicator, FlatList, StatusBar, Text, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import MarketPlaceCardComponent from '../../components/MarketPlaceCardComponent'
import Images from '../../common/Images'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../MyMarketPlaceScreen/actionMarketPlaceScreen'

export default function AddNewProductScreen() {
  const dispatch = useDispatch()
  const { isCategoryLoading, categoryData } = useSelector((state) => state.reducerMarketPlaceScreen)
  const dummyData = [
    {
      id: '1',
      image: Images.CAR_IMAGE_DUMMY,
      productName: 'Product 01',
      price: '80k member',
      icons: false
    },
    {
      id: '2',
      image: Images.HOUSE_IMAGE_DUMMY,
      productName: 'Product 02',
      price: '80k member',
      icons: false
    }
  ]
  const renderProductList = ({ item }) => {
    return (
      <MarketPlaceCardComponent {...item} />
    )
  }

  useEffect(() => {
    dispatch(getCategory())
  }, [])

  if (isCategoryLoading) {
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
        title="Add New Product"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isWhiteIcon="#FFB804"
      />
      <View style={styles.mainWrapper}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.categoryStyle}>Choose Category</Text>
        </View>
        <View style={styles.marketCardWrapper}>
          <FlatList
            data={categoryData}
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
