import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  imageStyle: {
    height: 44,
    width: 44,
    resizeMode: 'cover',
    borderRadius: 22
  },
  tagWrapper: {
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0,
    height: 60,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  tagTextStyle: {
    color: ColorTheme.WHITE,
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '600'
  },
  tagSmallTextStyle: {
    color: ColorTheme.BLACK,
    fontSize: 12,
    fontWeight: '400'
  },
  smallImageStyle: {
    height: 14,
    width: 14,
    resizeMode: 'cover'
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  subRoundContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 10,
    width: 50,
    paddingVertical: 1
  }
})
export default styles
