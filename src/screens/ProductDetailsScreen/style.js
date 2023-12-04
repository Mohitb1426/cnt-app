import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1,
  },
  mainWrapper: {
    flex: 1
  },
  customButtonCustomStyle: {
    minHeight: 40,
    width: 120,
    borderRadius: 30,
    backgroundColor: '#085c54'
  },
  buttonCustomStyle: {
    justifyContent: 'center',
    marginVertical: 20,
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  }
})
export default style
