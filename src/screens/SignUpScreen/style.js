import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  addImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  checkBoxWrapper: {
    flexDirection: 'row',
    width: 300,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02
  },
  mainContainer: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondFlex: {
    flexDirection: 'row'
  },
  loginSubTextStyle: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorTheme.BLACK
  },
  cameraIconStyle: {
    marginBottom: 10
  },
  loginSubTextColorStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: ColorTheme.TEXT_YELLOW_COLOR
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: ColorTheme.BLACK
  },
  customButtonCustomStyle: {
    marginVertical: 20,
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  errorMessage: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: 10
  },
  textStyle: {
    width: 300,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    borderRadius: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    marginVertical: 20,
    backgroundColor: ColorTheme.WHITE,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
})
export default style
