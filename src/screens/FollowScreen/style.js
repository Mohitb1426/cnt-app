import { StyleSheet } from 'react-native'
import { ColorTheme, ScreenDimensions } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_03
  },
  dividerStyle: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND,
    height: 35,
    width: 1,
    marginHorizontal: 10
  },
  dividerHorizontalStyle: {
    marginTop: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND,
    height: 2,
    marginHorizontal: 10
  },
  boldSimpleText: {
    fontSize: 16,
    color: ColorTheme.BLACK,
    fontWeight: '500'
  },
  imageFollowStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  imageContainer: {
    width: ScreenDimensions.width,
    height: 200,
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 11,
    fontWeight: '400'
  },
  flatListItems: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatListContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  flatSecondListContainer: {
    flex: 1

  },
  boldText: {
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    fontSize: 26,
    fontWeight: '900'
  },
  semiBoldText: {
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right'
  },
  semi2BoldText: {
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    fontSize: 12,
    fontWeight: '700'
  },
  simpleText: {
    color: ColorTheme.BLACK,
    fontSize: 12,
    fontWeight: '400'
  },
  customButtonCustomStyle: {
    minHeight: 25,
    height: 20,
    width: 70,
    borderRadius: 30,
    backgroundColor: '#085c54'
  },
  customButtonCustomDisableStyle: {
    minHeight: 25,
    height: 20,
    width: 70,
    borderRadius: 30,
    borderColor: ColorTheme.DIVIDER_BACKGROUND,
    backgroundColor: ColorTheme.DIVIDER_BACKGROUND
  }
})
export default style
