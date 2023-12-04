import { StyleSheet } from 'react-native'
import Fonts from '../../common/Fonts'
import { ScreenDimensions } from '../../common/AppStyles'

const style = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: 13,
    justifyContent: 'center',
    width: 13
  },
  postImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  video: {
    height: 440,
    width: '100%'
  },
  image: {
    height: 350,
    width: ScreenDimensions.width
  },
  imageProfile: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  imageWrapper: {
    marginHorizontal: 5,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  container: {
    paddingHorizontal: 20
  },
  backImageStyle: {
    height: 20,
    width: 40
  },
  SvgIconStyle: {
    marginHorizontal: 10
  },
  headerText: {
    color: '#000',
    fontFamily: Fonts.INTER_SEMI_BOLD,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 41,
    paddingLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerView: {
    flexDirection: 'row'
  },
  imageLogoWrapper: {
    width: 130,
    height: 40,
    resizeMode: 'contain',
    marginLeft: 20
  }
})
export default style
