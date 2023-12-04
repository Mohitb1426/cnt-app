import React, { useCallback, useRef, useState } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  Dimensions,
  StatusBar
} from 'react-native'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import { useDispatch, useSelector } from 'react-redux'
import { getReelsData } from './actionReelsScreen'
import { useFocusEffect } from '@react-navigation/native'
import ReelsCOmmonComponent from '../../components/ReelsCommonComponent'
import LinearGradient from 'react-native-linear-gradient'

const ScreenHeight = Dimensions.get('window').height

const ReelsScreen = () => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0)
  const { isLoading, reelData, reelLiked } = useSelector(state => state.reducerReelsScreen)

  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(getReelsData())
    }, [])
  )

  const renderItem = ({ item, index }) => {
    return (
      <ReelsCOmmonComponent item={item} index={index} selectedVideoIndex={selectedVideoIndex} />
    )
  }

  if (isLoading && !reelLiked) {
    return (
      <ActivityIndicator
        style={{
          marginVertical: 20,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}
        size="large"
        color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
      />
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={reelData}
        style={{ height: Dimensions.get('window').height }}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        initialScrollIndex={0}
        disableIntervalMomentum
        pagingEnabled
        decelerationRate={0.5}
      />
    </View>
  )
}

export default ReelsScreen
