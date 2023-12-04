import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1
  },
  flatSecondListContainer: {
    flex: 1
  },
  addIconBackground: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  addIconPosition: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})
export default style
