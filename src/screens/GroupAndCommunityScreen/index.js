import React, { useCallback } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import SvgIcon from '../../common/SvgIcon'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import { useDispatch, useSelector } from 'react-redux'
import { getGroupData } from './actionGroupAndCommunityScreen'
import LinearGradient from 'react-native-linear-gradient'

export default function GroupAndCommunityScreen () {
  const navigation = useNavigation()
  const { groupAndCommunityData, isLoading } = useSelector(
    state => state.reducerGroupAndCommunityScreen
  )
  const dispatch = useDispatch()

  useFocusEffect(
    useCallback(() => {
      dispatch(getGroupData())
    }, [])
  )
  if (isLoading) {
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
  const renderGroupAndCommunity = ({ item }) => {
    console.log(item, 'itemitemitem')
    return (
      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={
            (() => navigation.navigate(Routes.FOLLOW_SCREEN, { id: item?.id }))
          }
          style={{
            paddingEnd: 20,
            paddingStart: 10,
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={item?.image}
              style={{
                width: 40,
                height: 40,
                resizeMode: 'contain'
              }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '700',
                  color: ColorTheme.TEXT_GREEN_COLOR
                }}>
                {item?.name}
              </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: '900',
                    color: ColorTheme.BLACK
                  }}>{`${item?.member?.length}`}</Text>
                <Text
                  style={{
                    marginLeft: 3,
                    fontSize: 12,
                    fontWeight: '500',
                    color: ColorTheme.BLACK
                  }}>
                  {'Members'}
                </Text>
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                    fontWeight: '900',
                    color: ColorTheme.BLACK
                  }}>
                  {item?.posts ? `${item?.posts?.length}` : 0}
                </Text>
                <Text
                  style={{
                    marginLeft: 3,
                    fontSize: 12,
                    fontWeight: '500',
                    color: ColorTheme.BLACK
                  }}>
                  {'Posts'}
                </Text>
              </View>
            </View>
          </View>
          <SvgIcon.RightIcon />
        </TouchableOpacity>
        <View
          style={{
            alignSelf: 'center',
            width: '80%',
            height: 2,
            backgroundColor: ColorTheme.DIVIDER_BACKGROUND
          }}
        />
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
        <StatusBar
          translucent={true}
          barStyle={'light-content'}
          backgroundColor={'transparent'}
        />
      </LinearGradient>
      <HeaderComponent
        isWhiteIcon={'#FFB804'}
        goBack={() => navigation.goBack()}
        title="Group & Community"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.CREATE_NEW_GROUP_SCREEN)}
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          marginTop: 25,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: ColorTheme.WHITE
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <SvgIcon.DrawerGroupsIcon />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '700',
                color: ColorTheme.TEXT_GREEN_COLOR
              }}>
              Create New
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: ColorTheme.BLACK
              }}>
              Grow your community
            </Text>
          </View>
        </View>
        <SvgIcon.RightIcon />
      </TouchableOpacity>
      <View style={{ paddingBottom: 20 }}>
        <FlatList
          data={groupAndCommunityData}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={renderGroupAndCommunity}
          keyExtractor={({ id }) => id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  )
}
