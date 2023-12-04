import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1
  },
  mainWrapper: {
    flex: 1,
    padding: 20
  },
  categoryStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: ColorTheme.TEXT_COLOR_LIGHT
  },
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  marketCardWrapper: {
    flex: 1,
    marginVertical: 20
  },
  buttonBackground: {
    flexDirection: 'row',
    borderRadius: 10,
    width: 142,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 10
  }
})
export default style
