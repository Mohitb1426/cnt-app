import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  Text,
  TextInput,
  View
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import FriendsCard from '../../components/FriendsCard'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../ProfileScreen/actionProfileScreen'

export default function FriendsScreen () {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('')
  const { friendList, searchLoading } = useSelector(
    state => state.reducerProfileScreen
  )

  useEffect(() => {
    dispatch(searchUser(searchValue))
  }, [searchValue])

  const showList = ({ item }) => {
    return <FriendsCard follow={true} key={item?.id} {...item} />
  }
  if (searchLoading && searchValue === '') {
    return (
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
    )
  }
  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar
          animated
          backgroundColor={ColorTheme.WHITE}
          barStyle={'dark-content'}
        />
      </LinearGradient>
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Friends"
        isTextColor={ColorTheme.BLACK}
        isColor="#FFFFFF"
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={false}
        isWhiteIcon={'#075E54'}
      />
      <View style={styles.emailViewContainer}>
        <SvgIcon.SearchIcon />
        <TextInput
          onChangeText={setSearchValue}
          value={searchValue}
          style={styles.textStyle}
          placeholder="Search"
        />
        <View style={styles.absoluteIcon}>
          <SvgIcon.MicIcon />
        </View>
      </View>
      <View style={styles.followingView}>
        <Text style={styles.followingText}>Friends</Text>
        <Text style={styles.followingSubText}>Show all</Text>
      </View>
      <View style={{ flex: 1, paddingBottom: 20 }}>
        <FlatList
          data={friendList}
          showsVerticalScrollIndicator={false}
          renderItem={showList}
          keyExtractor={({ id }) => id.toString()}
        />
      </View>
    </View>
  )
}
