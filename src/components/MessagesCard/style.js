import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  customButtonCustomStyle: {
    minHeight: 25,
    width: 70,
    borderRadius: 30,
    backgroundColor: '#085c54'
  },
  textStyle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#085c54'
  },
  textSubContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textMainContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    width: '65%'
  },
  subTextStyle: {
    fontSize: 11,
    color: '#000000'
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
  },
  countContainerStyle: {
    backgroundColor: '#085c54',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
    borderRadius: 10,
    marginTop: 4
  },
  alightEnd: { alignItems: 'flex-end' },
  countStyle: {
    fontSize: 10,
    color: '#ffffff'
  }
})
export default style
