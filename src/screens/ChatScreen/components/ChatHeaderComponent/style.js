import { StyleSheet } from 'react-native'
import Fonts from '../../../../common/Fonts'

const style = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: 13,
    justifyContent: 'center',
    width: 13
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#4CD964',
    marginLeft: 5
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerTextStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    width: '100%'
  },
  headerView: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    width: '100%'
  },
  imageStyle: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    borderRadius: 15,
    marginLeft: 20
  }
})
export default style
