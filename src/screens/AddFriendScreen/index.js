import React, { useRef, useState } from 'react'
import { View, StatusBar, FlatList, Text, Image, ScrollView } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import styles from './style'
import ProfileHeader from '../../components/ProfileHeader'
import RoundedTags from '../../components/RoundedTags'
import Images from '../../common/Images'
import PostComponent from '../../components/PostComponent'

export default function AddFriendScreen () {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null)
  const videoRefs = useRef([])
  const dummyData = [
    {
      id: '919919',
      image: Images.SELECTED_TWEET,
      text: 'Photos'
    },
    {
      id: '2323535',
      image: Images.SELECTED_TWEET,
      text: 'Market Place'
    },
    {
      id: '2321535',
      image: Images.SELECTED_TWEET,
      text: 'Stars 25'
    },
    {
      id: '23212235',
      image: Images.SELECTED_TWEET,
      text: 'Tweet'
    },
    {
      id: '22212235',
      image: Images.SELECTED_TWEET,
      text: 'Group & Communities'
    }
  ]
  const friendsDummyData = [
    {
      id: '919919',
      image: Images.DUMMY_POST_IMAGE,
      text: 'Mia'
    },
    {
      id: '2323535',
      image: Images.DUMMY_POST_IMAGE,
      text: 'Andria'
    },
    {
      id: '2321535',
      image: Images.DUMMY_POST_IMAGE,
      text: 'Loa Messi'
    },
    {
      id: '23212235',
      image: Images.DUMMY_POST_IMAGE,
      text: 'Nitin'
    },
    {
      id: '22212235',
      image: Images.DUMMY_POST_IMAGE,
      text: 'Jonas Nick'
    }
  ]
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
  const postDummyData = [
    {
      id: '111',
      name: 'Jhon Smith',
      userName: '@smith',
      userImage: Images.DUMMY_PROFILE_IMAGE,
      postHeading: 'Xinjiang is the largest of all provinces and regions in China and has tha longest',
      postImage: Images.DUMMY_POST_IMAGE
    },
    {
      id: '222',
      name: 'Jhon Smith',
      userName: '@smith',
      userImage: Images.DUMMY_PROFILE_IMAGE,
      postHeading: 'Xinjiang is the largest of all provinces and regions in China and has tha longest',
      postImage: Images.DUMMY_POST_IMAGE
    },
    {
      id: '333',
      name: 'Jhon Smith',
      userName: '@smith',
      userImage: Images.DUMMY_PROFILE_IMAGE,
      postHeading: 'Xinjiang is the largest of all provinces and regions in China and has tha longest',
      postImage: Images.DUMMY_POST_IMAGE
    },
    {
      id: '444',
      name: 'Jhon Smith',
      userName: '@smith',
      userImage: Images.DUMMY_PROFILE_IMAGE,
      postHeading: 'Xinjiang is the largest of all provinces and regions in China and has tha longest',
      postImage: Images.DUMMY_POST_IMAGE
    },
    {
      id: '555',
      name: 'Jhon Smith',
      userName: '@smith',
      userImage: Images.DUMMY_PROFILE_IMAGE,
      postHeading: 'Xinjiang is the largest of all provinces and regions in China and has tha longest',
      postImage: Images.DUMMY_POST_IMAGE
    }
  ]

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
  return (
    <View style={styles.mainContainer}>
      <StatusBar animated backgroundColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} barStyle={'light-content'} />
      <HeaderComponent
        title="Profile"
        isTextColor={ColorTheme.WHITE}
        isColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isCreateIcon={true}
      />
      <View style={{ flex: 1 }}>
        <ScrollView nestedScrollEnabled>
          <ProfileHeader buttonText="Add Friend" />
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
                keyExtractor={({id}) => id.toString()}
                numColumns={4}
                showsHorizontalScrollIndicator={false}
              />
            </View> */}
            <View style={styles.horizontalDivideStyle} />
            <View>
              <Text style={styles.textBoldStyle}>Posts</Text>
              <FlatList
                data={postDummyData}
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
