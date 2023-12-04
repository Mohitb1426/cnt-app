import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    justifyContent: 'space-between',
    elevation: 5,
    height: 62,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: '100%'
  },

  profileImageStyle: {
    width: 23,
    height: 23,
    resizeMode: 'cover'
  },

  firstContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  iconStyle: {
    width: 130,
    paddingLeft: 25
  },
  SvgIconStyle: {
    marginHorizontal: 10
  },
  secondContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 0.5
  },
  imageWrapper: {
    marginHorizontal: 5,
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  imageLogoWrapper: {
    width: 130,
    height: 40,
    resizeMode: 'contain'
  }
})
export default style
