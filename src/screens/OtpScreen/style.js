import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02 },
  secondContainer: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    justifyContent: 'center',
    alignItems: 'center'
  },
  coverImageStyle: {
    alignItems: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain'
  },
  input: {
    marginVertical: 20,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    width: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02
  },
  customButtonCustomStyle: {
    marginVertical: 20,
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  firstFlex: {
    marginTop: 50
  },
  thirdContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: ColorTheme.WHITE,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  secondFlex: {
    flexDirection: 'row'
  },
  loginTextStyle: {
    fontSize: 20,
    fontWeight: '600',
    color: ColorTheme.BLACK
  },
  loginSubTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: ColorTheme.BLACK
  },
  otpView: { alignSelf: 'center', height: 100, width: '60%' },
  otpItem: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    borderRadius: 6,
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    height: 55,
    width: 50,
    margin: 5,
    borderWidth: 0,
    borderBottomWidth: 1.5
  },
  otpItemHigh: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    borderRadius: 6,
    color: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    height: 55,
    width: 50,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  loginSubTextTimerStyle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    color: ColorTheme.BLACK
  },
  textWrapper: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginSubTextColorStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: ColorTheme.TEXT_YELLOW_COLOR
  },
  textContainerStyle: {
    // backgroundColor: 'red',
  }
})
export default styles
