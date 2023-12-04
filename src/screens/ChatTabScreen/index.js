/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import SvgIcon from '../../common/SvgIcon'
import MessagesScreen from '../MessagesScreen'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import LinearGradient from 'react-native-linear-gradient'
import ComingSoonIcon from '../../assets/Icons/ComingSoonIcon/ComingSoonIcon'
// import GroupAndCommunityScreen from '../GroupAndCommunityScreen'
import { CustomModal } from '../../components/CustomModal'

const ChatTabScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('chats')
  const [showUpcomingPopUp, setShowUpcomingPopUp] = useState(false)

  const renderContent = () => {
    if (activeTab === 'chats') {
      return <MessagesScreen />
    } else if (activeTab === 'status') {
      return <ComingSoonIcon />
    } else if (activeTab === 'calls') {
      return <ComingSoonIcon />
    } else if (activeTab === 'group') {
      return <ComingSoonIcon />
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        isWhiteIcon={'#FFB804'}
        goBack={() => navigation.goBack()}
        title="Messages"
        isTextColor={ColorTheme.WHITE}
        isNotificationIcon={true}
        isMenuIcon={true}
        isYellowIcon={true}
      />
      <LinearGradient
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'group' && styles.activeTab]}
            onPress={() => setShowUpcomingPopUp(true)}
          >
            <SvgIcon.gacIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'chats' && styles.activeTab]}
            onPress={() => setActiveTab('chats')}
          >
            <Text style={styles.tabText}>Chats</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'status' && styles.activeTab]}
            onPress={() => setShowUpcomingPopUp(true)}
          >
            <Text style={styles.tabText}>Status</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'calls' && styles.activeTab]}
            onPress={() => setShowUpcomingPopUp(true)}
          >
            <Text style={styles.tabText}>Calls</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.content}>
        {renderContent()}
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 2,
    paddingTop: 0
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: 'white'
  },
  tabText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '400'
  },
  content: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ChatTabScreen
