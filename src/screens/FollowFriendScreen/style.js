import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorTheme.WHITE
  },
  horizontalDivideStyle: {
    height: 2,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    marginBottom: 10,
    marginTop: 5
  },
  customButtonCustomStyle: {
    minHeight: 20,
    height: 30,
    width: 100,
    marginLeft: 10,
    borderRadius: 8,
    borderColor: ColorTheme.TEXT_YELLOW_COLOR
  },
  buttonTextStyle: {
    fontSize: 14,
    fontWeight: '400'
  },
  rowOnlyStyle: {
    flexDirection: 'row'
  },
  imageStyle: {
    height: 90,
    width: 72,
    resizeMode: 'cover',
    borderRadius: 8
  },
  tagStyles: {
    flexDirection: 'row',
    marginTop: 35
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  textBoldStyle: {
    fontSize: 16,
    fontWeight: '600',
    color: ColorTheme.BLACK,
    marginRight: 5
  },
  textSemiBoldStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: ColorTheme.BLACK
  },
  secondContainer: {
    // marginHorizontal: 20
  }
})
export default styles
