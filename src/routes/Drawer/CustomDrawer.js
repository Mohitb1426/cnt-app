import React from 'react'
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native'
import DrawerHeader from './DrawerHeader'
import { useDrawerStatus } from '@react-navigation/drawer'
import { ColorTheme } from '../../common/AppStyles'
import styles from './DrawerHeader/style'
import DrawerMiddleMenu from './DrawerMiddleMenu'
import SvgIcon from '../../common/SvgIcon'
import { useSelector } from 'react-redux'

function CustomDrawer () {
  const drawerStatus = useDrawerStatus()
  const { profileData } = useSelector((state) => state.reducerProfileScreen)

  const isDrawerOpen = () => {
    if (drawerStatus === 'open') {
      return true
    }
    return false
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isDrawerOpen()
        ? (
          <StatusBar animated backgroundColor={ColorTheme.WHITE}
            barStyle={'dark-content'} />
          )
        : null}
      <DrawerHeader />
      <View>
        <DrawerMiddleMenu />
      </View>
      <View style={styles.imagePosition}>
        <Image source={{ uri: profileData?.profile_pic }} style={styles.coverImageStyle} />
      </View>
      <View style={{
        position: 'absolute',
        left: 0,
        bottom: 0
      }}>
        <SvgIcon.BottomYellowCurveIcon />
      </View>
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 100,
        bottom: 10
      }}>
        <Text style={styles.footerTextStyle}>
          Version 1.0
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default CustomDrawer
