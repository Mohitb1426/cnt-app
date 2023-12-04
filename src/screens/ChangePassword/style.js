import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02
  },
  errorMessage: {
    alignSelf: 'flex-start',
    color: 'red',
    marginLeft: 10
  },
  secondContainer: {
    flexDirection: 'column',
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  firstFlex: {
    marginTop: 50
  },
  coverImageStyle: {
    alignItems: 'center',
    height: 200,
    width: 300,
    resizeMode: 'contain'
  },
  input: {
    marginVertical: 10,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    width: 300,
    borderRadius: 25,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02
  },
  customButtonCustomStyle: {
    marginTop: 30,
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: '#085c54'
  },
  secondaryContainer: {
  },
  thirdContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  secondFlex: {
    flexDirection: 'row'
  },
  loginTextStyle: {
    fontSize: 17,
    fontWeight: '400',
    textAlign: 'center'
  },
  mailIconStyle: {
    resizeMode: 'contain',
    height: 18,
    width: 18,
    position: 'absolute',
    right: 20
  },
  emailViewContainer: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative'
  },
  dividerStyle: {
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_02,
    height: 2,
    width: '40%',
    marginHorizontal: 10
  },
  dividerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  loginSubTextStyle: {
    fontSize: 17,
    color: ColorTheme.BLACK,
    fontWeight: '400',
    textAlign: 'center'
  },
  textStyle: {
    color: ColorTheme.BLACK,
    width: '100%'
  },
  loginSubTextTimerStyle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center'
  },
  textWrapper: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default styles
