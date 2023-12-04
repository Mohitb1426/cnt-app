import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorTheme.WHITE
  },
  footerTextStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: ColorTheme.WHITE
  },
  firstContainer: {
    backgroundColor: ColorTheme.WHITE,
    height: 150
  },
  thirdContainer: {
    top: 25,
    left: 20,
    width: '80%'
  },
  imagePosition: {
    position: 'absolute',
    left: 20,
    top: 65
  },
  boldStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: ColorTheme.BLACK
  },
  simpleWhileStyle: {
    fontSize: 13,
    fontWeight: '500',
    color: ColorTheme.TEXT_GREEN_COLOR
  },
  TextPosition: {
    position: 'absolute',
    left: 125,
    top: 90,
    flexDirection: 'row'
  },
  coverImageStyle: {
    height: 120,
    width: 90,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: ColorTheme.WHITE,
    backgroundColor: ColorTheme.DIVIDER_BACKGROUND,
    resizeMode: 'contain'
  },
  subFirstContainer: {
    flexDirection: 'row',
    left: 125,
    alignItems: 'center',
    marginTop: 10
  },
  subSecondContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customButtonCustomStyle: {
    minHeight: 20,
    height: 25,
    width: 70,
    marginLeft: 10,
    borderRadius: 30,
    backgroundColor: ColorTheme.TEXT_YELLOW_COLOR,
    borderColor: ColorTheme.TEXT_YELLOW_COLOR
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: ColorTheme.BLACK
  },
  buttonTextMainStyle: {
    fontSize: 12,
    fontWeight: '500',
    color: ColorTheme.WHITE
  },
  verticalDivider: {
    width: 1.5,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_03,
    height: 35,
    marginHorizontal: 15
  },
  simpleTextStyle: {
    fontSize: 12,
    fontWeight: '400'
  },
  descriptionStyle: {
    fontSize: 12,
    fontWeight: '300',
    color: ColorTheme.BLACK
  }
})
export default styles
