import { StyleSheet } from 'react-native'
import { ColorTheme, ScreenDimensions } from '../../common/AppStyles'

const styles = StyleSheet.create({
  comingSoonButtonStyle: {
    alignSelf: 'center',
    borderRadius: 6,
    marginBottom: 40,
    width: ScreenDimensions.width - 40
  },
  comingSoonContainerStyle: {
    backgroundColor: 'red',
    flex: 1
  },
  comingSoonSvgContainerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

export default styles
