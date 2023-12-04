import { StyleSheet } from 'react-native'
import Fonts from '../../common/Fonts'

const style = StyleSheet.create({
  backButton: {
    alignItems: 'center',
    height: 13,
    justifyContent: 'center',
    width: 13
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
    fontSize: 20,
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
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    width: '100%'
  }
})
export default style
