/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import style from './style'
import { ActivityIndicator, Image, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { ColorTheme } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import { useDispatch, useSelector } from 'react-redux'
import { getPostDataById } from '../ProfileScreen/actionProfileScreen'
import Images from '../../common/Images'
import Video from 'react-native-video'
import { Routes } from '../../routes/Routes'
import { onViewPost } from '../HomeScreen/actionHomeScreen'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'

export default function ImagePreviewScreen({ navigation, route }) {
  const dispatch = useDispatch()
  const [isMuted, setIsMuted] = useState(true)
  const [count, setCount] = useState(0)
  const { params } = route
  const { postDataById, isPostLoading } = useSelector((state) => state.reducerProfileScreen)
  const userID = StorageUtils.getNumber(
    AsyncKeys.ASYNC_KEY_USER_ID,
    null
  )
  useEffect(() => {
    if (params?.id) {
      dispatch(getPostDataById(params?.id))
    }
  }, [params?.id])

  useEffect(() => {
    if (postDataById && count === 0) {
      if (postDataById?.is_video) {
        const reqBody = {
          userid: userID,
          reelid: params?.id
        }
        dispatch(onViewPost(reqBody))
      } else {
        const reqBody = {
          userid: userID,
          postid: params?.id
        }
        dispatch(onViewPost(reqBody))
      }
      setCount(count + 1)
    }
  }, [postDataById])

  if (isPostLoading) {
    return <ActivityIndicator style={{
      flex: 1, justifyContent: 'center', alignItems: 'center'
    }} size="large" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
  }

  const handleVideoPress = () => {
    setIsMuted(!isMuted)
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#128C7E', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <View style={{
          backgroundColor: '#128C7E',
          height: 50,
          flexDirection: 'row',
          paddingHorizontal: 20,
          alignItems: 'center'
        }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(Routes.HOME_SCREEN)}
            style={style.backButton}>
            <SvgIcon.LeftArrow color={'#FFF'} />
          </TouchableOpacity>
          <Image source={Images.LOGO_ICON_IMAGE} style={style.imageLogoWrapper} />
        </View>
        <View style={{ flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 10 }}>
          <Image source={{ uri: postDataById?.user?.profile_pic }} style={style.imageProfile} resizeMode="contain" />
          <View>
            <Text style={{ fontSize: 13, fontWeight: '700', marginLeft: 10 }}>{postDataById?.user?.fullname}</Text>
            <Text style={{ fontSize: 10, fontWeight: '500', marginLeft: 10 }}>{postDataById?.caption}</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {postDataById?.is_video
            ? <TouchableOpacity
              style={style.postImageWrapper}
              onPress={handleVideoPress}>
              <Video
                source={{ uri: postDataById?.video }}
                // onLoad={() => setVideoLoading(true)}
                resizeMode="cover"
                // onReadyForDisplay={() => setVideoLoading(false)}
                style={style.video}
                paused={false}
                repeat={true}
                muted={isMuted}
                onError={error => console.log(error, 'error')}
              />
            </TouchableOpacity>
            : <Image source={{ uri: postDataById?.image }} style={style.image} resizeMode="cover" />

          }
        </View>
      </View>
    </View >
  )
}
