import { StyleSheet, Dimensions } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1
  },
  subWrapper: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  loadingImageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  profileImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  videoContainer: {
    position: 'relative',
    height: Dimensions.get('window').height - 30,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    height: '100%',
    width: '100%'
  },
  addImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  textStyleReels: {
    color: ColorTheme.WHITE,
    fontSize: 10,
    fontWeight: '500'
  },
  svgIconMargin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  }
})
export default style
