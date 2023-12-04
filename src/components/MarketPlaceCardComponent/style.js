import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 140,
    height: 150,
    resizeMode: 'cover',
    borderColor: '#000000',
    borderWidth: 1
  },
  bookmarkPositionStyle: {
    position: 'absolute',
    top: 25,
    left: 15
  },
  threeDotPositionStyle: {
    width: 20,
    position: 'absolute',
    top: 25,
    right: 0
  },
  threeDotPositionModalStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    width: 90,
    alignItems: 'flex-start',
    textAlign: 'left',
    position: 'absolute',
    top: 54,
    right: 15,
    backgroundColor: '#FFFFFF'
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  productNameStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: ColorTheme.TEXT_COLOR_LIGHT
  },
  subProductNameStyle: {
    fontSize: 12,
    fontWeight: 'normal',
    color: ColorTheme.TEXT_COLOR_DEFAULT
  }
})
export default styles
