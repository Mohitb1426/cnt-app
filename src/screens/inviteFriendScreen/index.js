import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Share,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import FriendsCard from '../../components/FriendsCard'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../ProfileScreen/actionProfileScreen'

export default function InviteFriendScreen () {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')

  const { friendList } = useSelector(state => state.reducerProfileScreen)

  useEffect(() => {
    dispatch(searchUser(searchValue))
  }, [searchValue])
  const showList = ({ item }) => {
    return <FriendsCard group={true} follow={true} key={item?.id} {...item} />
  }

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
      </LinearGradient>
      <HeaderComponent
        isColor={'#FFFFFF'}
        goBack={() => navigation.goBack()}
        title="Invite"
        isTextColor={ColorTheme.BLACK}
        isNotificationIcon={false}
        isMenuIcon={true}
        isYellowIcon={true}
        isWhiteIcon={'#075E54'}
      />
      <View style={styles.emailViewContainer}>
        <SvgIcon.SearchIcon />
        <TextInput
          style={styles.textStyle}
          placeholder="Search"
          onChangeText={setSearchValue}
          value={searchValue}
        />
        <View style={styles.absoluteIcon}>
          <SvgIcon.MicIcon />
        </View>
      </View>
      <View style={styles.followingView}>
        <Text style={styles.followingText}>Friends</Text>
      </View>
      <View style={{ flex: 1 }}>
          <FlatList
            data={friendList}
            showsVerticalScrollIndicator={false}
            renderItem={showList}
            keyExtractor={({ id }) => id.toString()}
          />
        <TouchableOpacity
          onPress={() => {
            const shareOptions = {
              title: '',
              // eslint-disable-next-line no-underscore-dangle
              message: `I found this on Click n Talk App. For more details, download the app now.\ncliclntakk://${Routes.GROUP_AND_COMMUNITY_SCREEN}`
            }
            Share.share(shareOptions)
              .then(res => {
                // debugLog(res);
              })
              // eslint-disable-next-line n/handle-callback-err
              .catch(err => {
                // debugLog(err);
              })
          }}
          style={{
            backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            marginVertical: 30,
            marginHorizontal: 20
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: ColorTheme.TEXT_YELLOW_COLOR
            }}>
            Invite Members
          </Text>
          <SvgIcon.ShareIcon color={ColorTheme.TEXT_YELLOW_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
