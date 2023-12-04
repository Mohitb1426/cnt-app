import React from 'react'
import { View, StatusBar, TextInput, Text, ScrollView } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import styles from './style'
import SvgIcon from '../../common/SvgIcon'
import Images from '../../common/Images'
import PeopleCard from '../../components/PeopleCard'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

export default function SearchScreen() {
  const navigation = useNavigation()
  const dummyFriendRequestData = [
    {
      id: '1',
      image: Images.DUMMY_POST_IMAGE,
      name: 'Leo Messi',
      mutualFriends: '10 mutual friends'
    },
    {
      id: '2',
      image: Images.DUMMY_POST_IMAGE,
      name: 'Leo Messi',
      mutualFriends: '10 mutual friends'
    },
    {
      id: '3',
      image: Images.DUMMY_POST_IMAGE,
      name: 'Leo Messi',
      mutualFriends: '10 mutual friends'
    }
  ]
  return (
    <View style={styles.mainContainer}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#FFFFFF', '#FFFFFF']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <HeaderComponent
        goBack={() => navigation.goBack()}
        isWhiteIcon="#075e54"
        title="Search"
        isTextColor={ColorTheme.BLACK}
        isColor={ColorTheme.WHITE}
      />
      <View >
        <ScrollView showsVerticalScrollIndicator={false} style={styles.subContainer} stickyHeaderIndices={[0]}>
          <View>
            <View style={styles.searchWrapper}>
              <SvgIcon.SearchIcon />
              <TextInput
                style={styles.textStyle}
                placeholder='Search'
              />
            </View>
          </View>
          <View style={styles.secondContainer}>
            <Text style={styles.textStyleTag}>#tags</Text>
            <View style={styles.secondSubContainer}>
              <Text style={styles.textStyleSubTag}>#Superman</Text>
              <View style={styles.horizontalDivider} />
              <Text style={styles.textStyleSubTag}>#Batman</Text>
              <View style={styles.horizontalDivider} />
              <Text style={styles.textStyleSubTag}>#Robin</Text>
            </View>
          </View>
          <View>
            <Text style={styles.textStyleTag}>Peoples</Text>
            <View style={styles.thirdSubContainer}>
              {dummyFriendRequestData?.map((items) => {
                return (
                  <PeopleCard key={items?.id} {...items} />
                )
              })}
            </View>
          </View>
          <View style={styles.marginContainer}>
            <Text style={styles.textStyleTag}>Groups</Text>
            <View style={styles.thirdSubContainer}>
              {dummyFriendRequestData?.map((items) => {
                return (
                  <PeopleCard key={items?.id} {...items} />
                )
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}
