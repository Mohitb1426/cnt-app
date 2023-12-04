/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './style'
import Video from 'react-native-video'
import { useDispatch, useSelector } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import {
  onCreateComment
} from '../../screens/CommentsScreen/actionCommentsScreen'
import SvgIcon from '../../common/SvgIcon'
import ReelsUserInfo from '../ReelsUserInfo'
import { ColorTheme } from '../../common/AppStyles'
import Images from '../../common/Images'
import { Routes } from '../../routes/Routes'
import { useNavigation } from '@react-navigation/native'
import { onReelLike, onReelLikeFalse } from '../../screens/ReelsComponent/actionReelsScreen'

export default function ReelsCOmmonComponent({
  item,
  index,
  selectedVideoIndex
}) {
  const [showComments, setShowComments] = useState(false)
  const [text, setText] = useState('')
  const { profileData } = useSelector(state => state.reducerProfileScreen)
  const [isMuted, setIsMuted] = useState(true)
  const { commentData } = useSelector(state => state.reducerCommentsScreen)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  const addComments = async postId => {
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )
    const reqBody = {
      description: text,
      user: userID,
      post: postId,
      is_comment: true
    }
    dispatch(onCreateComment(reqBody))
    setText('')
  }

  const handleVideoPress = () => {
    setIsMuted(!isMuted)
  }
  const likePostByUser = async () => {
    dispatch(onReelLikeFalse(true))
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )
    const requestBody = {
      user: userID,
      reel: item?.id,
      is_like: !item?.is_like
    }
    dispatch(onReelLike({ requestBody }))
  }

  const sharePost = () => {
    const shareOptions = {
      title: '',
      // eslint-disable-next-line no-underscore-dangle
      message: `I found this on Click n Talk App. For more details, download the app now.\ncliclntakk://${Routes.HEART_IMAGE}`
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

  return (
    <View style={styles.videoContainerMain}>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={handleVideoPress}>
        <Video
          source={{ uri: item?.video }}
          resizeMode="cover"
          style={styles.video}
          // paused={index !== selectedVideoIndex}
          repeat={true}
          muted={isMuted}
        />
      </TouchableOpacity>
      <>
        <View
          style={{
            position: 'absolute',
            bottom: 140,
            right: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <TouchableOpacity
            onPress={likePostByUser}
            style={styles.svgIconMargin}>
            {!item?.is_like ? <SvgIcon.LikeIcon />
              : <Image
                source={Images.THUMB_UP}
                style={styles.profileImageStyle}
              />}
            <Text style={styles.textStyleReels}>
              {item?.like_count}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(Routes.COMMENTS_SCREEN, { reelId: item?.id })
            }
            style={styles.svgIconMargin}>
            <SvgIcon.ChatReelIcon />
            <Text style={styles.textStyleReels}>{item?.comment_count}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sharePost} style={styles.svgIconMargin}>
            <SvgIcon.ShareReelIcon />
            <Text style={styles.textStyleReels}>{item?.share_count}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
          <ReelsUserInfo item={item} />
        </View>
      </>
    </View>
  )
}
