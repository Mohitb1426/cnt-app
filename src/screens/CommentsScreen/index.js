/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import styles from './style'
import { ColorTheme } from '../../common/AppStyles'
import LinearGradient from 'react-native-linear-gradient'
import SvgIcon from '../../common/SvgIcon'
import Images from '../../common/Images'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import { createReelComments, getComment, getReelComments, onCreateComment } from './actionCommentsScreen'
import { useDispatch, useSelector } from 'react-redux'

export default function CommentsScreen({ navigation, route }) {
  const [text, setText] = useState('')
  const { isLoading, commentData } = useSelector(
    state => state.reducerCommentsScreen
  )

  const dispatch = useDispatch()
  const renderComments = ({ item }) => {
    return (
      <View
        style={{
          display: 'flex',
          marginBottom: 10,
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <View
          style={{
            display: 'flex',
            paddingVertical: 10,
            flexDirection: 'row',
            paddingHorizontal: 10,
            borderRadius: 30,
            backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
          }}>
          <Image
            source={{ uri: item?.user?.profile_pic }}
            style={styles.profileImageStyle}
          />
          <View style={{ width: '80%', marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 11,
                color: '#FFFFFF',
                fontWeight: 'normal'
              }}>
              {item?.user?.fullname}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#FFFFFF',
                fontWeight: 'bold'
              }}>
              {item?.description}
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row'
          }}>
          <SvgIcon.LikeIcon color={'#000000'} />
          <Text
            style={{
              fontSize: 12,
              color: '#000000',
              fontWeight: 'bold',
              marginLeft: 5
            }}>
            {item?.likes?.length}
          </Text>
        </View> */}
      </View>
    )
  }
  const addComments = async () => {
    const userID = await StorageUtils.getNumber(
      AsyncKeys.ASYNC_KEY_USER_ID,
      null
    )
    const reqBody = {
      description: text,
      user: userID,
      post: route?.params?.postId,
      is_comment: true
    }
    if (route?.params?.reelId) {
      const payload = {
        description: text,
        user: userID,
        reel: route?.params?.reelId
      }
      dispatch(createReelComments(payload))
      setText('')
      return
    }
    dispatch(onCreateComment(reqBody))
    setText('')
  }
  useEffect(() => {
    if (route?.params?.reelId) {
      dispatch(getReelComments(route?.params?.reelId))
      return
    }
    dispatch(getComment(route?.params?.postId))
  }, [route?.params?.postId])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={Images.LOADING} style={styles.loadingImageStyle} />
      </View>
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
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Comment"
        isWhiteIcon={'#FFB804'}
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
      />
      <View style={styles.subWrapper}>
        <FlatList
          data={commentData}
          renderItem={renderComments}
          keyExtractor={({ id }) => id.toString()}
          showsVerticalScrollIndicator={false}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
          }}>
          <TextInput
            style={{
              backgroundColor: ColorTheme.DIVIDER_BACKGROUND,
              width: 265,
              height: 50,
              borderRadius: 25,
              paddingLeft: 20
            }}
            value={text}
            placeholder="Type a Comment..."
            onChangeText={text => setText(text)}
            returnKeyType="send"
          />
          <TouchableOpacity
            onPress={addComments}
            style={{
              marginLeft: 20,
              backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
              width: 45,
              height: 45,
              borderRadius: 22,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
            <SvgIcon.SendIcon color={ColorTheme.WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
