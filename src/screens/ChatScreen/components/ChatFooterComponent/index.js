/* eslint-disable react/prop-types */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ColorTheme } from '../../../../common/AppStyles'
import SvgIcon from '../../../../common/SvgIcon'
import moment from 'moment'
import StorageUtils from '../../../../common/StorageUtils'
import AsyncKeys from '../../../../common/AsyncKeys'

const ChatBubble = ({ message, timestamp, user }) => {
  const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)

  const isCurrentUser = Number(user) === Number(userID)

  const TimeAgoComponent = () => {
    const parsedDateTime = moment(timestamp)
    const formattedDateTime = parsedDateTime.format('hh:mm A')
    return formattedDateTime
  }
  return (
    <View style={styles.col}>
      <View style={[styles.bubbleContainer, isCurrentUser ? styles.bubbleContainerRight : styles.bubbleContainerLeft]}>
        <View style={[styles.bubble, isCurrentUser ? styles.bubbleRight : styles.bubbleLeft]}>
          <Text style={[styles.bubbleText, { color: isCurrentUser ? '#FFFFFF' : '#000000' }]}>{message}</Text>
        </View>
        <View style={[styles.triangle, isCurrentUser ? styles.triangleRight : styles.triangleLeft]} />
      </View>
      <View style={[styles.bubbleContainerText, isCurrentUser ? styles.bubbleContainerRight : styles.bubbleContainerLeft]}>
        <Text style={styles.textStyle}>{TimeAgoComponent()}</Text>
        {isCurrentUser ? <SvgIcon.GreenTickIcon /> : null}
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  col: { flexDirection: 'column' },
  textStyle: {
    fontSize: 12,
    marginRight: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#075e54',
    paddingVertical: 10,
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  footer: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 10,
    paddingHorizontal: 16
  },
  footerText: {
    color: '#666'
  },
  bubbleContainerText: {
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'flex-end',
    marginBottom: 8
  },
  bubbleContainer: {
    flexDirection: 'row',
    marginBottom: 2,
    marginHorizontal: 20,
    alignItems: 'flex-end'
  },
  bubbleContainerRight: {
    justifyContent: 'flex-end'
  },
  bubbleContainerLeft: {
    justifyContent: 'flex-start'
  },
  bubble: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    maxWidth: '80%'
  },
  bubbleRight: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderBottomRightRadius: 0
  },
  bubbleLeft: {
    backgroundColor: '#EFEFF4',
    borderBottomLeftRadius: 0,
    color: '#FFFFFF'
  },
  bubbleText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFFFFF'
  },
  triangle: {
    width: 16,
    height: 16,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 16,
    borderTopWidth: 16,
    borderRightColor: 'transparent',
    borderTopColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    transform: [{ rotate: '180deg' }],
    position: 'absolute',
    bottom: -10
  },
  triangleRight: {
    alignSelf: 'flex-end',
    transform: [{ rotate: '270deg' }],
    right: -10,
    bottom: 0
  },
  triangleLeft: {
    alignSelf: 'flex-end',
    left: -10,
    bottom: 0,
    transform: [{ rotate: '180deg' }],
    borderTopColor: '#EFEFF4'
  }
})

export default ChatBubble
