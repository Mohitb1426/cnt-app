import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const styles = StyleSheet.create({
  buttonText: {
    color: ColorTheme.WHITE,
    fontSize: 16
  },
  container: {
    alignItems: 'center',
    borderRadius: 12,
    elevation: 6,
    height: 48,
    justifyContent: 'center',
    marginBottom: 3,
    shadowOffset: {
      width: -2,
      height: 4
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    width: 291
  },
  imageContainer: {
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    width: 48
  },
  imageStyle: {
    height: '40%',
    marginLeft: 15,
    width: '40%'
  },
  // eslint-disable-next-line react-native/no-color-literals
  iosContainer: {
    alignItems: 'center',
    borderColor: 'rgba(213,218,222, 1)',
    borderRadius: 12,
    borderWidth: 0.2,
    elevation: 3,
    height: 48,
    justifyContent: 'center',
    marginBottom: 3,
    shadowColor: 'rgba(213,218,222, 1)',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    width: 291
  },
  mainViewStyle: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default styles
