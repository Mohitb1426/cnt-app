import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  customButtonCustomStyle: {
    minHeight: 25,
    width: 77,
    borderRadius: 30,
    backgroundColor: '#085c54'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000'
  },
  textSubContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textMainContainer: {
    flexDirection: 'column',
    marginHorizontal: 20
  },
  subTextStyle: {
    // marginLeft: 5,
    fontSize: 12
  },
  timeTextStyle: {
    fontSize: 12
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    borderRadius: 10
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: 'contain'
  },
  addImageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden'
  }
})
export default style
