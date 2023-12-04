import { Dimensions, StyleSheet } from 'react-native'
import { ColorTheme, ScreenDimensions } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  subContainer: {
    backgroundColor: '#ffffff',
    width: ScreenDimensions.width,
    marginVertical: 10,
    borderRadius: 10
  },
  textContainer: {
    marginHorizontal: 10
  },
  containerFirst: {
    paddingBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  innerFirstContainer: {
    flex: 0.5,
    flexDirection: 'row'
  },
  innerSecondContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  video: {
    height: 440,
    width: '100%'
  },
  profileImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
  profileImageStyleSmall: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    backgroundColor: ColorTheme.DIVIDER_BACKGROUND
  },
  profileImageStyleDot: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8
  },
  bottomFlatListWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  alignEndStyle: {
    borderRadius: 20,
    borderColor: '#000',
    padding: 4,
    borderWidth: 0.1,
    marginLeft: 30
  },
  postImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageThreeDotContainer: {
    width: 10,
    height: 20,
    overflow: 'hidden'
  },
  bottomPostImageContainer: {
    width: 13,
    marginRight: 10,
    height: 13,
    overflow: 'hidden'
  },
  imagePostContainer: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
    backgroundColor: ColorTheme.DIVIDER_BACKGROUND
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  },
  simpleTextStyle: {
    fontSize: 11,
    fontWeight: '400',
    color: ColorTheme.BLACK
  },
  boldTextStyle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000000'
  },
  headingTextContainer: {
    marginVertical: 10,
    paddingHorizontal: 20
  }
})
export default style
