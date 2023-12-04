/* eslint-disable react/prop-types */
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import Images from '../../common/Images'
import SvgIcon from '../../common/SvgIcon'
import { Routes } from '../../routes/Routes'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

export default function MenuHeader
  ({ icon, isSearchIcon, notificationUnreadCount }) {
  const navigation = useNavigation()

  const openDrawer = () => {
    return navigation.openDrawer()
  }
  return (
    <LinearGradient
      colors={['#075E54', '#128C7E']}
      start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
      <View style={styles.mainWrapper}>
        <View style={styles.firstContainer}>
          <TouchableOpacity style={{ paddingVertical: 20, paddingHorizontal: 10 }} onPress={openDrawer}>
            <SvgIcon.MenuBarIcon />
          </TouchableOpacity>
          {icon
            ? <View style={styles.iconStyle}>
              {icon}
            </View>
            : <Image source={Images.LOGO_ICON_IMAGE} style={styles.imageLogoWrapper} />
          }
        </View>
        <View style={styles.secondContainer}>
          {isSearchIcon
            ? <TouchableOpacity onPress={() => navigation.navigate(Routes.FRIENDS_SCREEN)} style={styles.SvgIconStyle}>
              <Image source={Images.YELLOW_SEARCH} style={styles.profileImageStyle} />
            </TouchableOpacity>
            : <TouchableOpacity onPress={() => navigation.navigate(Routes.CREATE_POST_SCREEN)} style={styles.SvgIconStyle}>
              <SvgIcon.CreatePostIcon isWhiteIcon={'#FFB804'} />
            </TouchableOpacity>}
          <TouchableOpacity onPress={() => navigation.navigate(Routes.NOTIFICATION_SCREEN)} style={styles.SvgIconStyle}>
            <SvgIcon.NotificationIcon isWhiteIcon={'#FFB804'} />
            {notificationUnreadCount > 0
              ? <Text style={{
                position: 'absolute',
                textAlign: 'center',
                fontSize: 7,
                color: '#FFF',
                fontWeight: '800',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                height: 10,
                width: 10,
                borderRadius: 5,
                right: 0,
                top: 2,
                backgroundColor: 'red'
              }}>{notificationUnreadCount}</Text>
              : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Routes.CHAT_TAB_SCREEN)} style={styles.SvgIconStyle}>
            <SvgIcon.ChatIcon />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>

  )
}
