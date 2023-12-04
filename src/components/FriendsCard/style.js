import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marginRight: {
    marginRight: 5
  },
  boldText: {
    fontSize: 15,
    fontWeight: '700',
    color: ColorTheme.BLACK
  },
  textContainer: {
    marginLeft: 5
  },
  mainWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20
  },
  customButtonCustomStyle: {
    minHeight: 20,
    height: 26,
    width: 72,
    marginLeft: 10,
    borderRadius: 16,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  buttonTextStyle: {
    fontSize: 12,
    fontWeight: '400'
  }
})
export default styles
