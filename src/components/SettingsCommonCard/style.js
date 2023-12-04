import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  imageStyle: {
    height: 44,
    width: 44,
    resizeMode: 'cover',
    borderRadius: 22
  },
  mainContainer: {
    marginHorizontal: 20
  },
  tagWrapper: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginBottom: 15
  },
  tagTextStyle: {
    color: ColorTheme.WHITE,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: '600'
  },
  lastContainerText: {
    marginRight: 10
  },
  lastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tagSmallTextStyle: {
    color: ColorTheme.BLACK,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10
  },
  smallImageStyle: {
    height: 14,
    width: 14,
    resizeMode: 'cover'
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15
  },
  subRoundContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 1
  }
})
export default styles
