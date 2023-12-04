/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './style'
import MenuHeader from '../../components/MenuHeader'
import Images from '../../common/Images'
import PostComponent from '../../components/PostComponent'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllStory,
  getHomeFeedData,
  getUserStory,
  onAddStory
} from './actionHomeScreen'
import { useFocusEffect } from '@react-navigation/native'
import InstaStory from 'react-native-insta-story'
import ImagePicker from 'react-native-image-crop-picker'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { getProfileData } from '../ProfileScreen/actionProfileScreen'
import LinearGradient from 'react-native-linear-gradient'
import { ColorTheme } from '../../common/AppStyles'
import { getNotificationData } from '../NotificationScreen/actionNotificationScreen'

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const { homeFeedData, isLoading, userStory, allStory } = useSelector(
    state => state.reducerHomeScreen
  )
  const { notificationData } = useSelector((state) => state.reducerNotificationScreen)
  const { likeClick } = useSelector(state => state.reducerProfileScreen)
  const [getUserStorys, setGetUserStory] = useState([])
  const [getAllStories, setGetAllStories] = useState([])
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)
  const [page, setPage] = useState(1)
  const videoRefs = useRef([])
  const flatlistRef = useRef(null)

  useEffect(() => {
    const getAllGoodStory = allStory?.filter(
      ele => ele?.stories?.length !== 0
    )
    const arr = []
    arr.push(userStory)
    const getUserGoodStory = arr?.filter(ele => ele?.stories?.length !== 0)
    const transformedArray = getUserGoodStory?.map(user => ({
      user_id: user?.id,
      user_image: user?.profile_pic,
      user_name: user?.fullname,
      stories: user?.stories?.map(story => ({
        story_id: story.id,
        story_image: story.image
      }))
    }))
    const transformedArray1 = getAllGoodStory?.map(user => ({
      user_id: user?.id,
      user_image: user?.profile_pic,
      user_name: user?.fullname,
      stories: user?.stories?.map(story => ({
        story_id: story?.id,
        story_image: story?.image
      }))
    }))
    setGetUserStory(transformedArray)
    setGetAllStories([...transformedArray, ...transformedArray1])
  }, [allStory, userStory])

  const feedDataWithoutTweet = useMemo(() => {
    const onlyFeedData = homeFeedData?.filter(ele =>
      Boolean(!ele?.post_as_tweet)
    )
    return onlyFeedData
  }, [homeFeedData])

  useFocusEffect(
    useCallback(() => {
      dispatch(getUserStory())
      dispatch(getAllStory())
      dispatch(getHomeFeedData(page))
      dispatch(getProfileData())
      dispatch(getNotificationData())
    }, [])
  )

  const captureData = async image => {
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

  const openGallery = useCallback(() => {
    ImagePicker.openPicker({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      compressImageQuality: 0.8,
      cropping: true,
      mediaType: 'photo'
    })
      .then(image => {
        captureData(image)
      })
      .catch(e => {
        // debugLog('e', e);
      })
  })

  const notificationUnreadMsgCount = useMemo(() => {
    let tempCount = 0
    notificationData?.forEach(element => {
      if (element?.is_view === 'no') {
        tempCount = tempCount + 1
      }
    })
    return tempCount
  }, [notificationData])

  const toggleMute = (index, key, mute) => {
    if (key === 1) {
      if (mute) {
        videoRefs?.current[index]?.setNativeProps({ muted: true })
        return
      }
      videoRefs?.current[index]?.setNativeProps({ muted: false })
      return
    }
    if (currentVideoIndex !== null) {
      videoRefs.current[currentVideoIndex].setNativeProps({ muted: true })
    }
    videoRefs?.current[index]?.setNativeProps({ muted: false })
    setCurrentVideoIndex(index)
  }
  const renderItem = ({ item, index }) => {
    return (
      <PostComponent {...item} toggleMute={toggleMute} currentVisibleIndex={currentVideoIndex} videoRefs={videoRefs} index={index} padding={10} />
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
      <View style={{ flex: 1 }}>
        <MenuHeader notificationUnreadCount={notificationUnreadMsgCount} />
        {isLoading && !likeClick ? (
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
        ) : (
          <View style={{ flex: 1, backgroundColor: '#F9F9F9' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.flatListContainer}>
                <View style={styles.flatListItems}>
                  <TouchableOpacity
                    onPress={openGallery}
                    style={styles.imageContainer}>
                    <Image
                      source={Images.STORY_NEW_ICON}
                      style={styles.addImageStyle}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textStyle}>{'your'}</Text>
                </View>
                {/* <InstaStory
                  data={getUserStorys?.length > 0 ? getUserStorys : []}
                  duration={10}
                /> */}
                <View style={{ marginLeft: 0 }}>
                  <InstaStory
                    style={{ padding: 0, margin: 0 }}
                    data={getAllStories?.length > 0 ? getAllStories : []}
                    duration={10}
                  />
                </View>
              </View>
              <View style={styles.flatSecondListContainer}>
                <FlatList
                  ref={flatlistRef}
                  data={feedDataWithoutTweet}
                  contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}
                  renderItem={renderItem}
                  keyExtractor={({ id }) => id.toString()}
                // snapToAlignment="center"
                // snapToInterval={width * 0.8}
                // viewabilityConfig={viewConfigRef}
                // onViewableItemsChanged={onViewRef}
                />
                {/* {feedDataWithoutTweet?.map(ele => {
                  return (
                    <View key={ele?.id}>
                      <PostComponent {...ele} padding={10} />
                    </View>
                  )
                })} */}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  )
}
