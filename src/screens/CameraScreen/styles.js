import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  banner: {
    bottom: 0,
    left: 0,
    opacity: 0.4,
    position: 'absolute'
  },
  bold: {
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: ColorTheme.WHITE,
    flex: 1
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold'
  },
  permissionText: {
    fontSize: 17
  },
  permissionsContainer: {

  },
  imageStyle: {
    height: 44,
    width: 44
  },
  welcome: {
    fontSize: 38,
    fontWeight: 'bold',
    maxWidth: '80%'
  },
  buttonContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  subContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  }
})

export default styles
