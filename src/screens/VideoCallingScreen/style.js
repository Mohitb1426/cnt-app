import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  backgroundImage: (StatusBar) => {
    return {
      flex: 1,
      resizeMode: 'cover',
      paddingTop: StatusBar.currentHeight
    }
  },
  callerStyle: {
    flex: 0.8,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  addImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  callerImageContainer: {
    width: 110,
    height: 140,
    overflow: 'hidden',
    marginHorizontal: 20
  },
  imageContainer: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    marginHorizontal: 20
  },
  textWhiteStyle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#ffffff'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff'
  },
  textWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    flexDirection: 'row',
    marginTop: 15
  },
  mainContainer: {
    flex: 0.2,
    marginTop: 20,
    alignItems: 'center'
  }
})
export default style
