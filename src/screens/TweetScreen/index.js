import React, { useCallback, useMemo, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import MenuHeader from '../../components/MenuHeader'
import SvgIcon from '../../common/SvgIcon'
import PostComponent from '../../components/PostComponent'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import { getHomeFeedData } from '../HomeScreen/actionHomeScreen'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../common/Images'

export default function TweetScreen () {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const { homeFeedData, isLoading } = useSelector(
    state => state.reducerHomeScreen
  )

  useFocusEffect(
    useCallback(() => {
      dispatch(getHomeFeedData(page))
    }, [])
  )

  const renderPostList = ({ item }) => {
    return <PostComponent {...item} padding={10} isImageNotShow={false} />
  }
  const openCreatePost = () => {
    navigation.navigate(Routes.CREATE_POST_SCREEN)
  }

  const renderEmptyComponent = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{'No Tweet Found'}</Text>
    </View>
  )
  const tweetData = useMemo(() => {
    const onlyTweetData = homeFeedData?.filter(ele =>
      Boolean(ele?.post_as_tweet)
    )
    return onlyTweetData
  }, [homeFeedData])

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
      <MenuHeader icon={<SvgIcon.TweetIcon />} isSearchIcon={true} />
      <View style={styles.flatSecondListContainer}>
        {isLoading
          ? (
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
          : (
          <FlatList
            data={tweetData?.length > 0 ? tweetData : []}
            keyExtractor={({ id }) => id.toString()}
            renderItem={renderPostList}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderEmptyComponent}
          />
            )}
      </View>
      <View style={styles.addIconPosition}>
        <TouchableOpacity
          onPress={openCreatePost}
          style={styles.addIconBackground}>
          <SvgIcon.AddIcon color={ColorTheme.TEXT_YELLOW_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
