/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import SettingsCard from '../../components/SettingsCard'
import SettingsCommonCard from '../../components/SettingsCommonCard'
import SvgIcon from '../../common/SvgIcon'
import { Routes } from '../../routes/Routes'
import StorageUtils from '../../common/StorageUtils'
import { useDispatch, useSelector } from 'react-redux'
import { onDeleteUser, onDeleteUserSuccess, onLogout } from '../../routes/Drawer/DrawerMiddleMenu/actionDrawer'
import { isUserSignedAction } from '../IntroScreen/actionIntroScreen'
import LinearGradient from 'react-native-linear-gradient'
import Images from '../../common/Images'
import { CustomModal } from '../../components/CustomModal'

export default function SettingsScreen({ navigation }) {
  const dispatch = useDispatch()
  const [showUpcomingPopUp, setShowUpcomingPopUp] = useState(false)
  const { isDeleteUser } = useSelector((state) => state.reducerDrawer)
  const historyArray = [
    {
      id: '11',
      icon: null,
      name: 'Star Added',
      iconRight: '25',
      value: '01/02/2023',
      onClick: () => navigation.navigate(Routes.ADD_STAR_SCREEN)
    },
    {
      id: '12',
      icon: null,
      name: 'Star Redeed',
      iconRight: '25',
      value: '01/02/2023',
      onClick: () => navigation.navigate(Routes.REDEEM_STAR_SCREEN)
    },
    {
      id: '13',
      icon: null,
      name: 'Star send to @limia',
      iconRight: '25',
      value: '01/02/2023',
      onClick: () => setShowUpcomingPopUp(true)
    }
  ]
  const accountsArray = [
    {
      id: '1',
      icon: Images.SETTING_GROUP_ICON,
      name: 'Group / Community',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => navigation.navigate(Routes.GROUP_AND_COMMUNITY_SCREEN)
    },
    {
      id: '2',
      icon: Images.FRIENDS_GROUP_ICON,
      name: 'Friends',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => navigation.navigate(Routes.FRIENDS_SCREEN)
    },
    {
      id: '3',
      icon: Images.CHANGE_PASS_GROUP_ICON,
      name: 'Change Password',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => navigation.navigate(Routes.CHANGE_PASSWORD_SCREEN)
    },
    {
      id: '4',
      icon: Images.NOTIFICATION_GROUP_ICON,
      name: 'Notification',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => navigation.navigate(Routes.NOTIFICATION_SCREEN)

    },
    {
      id: '5',
      icon: Images.PRIVACY_GROUP_ICON,
      name: 'Privacy Settings',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => setShowUpcomingPopUp(true)
    },
    {
      id: '6',
      icon: Images.FRIENDS_GROUP_ICON,
      onClick: () => setShowUpcomingPopUp(true),
      name: 'Payment',
      iconRight: <SvgIcon.ThreeDotIcon />
    },
    {
      id: '6',
      icon: Images.SIGN_OUT_GROUP_ICON,
      name: 'Sign Out',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => {
        dispatch(onLogout({ navigation }))
        dispatch(isUserSignedAction(false))
        StorageUtils.flush()
        navigation.navigate('RouteGuest', { screen: Routes.SCREEN_LOGIN })
      }
    },
    {
      id: '7',
      icon: Images.SETTING_GROUP_ICON,
      name: 'Buy Stars',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => navigation.navigate(Routes.ADD_STAR_SCREEN)
    },
    {
      id: '8',
      icon: Images.FRIENDS_GROUP_ICON,
      name: 'Redeem Stars',
      iconRight: <SvgIcon.ThreeDotIcon />,
      value: 0,
      onClick: () => navigation.navigate(Routes.REDEEM_STAR_SCREEN)

    },
    {
      id: '9',
      icon: Images.SIGN_OUT_GROUP_ICON,
      name: 'Delete Profile',
      iconRight: <SvgIcon.ThreeDotIcon />,
      onClick: () => {
        dispatch(onDeleteUser({ navigation }))
      }
    }
  ]

  useEffect(() => {
    if (isDeleteUser) {
      dispatch(isUserSignedAction(false))
      StorageUtils.flush()
      navigation.navigate('RouteGuest', { screen: Routes.SCREEN_LOGIN })
      dispatch(onDeleteUserSuccess(false))
    }
  }, [isDeleteUser])

  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Settings"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isWhiteIcon={'#FFB804'}

      />
      <ScrollView showsVerticalScrollIndicator
        nestedScrollEnabled
      >
        <SettingsCard />
        <SettingsCommonCard text={'Accounts'} itemArray={accountsArray} />
        <SettingsCommonCard text={'History'} itemArray={historyArray} />
      </ScrollView>
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
