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
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
  },
  thirdContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: ColorTheme.WHITE,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  firstFlex: {
    marginTop: 50
  },
  secondFlex: {
    flexDirection: 'row',
    marginTop: 30
  },
  loginTextStyle: {
    fontSize: 22,
    fontWeight: '600',
    color: ColorTheme.BLACK
  },
  loginSubTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorTheme.BLACK,
  },
  loginTextSUbStyle: {
    color: ColorTheme.BLACK,
    fontSize: 16,
    fontWeight: '500'
  },
  loginSubTextColorStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: ColorTheme.TEXT_YELLOW_COLOR
  },
  textContainerStyle: {
    // backgroundColor: 'red',
  }
})
export default styles
