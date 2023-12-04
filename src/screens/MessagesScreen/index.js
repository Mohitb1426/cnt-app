import React, { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import styles from './style'
import MessagesCard from '../../components/MessagesCard'
import { useDispatch, useSelector } from 'react-redux'
import { getMessageData } from './actionMessageScreen'

export default function MessagesScreen () {
  // const userID = StorageUtils.getNumber(AsyncKeys.ASYNC_KEY_USER_ID, null)

  const { messagesListData } = useSelector((state) => state.reducerMessageScreen)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessageData())
  }, [])

  // const dummyData = [
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Jhon Smith',
  //     msg: 'i Love your post',
  //     time: '5 mins'
  //   },
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Anuska Sharma',
  //     msg: 'i Love your post, Try to find  some times for me',
  //     time: '10 mins',
  //     count: '5'
  //   },
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Virat Kohli',
  //     msg: 'okay',
  //     time: '10:05 PM',
  //     count: '7'
  //   },
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Jonaki Sina',
  //     msg: 'Love your post',
  //     time: '10 mins'
  //   },
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Jonaki Sina',
  //     msg: 'Comment on your post',
  //     time: '10 mins'
  //   },
  //   {
  //     image: Images.DUMMY_POST_IMAGE,
  //     name: 'Jonaki Sina',
  //     msg: 'Love your post',
  //     time: '10 mins'
  //   }
  // ]
  const renderNotification = ({ item }) => {
    return (
      <MessagesCard {...item} />
    )
  }
  return (
    <View style={styles.mainContainer}>
      <View>
        <FlatList
          data={messagesListData?.length > 0 ? messagesListData : []}
          renderItem={renderNotification}
        />
      </View>
    </View>
  )
}
