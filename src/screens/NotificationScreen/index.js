import React, { useEffect, useMemo } from 'react'
import { ActivityIndicator, FlatList, StatusBar, View } from 'react-native'
import styles from './style'
import { HeaderComponent } from '../../components/HeaderComponent'
import NotificationCard from '../../components/NotificationCard'
import { ColorTheme } from '../../common/AppStyles'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { getNotificationData, markAllAsRead } from './actionNotificationScreen'
import LinearGradient from 'react-native-linear-gradient'

export default function NotificationScreen () {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const { notificationData, isLoading } = useSelector((state) => state.reducerNotificationScreen)

  const renderNotification = ({ item }) => {
    return (
      <NotificationCard {...item} />
    )
  }

  useEffect(() => {
    dispatch(getNotificationData())
    dispatch(markAllAsRead())
  }, [])

  const notificationNotSeenData = useMemo(() => {
    return notificationData?.filter((ele) => ele?.is_view === 'no')
  }, [notificationData])

  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        goBack={() => navigation.goBack()}
        title="Notification"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
        isWhiteIcon={'#FFB804'}
      />
      <View style={{ flex: 1 }}>
        {isLoading
          ? <ActivityIndicator style={{
            marginVertical: 20, flex: 1, justifyContent: 'center', alignItems: 'center'
          }} size="large" color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
          : < FlatList
            data={notificationNotSeenData?.length > 0 ? notificationNotSeenData : []}
            renderItem={renderNotification}
            keyExtractor={(id) => id.toString()}
          />}
      </View>
    </View>
  )
}
