import { StyleSheet } from 'react-native'
import Fonts from '../../common/Fonts'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 1
  },
  dotContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 8,
    justifyContent: 'center',
    paddingBottom: 20,
    width: '100%'
  },
  findGoalsHeadingStyle: {
    color: '#000',
    fontFamily: Fonts.ROBOTO,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    marginBottom: 16,
    marginTop: 8,
    paddingHorizontal: 10
  },
  imageStyle: {
    borderRadius: 8,
    resizeMode: 'contain',
    width: '100%'
  },
  carouselWrapper: {
    flex: 1, justifyContent: 'space-between'
  },
  itemContainer: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 0.5,
    justifyContent: 'center'
  },
  textWrapper: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'justify'
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color: '#FFB804'
  },
  descriptionStyle: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF'
  },
  bottomContainer: {
    flex: 0.5,
    backgroundColor: '#128C7E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    overflow: 'visible'
  },
  customButtonCustomStyle: {
    minHeight: 0,
    height: 45,
    width: 100,
    borderRadius: 20,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.WHITE,
    borderWidth: 0.3
  }
})

export default styles
