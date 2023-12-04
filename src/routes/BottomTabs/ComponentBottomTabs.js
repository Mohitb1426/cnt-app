import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image, View, Text } from 'react-native'
import { bottomTabBarData } from './BottomTabData'
import { StyleComponentBottomTabs } from './StyleComponentBottomTabs'
import { LoginScreen } from '../../screens/LoginScreen'
import { ColorTheme } from '../../common/AppStyles'
import { ComingSoonScreen } from '../../screens/ComingSoonScreen'
import SvgIcon from '../../common/SvgIcon'

const Tab = createBottomTabNavigator()

function ComponentBottomTabs () {
  const styles = StyleComponentBottomTabs()
  const showIcon = id => {
    switch (id) {
      case 1:
        return <SvgIcon.sHomeIcon />
      case 2:
        return <SvgIcon.homeIcon />
      case 4:
        return <SvgIcon.tweetIcon />
      case 3:
        return <SvgIcon.sTweetIcon />
      case 5:
        return <SvgIcon.cameraIcon />
      case 7:
        return <SvgIcon.reelsIcon />
      case 6:
        return <SvgIcon.sReelsIcon />
      case 9:
        return <SvgIcon.profileIcon />
      case 8:
        return <SvgIcon.sProfileIcon />
      default:
        return null
    }
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const filteredItems = bottomTabBarData.filter(
            item => item.name === route.name
          )
          if (filteredItems.length > 0) {
            const iconName = focused
              ? filteredItems[0].iconSelected
              : filteredItems[0].icon
            const tabIcon = iconName
            return (
              <View>
                <View
                  style={[
                    styles.tabButtonContainer,
                    focused ? styles.activeTabContainer : null
                  ]}>
                    <View style={tabIcon == 5 ? styles.backgroundGreen : ''} >
                  {showIcon(tabIcon)}
                  </View>
                  {/* <Image resizeMode="contain" source={tabIcon} style={filteredItems[0].largeSize ? styles.iconCameraStyle : styles.iconStyle} /> */}
                </View>
              </View>
            )
          }
          return null
        },
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          height: 65,
          backgroundColor: ColorTheme.WHITE,
          borderTopColor: '#000000'
        },
        tabBarLabelStyle: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
      })}>
      {bottomTabBarData.map(item => {
        const { name, eTitle } = item
        return (
          <Tab.Screen
            key={item?.name}
            name={name}
            component={item?.component ?? ComingSoonScreen}
            options={{
              tabBarLabel: ({ focused }) => {
                if (!eTitle) {
                  return null
                }
                return (
                  <Text
                    style={[
                      styles.textLabel,
                      focused
                        ? { color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01 }
                        : { color: '#C8C7CC' }
                    ]}>
                    {eTitle}
                  </Text>
                )
              },
              header: () => null,
              tabBarActiveTintColor: '#000000',
              tabBarInactiveTintColor: '#000000'
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}
export default ComponentBottomTabs
