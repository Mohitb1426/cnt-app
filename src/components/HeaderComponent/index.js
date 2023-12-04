/* eslint-disable react/prop-types */
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import SvgIcon from '../../common/SvgIcon'
import { Routes } from '../../routes/Routes'
import { useNavigation } from '@react-navigation/native'
import { ColorTheme } from '../../common/AppStyles'
import LinearGradient from 'react-native-linear-gradient'

export function HeaderComponent ({
  title,
  isColor,
  isNotificationIcon = false,
  isMenuIcon = false,
  goBack,
  isTextColor,
  isYellowIcon,
  isWhiteIcon = false,
  isCreateIcon,
  isSearchIcon = false
}) {
  const navigation = useNavigation()
  return (
        <LinearGradient
            colors={[isColor ?? '#075E54', isColor ?? '#128C7E']}
            start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
            <View style={[style.container]}>
                <View style={style.headerView}>
                    <TouchableOpacity activeOpacity={0.5} onPress={goBack} style={style.backButton}>
                        <SvgIcon.LeftArrow color={isWhiteIcon || (isYellowIcon ? ColorTheme.TEXT_YELLOW_COLOR : '#1C2340')} />
                    </TouchableOpacity>
                    <View style={style.headerTextStyle}>
                        <Text numberOfLines={1} style={[style.headerText, { color: isTextColor ?? '#000000' }]}>{title}</Text>
                    </View>
                    {isCreateIcon &&
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.NOTIFICATION_SCREEN)} style={style.SvgIconStyle}>
                            <SvgIcon.CreatePostIcon isWhiteIcon={isWhiteIcon} />
                        </TouchableOpacity>}
                    {isSearchIcon &&
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.FRIENDS_SCREEN)} style={style.SvgIconStyle}>
                            <SvgIcon.SearchIcon color={isWhiteIcon ?? '#FFFFFF'} />
                        </TouchableOpacity>}
                    {/* {isNotificationIcon &&
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.NOTIFICATION_SCREEN)} style={style.SvgIconStyle}>
                            <SvgIcon.NotificationIcon isWhiteIcon={isWhiteIcon} />
                        </TouchableOpacity>}
                    {isMenuIcon &&
                        <TouchableOpacity onPress={() => navigation.navigate(Routes.SETTINGS_SCREEN)} style={style.SvgIconStyle}>
                            <SvgIcon.ThreeDotIcon color={isWhiteIcon ?? '#FFFFFF'} />
                        </TouchableOpacity>
                    } */}
                </View>
            </View>
        </LinearGradient>
  )
}
