/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StatusBar, Text, View } from 'react-native'
import styles from './style'
import Images from '../../common/Images'
import { ColorTheme } from '../../common/AppStyles'
import FollowComponent from '../../components/FollowComponent'
import CustomButton from '../../components/CustomButton'
import Fonts from '../../common/Fonts'
import LinearGradient from 'react-native-linear-gradient'
import { followGroup, getByidGroupData } from '../GroupAndCommunityScreen/actionGroupAndCommunityScreen'
import { useDispatch, useSelector } from 'react-redux'
import StorageUtils from '../../common/StorageUtils'
import AsyncKeys from '../../common/AsyncKeys'
import ComingSoonIcon from '../../assets/Icons/ComingSoonIcon/ComingSoonIcon'

export default function FollowScreen({ navigation, route }) {
  const { groupAndCommunityDeatilsData, isDetailsLoading } = useSelector(state => state.reducerGroupAndCommunityScreen)
  const dispatch = useDispatch()
  const [follow, setFollow] = useState(true)
  const userId = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
  const postDummyData = [
    {
      id: '111',
      name: 'Fun do adda',
      userName: 'Last online 50 min ago',
      userImage: Images.FOLLOW_DUMMY_IMAGE,
      postImage: Images.FOLLOW_DUMMY_IMAGE
    }
  ]
  useEffect(() => {
    dispatch(getByidGroupData(route?.params?.id))
  }, [])

  if (isDetailsLoading) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        size="large"
        color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
      />
    )
  }
  const followGroupByUser = async () => {
    const userID = await StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)
    const reqBody = {
      user: userID,
      groupid: groupAndCommunityDeatilsData?.id,
      is_follow: 'yes',
      status: 'accepted'
    }
    dispatch(followGroup(reqBody))
  }

  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: groupAndCommunityDeatilsData?.image }} style={styles.imageFollowStyle} />
          </View>
          <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ width: '60%' }}>
                <Text style={styles.boldText}>{groupAndCommunityDeatilsData?.name}</Text>
                <Text style={styles.semiBoldText}>{groupAndCommunityDeatilsData?.location}</Text>
              </View>
              {Number(userId) !== Number(groupAndCommunityDeatilsData?.user)
                ? groupAndCommunityDeatilsData?.followerby?.includes(userId)
                  ? <CustomButton
                    onButtonPress={followGroupByUser}
                    customStyle={styles.customButtonCustomDisableStyle}
                    textStyle={{ fontSize: 12, fontWeight: '400' }}
                    buttonText={'Follow'}
                    isDisabled={true}
                    textColor={ColorTheme.BLACK}
                    buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
                    fontFamily={Fonts.INTER_BOLD}
                  />
                  : <CustomButton
                    onButtonPress={followGroupByUser}
                    customStyle={styles.customButtonCustomStyle}
                    textStyle={{ fontSize: 12, fontWeight: '400' }}
                    buttonText={'Follow'}
                    isDisabled={false}
                    textColor={ColorTheme.WHITE}
                    buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
                    fontFamily={Fonts.INTER_BOLD}
                  />
                : <CustomButton
                  onButtonPress={followGroupByUser}
                  customStyle={styles.customButtonCustomDisableStyle}
                  textStyle={{ fontSize: 12, fontWeight: '400' }}
                  buttonText={'Follow'}
                  isDisabled={true}
                  textColor={ColorTheme.BLACK}
                  buttonColor={ColorTheme.PRIMARY_BACKGROUND_COLOR_01}
                  fontFamily={Fonts.INTER_BOLD}
                />}
            </View>
            <Text style={styles.semi2BoldText}>About Page</Text>
            {/* <Text style={styles.simpleText}>do eiusmod</Text> */}
            <Text style={styles.simpleText}>{groupAndCommunityDeatilsData?.description}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginTop: 20 }}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.boldSimpleText}>{groupAndCommunityDeatilsData?.postCount ?? 0}</Text>
                <Text style={styles.simpleText}>Posts</Text>
              </View>
              {/* <View style={styles.dividerStyle} /> */}
              {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.boldSimpleText}>{groupAndCommunityDeatilsData?.followerCount ?? 0}</Text>
                <Text style={styles.simpleText}>Followers</Text>
              </View> */}
              <View style={styles.dividerStyle} />
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.boldSimpleText}>{groupAndCommunityDeatilsData?.followerby?.length ?? 0}</Text>
                <Text style={styles.simpleText}>Following</Text>
              </View>
            </View>
            <View style={styles.dividerHorizontalStyle} />
            <View style={{ marginVertical: 30 }}>
              <ComingSoonIcon />
              {/* {postDummyData?.map((items) => {
                return (
                  <>
                    <FollowComponent padding= {0} groupAndCommunityDeatilsData={groupAndCommunityDeatilsData} {...items} />
                  </>
                )
              })} */}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
