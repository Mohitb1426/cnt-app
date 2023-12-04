import React, { useCallback, useRef, useState } from 'react'
import { View, StatusBar, FlatList, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import styles from './style'
import ProfileHeader from '../../components/ProfileHeader'
import RoundedTags from '../../components/RoundedTags'
import Images from '../../common/Images'
import PostComponent from '../../components/PostComponent'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getProfileData, getProfilePostData } from './actionProfileScreen'
import { useDispatch, useSelector } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import { Routes } from '../../routes/Routes'
import { getMessageData } from '../MessagesScreen/actionMessageScreen'
import { CustomModal } from '../../components/CustomModal'
import SvgIcon from '../../common/SvgIcon'

export default function ProfileScreen() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [showUpcomingPopUp, setShowUpcomingPopUp] = useState(false)
  const { profilePostData, isLoading, userFriendList } = useSelector((state) => state.reducerProfileScreen)
  const { messagesListData } = useSelector((state) => state.reducerMessageScreen)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)
  const videoRefs = useRef([])
  const flatlistRef = useRef(null)
  const dummyData = [
    {
      id: '919919',
      image: Images.PAYMENT_ICON,
      text: 'Photos',
      goToMenu: () => setShowUpcomingPopUp(true)
    },
    {
      id: '2323535',
      image: Images.FRIENDS_GROUP_ICON,
      text: 'Market Place',
      goToMenu: () => navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
    },
    {
      id: '2321535',
      image: Images.STAR_IMAGE,
      text: 'Stars 0',
      goToMenu: () => navigation.navigate(Routes.REDEEM_STAR_SCREEN)
    },
    // {
    //   id: '23212235',
    //   image: Images.SELECTED_TWEET,
    //   text: 'Tweet',
    //   goToMenu: () => console.log('click')
    // },
    {
      id: '22212235',
      image: Images.SETTING_GROUP_ICON,
      text: 'Group & Communities',
      goToMenu: () => navigation.navigate(Routes.GROUP_AND_COMMUNITY_SCREEN)
    }
  ]

  const renderItems = ({ item }) => {
    return (
      <RoundedTags image={item.image} goToMenu={item?.goToMenu} text={item.text} />
    )
  }
  const renderFriendItems = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.FOLLOW_FRIEND_SCREEN, {
        userId: item?.chatuser?.id
      })} style={{ marginRight: 10, marginBottom: 10, alignItems: 'center' }}>
        <Image source={{ uri: item?.chatuser?.profile_pic }} style={styles.imageStyle} />
        <Text style={styles.textSemiBoldStyle}>{item?.chatuser?.fullname}</Text>
      </TouchableOpacity>
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
    console.log(item)
    return (
      <PostComponent {...item} toggleMute={toggleMute} currentVisibleIndex={currentVideoIndex} videoRefs={videoRefs} index={index} padding={0} />
    )
  }

  useFocusEffect(
    useCallback(() => {
      dispatch(getProfilePostData())
      dispatch(getProfileData())
      dispatch(getMessageData())
    }, [])
  )
  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        isWhiteIcon={'#FFFFFF'}
        goBack={() => navigation.goBack()}
        title="Profile"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={false}
        isSearchIcon={true}
      />
      <View style={{ flex: 1 }}>
        {isLoading
          ? <ActivityIndicator
            style={{
              marginVertical: 20,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            size="large"
            color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
          />
          : <ScrollView nestedScrollEnabled>
            <ProfileHeader />

            <View style={styles.tagStyles}>
              <FlatList
                data={dummyData}
                renderItem={renderItems}
                keyExtractor={({ id }) => id.toString()}
                numColumns={3}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style={styles.secondContainer}>
              {messagesListData?.length > 0
                ? <>
                  <View style={styles.rowStyle}>
                    <View style={styles.rowOnlyStyle}>
                      <Text style={styles.textBoldStyle}>Friends</Text>
                      <Text>{`(${messagesListData?.length})`}</Text>
                    </View>
                    {/* <Text style={{ paddingRight: 20 }}>Show all</Text> */}
                  </View>
                  <View style={{ paddingHorizontal: 20 }}>
                    <FlatList
                      data={messagesListData}
                      renderItem={renderFriendItems}
                      horizontal
                      keyExtractor={(item) => item?.id?.toString()}
                      // numColumns={4}
                      showsHorizontalScrollIndicator={false}
                    />
                  </View>
                </>
                : null}
              <View style={styles.horizontalDivideStyle} />
              <View>
                <Text style={styles.textBoldStyle}>Posts</Text>
                <FlatList
                  data={profilePostData?.results?.length > 0 ? profilePostData?.results : []}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={renderPostList}
                />
              </View>
            </View>
          </ScrollView>}
      </View>
      {showUpcomingPopUp
        ? <CustomModal
          borderBottomLeftRadius={25}
          borderBottomRightRadius={25}
          visible={showUpcomingPopUp}
          markingType="period"
          // modalHeight={150}
          alignBottom={false}
          backdropOpacity={0.2}
          onBackdropPress={() => {
            setShowUpcomingPopUp(false)
          }}
          onModalHide={() => {
            setShowUpcomingPopUp(false)
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <SvgIcon.ComingSoonIcon />
          </View>

        </CustomModal>
        : null}
    </View>
  )
}
