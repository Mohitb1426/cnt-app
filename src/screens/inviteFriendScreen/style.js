import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorTheme.WHITE
  },
  emailViewContainer: {
    marginTop: 20,
    flexDirection: 'row',
    borderWidth: 0.2,
    borderColor: ColorTheme.BLACK,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  followingView: {
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  followingText: {
    fontSize: 14,
    fontWeight: '600',
    color: ColorTheme.BLACK
  },
  followingSubText: {
    fontSize: 11,
    fontWeight: '600'
  },
  absoluteIcon: {
    position: 'absolute',
    right: 20
  },
  textStyle: {
    marginLeft: 5,
    color: ColorTheme.BLACK,
    width: '100%'
  }
})
export default styles
