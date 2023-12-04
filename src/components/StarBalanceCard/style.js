import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 22
  },
  imageTwoStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    borderRadius: 22
  },
  firstContainerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 15
  },
  secondContainerText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  mainContainer: {
    // marginHorizontal: 20
  },
  tagWrapper: {
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    height: 80,
    position: 'relative'
  },
  secondTagWrapper: {
    marginTop: 90
  },
  firstTagContainer: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    height: 45,
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  secondTagContainer: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.WHITE,
    height: 200,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  smallImageStyle: {
    height: 10,
    width: 10,
    resizeMode: 'contain'
  },
  inputStyle: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: ColorTheme.BLACK,
    marginVertical: 15,
    paddingHorizontal: 10
  },
  subWrapper: {
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.WHITE,
    position: 'absolute',
    top: 20,
    right: 20,
    left: 20,
    height: 120,
    borderRadius: 10
  },
  tagTextStyle: {
    color: ColorTheme.BLACK,
    fontSize: 30,
    marginLeft: 5,
    fontWeight: '600'
  },
  tagTwoTextStyle: {
    color: ColorTheme.BLACK,
    fontSize: 24,
    marginLeft: 5,
    fontWeight: '600'
  },

  addStarText: {
    color: ColorTheme.WHITE,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 30
  },
  tagSmallTextStyle: {
    color: ColorTheme.BLACK,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10
  },
  tagSecondTextStyle: {
    fontSize: 10,
    fontWeight: '400'
  },
  customButtonCustomStyle: {
    minHeight: 20,
    height: 45,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  listWrap: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textCover: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: ColorTheme.WHITE,
    borderColor: ColorTheme.BLACK,
    paddingHorizontal: 10
  },
  buttonTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: ColorTheme.BLACK
  },
  balanceTextStyle: {
    fontSize: 10,
    fontWeight: '500',
    color: ColorTheme.BLACK
  },
  balanceTwoTextStyle: {
    fontSize: 10,
    fontWeight: '400',
    color: ColorTheme.BLACK
  }
})
export default styles
