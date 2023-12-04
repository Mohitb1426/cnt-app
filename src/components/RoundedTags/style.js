import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  imageStyle: {
    height: 12,
    width: 12,
    resizeMode: 'contain'
  },
  tagWrapper: {
    marginRight: 10,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  tagTextStyle: {
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    fontSize: 12,
    marginLeft: 5
  }
})
export default styles
