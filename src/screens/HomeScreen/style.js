import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  loadingImageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  addImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 20,
    overflow: 'hidden'
  },
  textStyle: {
    fontSize: 11,
    fontWeight: '400'
  },
  flatListItems: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  flatListContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  flatSecondListContainer: {
    flex: 1

  }
})
export default style
