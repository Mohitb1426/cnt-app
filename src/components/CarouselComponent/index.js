/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {
  Dimensions, View, Image, Text
} from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import CustomButton from '../CustomButton'
import { ColorTheme } from '../../common/AppStyles'
import Fonts from '../../common/Fonts'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { useDispatch, useSelector } from 'react-redux'
import { isUserSignedAction } from '../../screens/IntroScreen/actionIntroScreen'

export function CarouselComponent({ data }) {
  const navigation = useNavigation()
  const [scrollCount, setScrollCount] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const { width } = Dimensions.get('window')
  const { height } = Dimensions.get('window')
  const { isUserSigned } = useSelector((state) => state.reducerIntroScreen)
  const dispatch = useDispatch();
  function Pagination() {
    return (
      <View style={styles.dotContainer}>
        {data?.map((ele, index) => {
          return (
            <View key={index}
              style={{
                height: 10, width: 10, borderRadius: 6, backgroundColor: index === activeIndex ? '#ffffff' : '#9d9d9d', marginLeft: 10
              }}
            />
          )
        })}
      </View>
    )
  }
  const onSnap = (index) => {
    setScrollCount(scrollCount + 1)
    setActiveIndex(index)
  }

  const handleChangePassword = async () => {
    // StorageUtils.flush()
    const token = await StorageUtils.getString(AsyncKeys.ASYNC_KEY_ACCESS_TOKEN, null)
    if (token) {
      dispatch(isUserSignedAction(true))
      return
    }
    return navigation.navigate(Routes.SCREEN_LOGIN)
  }

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop={false}
        mode="normal"
        pagingEnabled
        snapEnabled
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50
        }}
        width={width}
        height={height}
        autoPlay={false}
        data={data}
        scrollAnimationDuration={100}
        onSnapToItem={(index) => onSnap(index)}
        renderItem={({ item }) => (
          <View key={item.id}
            style={styles.carouselWrapper}>
            <View
              style={styles.itemContainer}
            ><Image source={item?.cover_image} style={styles.imageStyle} />
            </View>
            <View style={styles.bottomContainer}>
              <View style={styles.textWrapper}>
                <Text style={styles.titleStyle}>{data[activeIndex]?.title}</Text>
                <Text style={styles.descriptionStyle}>{data[activeIndex]?.description}</Text>
              </View>
              <Pagination />
              {activeIndex === 1
                ? <CustomButton
                  customStyle={styles.customButtonCustomStyle}
                  onButtonPress={handleChangePassword}
                  buttonText={'Let\'s Start'}
                  isDisabled={false}
                  textColor={ColorTheme.WHITE}
                  buttonColor={ColorTheme.GREEN_BG}
                  fontFamily={Fonts.INTER_BOLD}
                />
                : null}
            </View>
          </View>
        )}
      />
    </View >
  )
}
