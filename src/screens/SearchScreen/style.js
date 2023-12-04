import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_03
  },
  subContainer: {
    padding: 20
  },
  textStyle: {
    marginLeft: 6
  },
  searchWrapper: {
    backgroundColor: ColorTheme.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 25
  },
  secondContainer: {
    marginVertical: 20
  },
  marginContainer: {
    marginTop: 20
  },
  secondSubContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: ColorTheme.WHITE,
    borderRadius: 10
  },
  thirdSubContainer: {
    marginTop: 10
  },
  horizontalDivider: {
    width: '100%',
    height: 2,
    marginVertical: 6,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_03
  },
  textStyleTag: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ColorTheme.TEXT_COLOR_LIGHT
  },
  textStyleSubTag: {
    fontSize: 15,
    fontWeight: '500',
    color: ColorTheme.TEXT_COLOR_LIGHT
  }
})
export default styles
