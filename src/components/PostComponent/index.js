/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  Share,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Images from '../../common/Images'
import styles from './style'
import PostBottomSheet from '../postBottomSheet'
import DeleteComponent from '../DeleteComponent'
import { Routes } from '../../routes/Routes'
import { useDispatch } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import {
  likeClicked,
  likePost
} from '../../screens/ProfileScreen/actionProfileScreen'
import Video from 'react-native-video'
import { useNavigation } from '@react-navigation/native'
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'

export default function PostComponent({
  id,
  title,
  caption,
  image,
  padding,
  isImageNotShow,
  is_like,
  likeCount = 0,
  commentCount = 0,
  viewCount = 0,
  shareCount = 0,
  starCount = 0,
  user,
  is_video = false,
  video,
  index,
  videoRefs,
  currentVisibleIndex,
  toggleMute
}) {
  const description = caption === 'any' ? null : caption
  const navigation = useNavigation()
  const [bottomSheet, setBottomSheet] = useState(false)
  const [videoLoading, setVideoLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [bottomDeleteSheet, setBottomDeleteSheet] = useState(false)
  const dispatch = useDispatch()
  const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const postByid = id
  const [paused, setpaused] = useState(true)
  const [isMute, setIsMute] = useState(true)

  useEffect(() => {
    return () => {
      dispatch(likeClicked(false))
    }
  }, [])
  const dummyData = [
    {
      id: '1',
      name: viewCount,
      image: Images.EYE_IMAGE
    },
    {
      id: '2',
      name: likeCount,
      image: is_like ? Images.HEART_IMAGE : Images.UNLIKE_ICON,
      borderWidth: 3
    },
    {
      id: '3',
      name: commentCount,
      image: Images.CHAT_ICON_IMAGE,
      borderWidth: 3
    },
    {
      id: '4',
      name: shareCount,
      image: Images.SHARE_IMAGE
    },
    {
      id: '5',
      name: starCount,
      image: Images.STAR_IMAGE,
      alignEnd: true
    }
  ]
  const renderPostBottomList = ({ item }) => {
    const likePostByUser = async () => {
      const userID = await StorageUtils.getNumber(
        AsyncKeys.ASYNC_KEY_USER_ID,
        null
      )
      const requestBody = {
        user: userID,
        postid: postByid,
        is_like: !is_like
      }
      dispatch(likePost({ requestBody }))
      dispatch(likeClicked(true))
    }
    const sharePost = () => {
      const shareOptions = {
        title: '',
        // eslint-disable-next-line no-underscore-dangle
        message: `I found this on Click n Talk App. For more details, download the app now.\nclickntokk://${Routes.IMAGE_PREVIEW}/${id}`
      }
      Share.share(shareOptions)
        .then(res => {
          // debugLog(res);
        })
        // eslint-disable-next-line n/handle-callback-err
        .catch(err => {
          // debugLog(err);
        })
    }
    const onClickPostIcon = id => {
      switch (id) {
        case '2':
          likePostByUser()
          break
        case '4':
          sharePost()
          break
        case '3':
          navigation.navigate(Routes.COMMENTS_SCREEN, { postId: postByid })
          break
        default:
          break
      }
    }
    const isAlignEnd = item?.alignEnd ? styles.alignEndStyle : null
    return (
      <TouchableOpacity
        onPress={() => onClickPostIcon(item?.id)}
        style={[styles.bottomIconContainer, isAlignEnd]}>
        <View style={styles.bottomPostImageContainer}>
          <Image source={item?.image} style={styles.profileImageStyle} />
        </View>
        <Text style={styles.simpleTextStyle}>{item?.name}</Text>
      </TouchableOpacity>
    )
  }

  const showFeed = () => {
    if (isImageNotShow) {
      return null
    }
    if (is_video && video) {
      return (
        <VisibilitySensor onChange={(isVisible) => {
          isVisible ? toggleMute(index, 0, true) : setpaused(true)
        }
        }
        >
          <TouchableOpacity
            style={styles.postImageWrapper}
            onPress={() => {
              setIsMute(!isMute)
              toggleMute(index, 1, isMute)
            }}>
            <Video
              ref={(ref) => (videoRefs.current[index] = ref)}
              source={{ uri: video }}
              resizeMode="cover"
              style={styles.video}
              paused={false}
              repeat={true}
              muted={true}
              onError={error => console.log(error, 'error')}
            />
          </TouchableOpacity>
        </VisibilitySensor>
      )
    }
    if (!is_video && image) {
      return (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.IMAGE_PREVIEW, {
              id
            })
          }
          style={styles.postImageWrapper}>
          <Image source={{ uri: image }} style={styles.imagePostContainer} />
        </TouchableOpacity>
      )
    }
    return null
  }

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.subContainer]}>
        <View style={styles.containerFirst}>
          <TouchableOpacity onPress={() =>
            Number(userID) === Number(user?.id)
              ? null
              : navigation.navigate(Routes.FOLLOW_FRIEND_SCREEN, {
                userId: user?.id
              })
          } style={styles.innerFirstContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: user?.profile_pic }}
                style={styles.profileImageStyleSmall}
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.boldTextStyle}>{user?.fullname}</Text>
              {/* <Text style={styles.simpleTextStyle}>{user?.fullname}</Text> */}
            </View>
          </TouchableOpacity>
          {userID == user?.id
            ? (
              <View style={styles.innerSecondContainer}>
                <TouchableOpacity
                  onPress={() => setBottomSheet(true)}
                  style={styles.imageThreeDotContainer}>
                  <Image
                    source={Images.THREE_DOT_POST_IMAGE}
                    style={styles.profileImageStyleDot}
                  />
                </TouchableOpacity>
              </View>
            )
            : null}
        </View>
        <View style={styles.headingTextContainer}>
          <Text style={styles.boldTextStyle}>{description}</Text>
        </View>
        {showFeed()}
        <View style={styles.bottomFlatListWrapper}>
          <FlatList
            data={dummyData}
            horizontal
            contentContainerStyle={{ flex: 1, justifyContent: 'space-between' }}
            renderItem={renderPostBottomList}
            keyExtractor={({ id }) => id.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      {bottomSheet
        ? (
          <PostBottomSheet
            id={postByid}
            bottomSheet={bottomSheet}
            openDeleteModal={bottomDeleteSheet}
            setOpenDeleteModel={setBottomDeleteSheet}
            setBottomSheet={setBottomSheet}
          />
        )
        : null}
      {bottomDeleteSheet
        ? (
          <DeleteComponent
            postId={postByid}
            openDeleteModal={bottomDeleteSheet}
            setOpenDeleteModel={setBottomDeleteSheet}
          />
        )
        : null}
    </View>
  )
}
