import React from 'react'
import { Dimensions } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ComponentBottomTabs from '../BottomTabs/ComponentBottomTabs'
import CustomDrawer from './CustomDrawer'
// import CustomDrawerContent from './CustomDrawer';

const Drawer = createDrawerNavigator()

const screenOption = {
  drawerType: 'front',
  drawerStatusBarAnimation: 'fade',
  headerShown: false,
  drawerStyle: {
    width: Dimensions.get('window').width / 1.21
  }
}

function ComponentDrawer () {
  const custom = (props) => {
    return <CustomDrawer props={props}/>
  }
  return (
    <Drawer.Navigator
      drawerContent={(props) => custom(props)}
      screenOptions={screenOption}
    >
      <Drawer.Screen name="BottomTabStack" component={ComponentBottomTabs} />
    </Drawer.Navigator>
  )
}
export default ComponentDrawer
