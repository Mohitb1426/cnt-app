import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  addImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    backgroundColor: ColorTheme.DIVIDER_BACKGROUND
  },
  addStarImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  },
  starImageContainer: {
    width: 16,
    height: 16,
    overflow: 'hidden'
  },
  customButtonCustomStyle: {
    minHeight: 0,
    height: 25,
    width: 80,
    borderRadius: 5
  },
  mainTextStyle: {
    fontSize: 14,
    color: ColorTheme.WHITE,
    fontWeight: '700'
  },
  subTextStyle: {
    fontSize: 12,
    color: ColorTheme.WHITE,
    fontWeight: '400'
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textWrapper: { flexDirection: 'column', marginLeft: 5 },
  mainContainer: { width: '100%', paddingHorizontal: 20 },
  subDisTextStyle: {
    fontSize: 10,
    color: ColorTheme.WHITE,
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 5
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardTextStyle: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 5
  },
  borderStyle: {
    // marginLeft: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 0.4,
    borderColor: '#ffffff',
    backgroundColor: '#085c54',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default style
