/* eslint-disable react/prop-types */
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View, StatusBar, FlatList, Text, Image, ScrollView } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import styles from './style'
import ProfileHeader from '../../components/ProfileHeader'
import RoundedTags from '../../components/RoundedTags'
import Images from '../../common/Images'
import PostComponent from '../../components/PostComponent'
import CustomButton from '../../components/CustomButton'
import Fonts from '../../common/Fonts'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { addUserFriend, followUser, getProfileData, getProfilePostData } from '../ProfileScreen/actionProfileScreen'
import { useDispatch, useSelector } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { getMessageData } from '../MessagesScreen/actionMessageScreen'

export default function FollowFriendScreen({ route }) {
  const navigation = useNavigation()
  const [isFollowed, setIsFollowed] = useState(true)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)
  const videoRefs = useRef([])
  const [isAddedFriend, setIsAddedFriend] = useState(false)
  const { profilePostData, profileData } = useSelector((state) => state.reducerProfileScreen)
  const { messagesListData } = useSelector((state) => state.reducerMessageScreen)
  const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)

  const renderItems = ({ item }) => {
    return (
      <RoundedTags image={item.image} text={item.text} />
    )
  }
  const renderFriendItems = ({ item }) => {
    return (
      <View style={{ marginRight: 10, marginBottom: 10, alignItems: 'center' }}>
        <Image source={item?.image} style={styles.imageStyle} />
        <Text style={styles.textSemiBoldStyle}>{item?.text}</Text>
      </View>
    )
  }

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

  const renderPostList = ({ item, index }) => {
    return (
      <PostComponent {...item} toggleMute={toggleMute} currentVisibleIndex={currentVideoIndex} videoRefs={videoRefs} index={index} padding={0} />
    )
  }
  const dispatch = useDispatch()
  const { params } = route

  useFocusEffect(
    useCallback(() => {
      dispatch(getMessageData())
      dispatch(getProfilePostData(params?.userId))
      dispatch(getProfileData(params?.userId))
    }, [])
  )
  const addFriendUser = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const reqBody = {
      from_user: userID,
      to_user: params?.userId,
      status: 'pending'
    }
    dispatch(addUserFriend(reqBody))
    setIsAddedFriend(true)
  }

  const onFollowUser = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const reqBody = {
      from_user: userID,
      to_user: params?.userId,
      status: 'accepted'
    }
    dispatch(followUser(reqBody))
  }
  const showAddFriendButton = useMemo(() => {
    const friendIdExist = messagesListData?.find(ele => Number(ele?.user) === Number(params?.userId))
    if (!friendIdExist) {
      return true
    }
  }, [messagesListData])

  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        title="Profile"
        isWhiteIcon={'#FFFFFF'}
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isCreateIcon={true}
        goBack={() => navigation.goBack()}
      />
      <View style={{ flex: 1 }}>
        <ScrollView nestedScrollEnabled>
          <ProfileHeader buttonText="Add Friend" isOtherUser={true} />
          <View style={styles.tagStyles}>
            {showAddFriendButton
              ? <CustomButton
                textStyle={styles.buttonTextStyle}
                customStyle={styles.customButtonCustomStyle}
                buttonText={'Add Friend'}
                isDisabled={false}
                fontFamily={Fonts.INTER_BOLD}
                onButtonPress={addFriendUser}
                textColor={ColorTheme.WHITE}
                buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
              />
              : null}
            {!profileData?.followers_users?.includes(userID?.toString())
              ? <CustomButton
                textStyle={styles.buttonTextStyle}
                customStyle={styles.customButtonCustomStyle}
                buttonText={'Follow'}
                isDisabled={false}
                onButtonPress={onFollowUser}
                textColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
                buttonColor={ColorTheme.TEXT_YELLOW_COLOR}
                fontFamily={Fonts.INTER_BOLD}
              />
              : null}
            {/* <FlatList
              data={dummyData}
              renderItem={renderItems}
              keyExtractor={({id}) => id.toString()}
              numColumns={3}
              showsHorizontalScrollIndicator={false}
            /> */}
          </View>
          <View style={styles.secondContainer}>
            {/* <View style={styles.rowStyle}>
              <View style={styles.rowOnlyStyle}>
                <Text style={styles.textBoldStyle}>Friends</Text>
                <Text>(5)</Text>
              </View>
              <Text>Show all</Text>
            </View>
            <View >
              <FlatList
                data={friendsDummyData}
                renderItem={renderFriendItems}
                keyExtractor={(id) => id.toString()}
                numColumns={4}
                showsHorizontalScrollIndicator={false}
              />
            </View> */}
            <View style={styles.horizontalDivideStyle} />
            <View>
              <Text style={styles.textBoldStyle}>Posts</Text>
              <FlatList
                data={profilePostData?.results}
                keyExtractor={({ id }) => id.toString()}
                renderItem={renderPostList}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
