/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import ChatHeaderComponent from './components/ChatHeaderComponent'
import ChatBubble from './components/ChatFooterComponent'
import SvgIcon from '../../common/SvgIcon'
import { ColorTheme } from '../../common/AppStyles'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch, useSelector } from 'react-redux'
import { getChatDataByRoom, resetChatData } from './actionChatScreen'
import AsyncKeys from '../../common/AsyncKeys'
import StorageUtils from '../../common/StorageUtils'
import { CustomModal } from '../../components/CustomModal'
// import socket from '../../utilities/Socket'

const ChatScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const [serverState, setServerState] = useState('Loading...')
  const [serverMessages, setServerMessages] = useState([])
  const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)

  const [inputText, setInputText] = useState('')
  const [friendOnline, setFriendOnline] = useState(false)
  const [showUpcomingPopUp, setShowUpcomingPopUp] = useState(false)

  const { chatRoomData, chatRoomDetails } = useSelector(state => state.reducerChatScreen)
  const ws = useRef(null)

  const handleSend = () => {
    const payload = {
      user: userID,
      message: inputText,
      action: 'message',
      roomId: chatRoomDetails?.roomId
    }
    console.log(payload, 'payload')
    if (ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(JSON.stringify(payload))
    } else {
      console.log('WebSocket is not in the OPEN state')
    }
    setInputText('')
  }

  useEffect(() => {
    if (chatRoomDetails?.roomId) {
      dispatch(getChatDataByRoom(chatRoomDetails?.roomId))
    }
  }, [chatRoomDetails?.roomId])

  useEffect(() => {
    if (chatRoomData?.length > 0) {
      setServerMessages(chatRoomData)
    }
  }, [chatRoomData])

  console.log(serverState, 'serverState')

  useEffect(() => {
    const url = `ws://16.171.136.14:8000/ws/users/${userID}/api/v1/chat/`
    ws.current = new WebSocket(url)
    ws.current.onopen = () => {
      setServerState('Connected to the server')
    }
    ws.current.onclose = e => {
      setServerState('Disconnected. Check internet or server.')
    }
    ws.current.onerror = e => {
      setServerState(e.message)
    }
    ws.current.onmessage = e => {
      const friendId = chatRoomDetails?.chatuser?.id
      const response = JSON.parse(e.data)
      console.log('onMessage', friendId, JSON.stringify(response))
      if (response?.userList?.includes(friendId)) {
        setFriendOnline(true)
      }
      if (!response?.message) {
        const payload = {
          user: userID,
          message: 'Socket Connected(Dev Test)',
          action: 'message',
          roomId: chatRoomDetails?.roomId
        }
        setServerMessages(prevMessages => [payload, ...prevMessages])
      } else {
        setServerMessages(prevMessages => [response, ...prevMessages])
      }
    }
    return () => {
      ws.current.close()
      dispatch(resetChatData())
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        style={{ height: StatusBar.currentHeight }}
        colors={['#075E54', '#128C7E']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1.3, y: 0 }}>
        <StatusBar
          animated
          backgroundColor={ColorTheme.WHITE}
          barStyle={'dark-content'}
        />
      </LinearGradient>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <ChatHeaderComponent friendOnline={friendOnline} chatData={chatRoomDetails} />
        </View>
        <FlatList
          data={serverMessages}
          keyExtractor={item => item?.timestamp?.toString()}
          renderItem={({ item }) => <ChatBubble {...item} />}
          contentContainerStyle={styles.chatContainer}
          inverted
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.footer}>
          <View style={styles.footerSecond}>
            <SvgIcon.MiceIcon />
            <TextInput
              style={styles.textInput}
              placeholder="Type a message..."
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSend}
              returnKeyType="send"
            />
          </View>
          <TouchableOpacity onPress={() => setShowUpcomingPopUp(true)}>
            <SvgIcon.AddIcon color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSend}>
            <SvgIcon.SendIcon color={ColorTheme.PRIMARY_BACKGROUND_COLOR_01} />
          </TouchableOpacity>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  chatContainer: {
    padding: 8
  },
  chatBubbleContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-end'
  },
  sentContainer: {
    justifyContent: 'flex-end'
  },
  receivedContainer: {
    justifyContent: 'flex-start'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8
  },
  chatBubble: {
    borderRadius: 8,
    padding: 8,
    maxWidth: '75%',
    backgroundColor: '#DCF8C5'
  },
  sentBubble: {
    alignSelf: 'flex-end'
  },
  receivedBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  messageText: {
    fontSize: 16,
    color: '#000000'
  },
  footerSecond: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footer: {
    borderTopWidth: 0.5,
    borderColor: '#CCCCCC',
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    marginLeft: 10,
    width: '65%'
  }
})

export default ChatScreen
