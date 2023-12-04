import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import SvgIcon from '../../../common/SvgIcon'
import { ColorTheme } from '../../../common/AppStyles'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../Routes'
import { isUserSignedAction } from '../../../screens/IntroScreen/actionIntroScreen'
import { useDispatch, useSelector } from 'react-redux'
import StorageUtils from '../../../common/StorageUtils'
import { onLogout } from './actionDrawer'
import { CustomModal } from '../../../components/CustomModal'

export default function index() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [showUpcomingPopUp, setShowUpcomingPopUp] = useState(false)
  const { isUserSigned } = useSelector((state) => state.reducerIntroScreen)

  const navigateTo = (typeId) => {
    switch (typeId) {
      case 1:
        navigation.navigate(Routes.PROFILE_SCREEN)
        break
      case 2:
        setShowUpcomingPopUp(true)
        break
      case 3:
        navigation.navigate(Routes.ADD_STAR_SCREEN)
        break
      case 4:
        navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
        break
      case 5:
        navigation.navigate(Routes.GROUP_AND_COMMUNITY_SCREEN)
        break
      case 6:
        navigation.navigate(Routes.NOTIFICATION_SCREEN)
        break
      case 7:
        navigation.navigate(Routes.CHAT_TAB_SCREEN)
        break
      case 8:
        navigation.navigate(Routes.SETTINGS_SCREEN)
        break
      case 9:
        dispatch(onLogout({ navigation }))
        StorageUtils.flush()
        dispatch(isUserSignedAction(false))
        navigation.navigate('RouteGuest', { screen: Routes.SCREEN_INTRO })
        break
      default:
        return null
    }
  }
  useEffect(() => {
    if (!isUserSigned) {
      navigation.navigate('RouteGuest', { screen: Routes.SCREEN_INTRO })
    }
  }, [isUserSigned])

  const menuList = [
    {
      menuIcon: <SvgIcon.DrawerProfileIcon />,
      title: 'My Profile',
      typeId: 1
    },
    {
      menuIcon: <SvgIcon.DrawerPhotosIcon />,
      title: 'Photos',
      typeId: 2
    },
    {
      menuIcon: <SvgIcon.DrawerStarIcon />,
      title: 'Stars',
      typeId: 3
    },
    {
      menuIcon: <SvgIcon.DrawerMarketIcon />,
      title: 'Marketplace',
      typeId: 4
    },
    {
      menuIcon: <SvgIcon.DrawerGroupsIcon />,
      title: 'Groups & Community',
      typeId: 5
    },
    {
      menuIcon: <SvgIcon.DrawerNotificationIcon />,
      title: 'Notifications',
      typeId: 6
    },
    {
      menuIcon: <SvgIcon.DrawerMessageIcon />,
      title: 'Messages',
      typeId: 7
    },
    {
      menuIcon: <SvgIcon.DrawerSettingIcon />,
      title: 'Settings',
      typeId: 8
    },
    {
      menuIcon: <SvgIcon.DrawerLogoutIcon />,
      title: 'Logout',
      typeId: 9
    }
  ]
  return (
    <View style={styles.mainContainer}>
      <View style={{ paddingVertical: 70 }}>
        {menuList?.map((element, index) => {
          return (
            <View key={element?.typeId} style={{ marginVertical: 6 }}>
              <TouchableOpacity onPress={() => navigateTo(element?.typeId)} style={{ flexDirection: 'row', paddingHorizontal: 20 }}>
                {element?.menuIcon}
                <Text style={{ marginLeft: 10, color: ColorTheme.TEXT_YELLOW_COLOR }}>
                  {element?.title}</Text>
              </TouchableOpacity>
              <View style={{
                height: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,
                marginHorizontal: 18,
                backgroundColor: ColorTheme.DIVIDER_BACKGROUND
              }} />
            </View>
          )
        })}
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
