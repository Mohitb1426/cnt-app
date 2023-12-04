import React from 'react'
import {
  StyleSheet, Text, TouchableOpacity, View, SafeAreaView, StatusBar
} from 'react-native'
import NetworkLogger from 'react-native-network-logger'
import { useNavigation } from '@react-navigation/native'
import { ColorTheme } from '../../AppStyles'
import LinearGradient from 'react-native-linear-gradient'

function ScreenNetworkLogger () {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient style={{ height: StatusBar.currentHeight }}
        colors={['#FFFFFF', '#FFFFFF']}
        start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={'transparent'} />
      </LinearGradient >
      <NetworkLogger />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={styles.textContainer}>
          <Text style={styles.backText}>Back</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backText: {
    color: ColorTheme.blue,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    flex: 1
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  }
})

ScreenNetworkLogger.propTypes = {

}

export default ScreenNetworkLogger
