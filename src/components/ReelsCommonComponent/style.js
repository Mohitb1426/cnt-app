import { Dimensions, StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  videoContainerMain: {
    flex: 1
  },
  profileImageStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'cover'
  },
  videoContainer: {
    flex: 1,
    height: Dimensions.get('window').height,
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
export default styles
