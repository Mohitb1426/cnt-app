import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02 },
  secondContainer: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  errorMessage: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: 20
  },
  firstFlex: {
    marginTop: 50
  },
  coverImageStyle: {
    alignItems: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain'
  },
  input: {
    marginVertical: 10,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    width: 300,
    borderRadius: 25,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  customButtonCustomStyle: {
    marginVertical: 10,
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  phoneInputTextStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 20,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02
  },
  thirdContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 15,
    backgroundColor: ColorTheme.WHITE,
    paddingVertical: 20
  },
  secondFlex: {
    flexDirection: 'row'
  },
  textStyle: {
    width: '100%',
    marginLeft: 8
  },
  orStyle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: ColorTheme.BLACK
  },
  loginTextStyle: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center',
    color: ColorTheme.BLACK
  },
  mailIconStyle: {
    resizeMode: 'contain',
    height: 35,
    width: 35
  },
  emailViewContainer: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    width: 300,
    borderRadius: 25,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  dividerStyle: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_03,
    height: 1.5,
    width: '40%',
    marginHorizontal: 10
  },
  dividerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  loginSubTextStyle: {
    marginVertical: 5,
    fontSize: 17,
    color: ColorTheme.BLACK,
    fontWeight: '400',
    textAlign: 'center'
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
  }
})
export default styles
