import { StyleSheet } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f9f9',
    flex: 1
  },
  customButtonCustomStyle: {
    marginVertical: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    minHeight: 45,
    width: 300,
    borderRadius: 30,
    backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
    borderColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01
  },
  dividerStyle: {
    height: 1,
    backgroundColor: '#f9f9f9'
  },
  bigTextStyle: {
    fontSize: 22,
    fontWeight: '600'
  },
  flatListItems: {
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
  subWrapper: {
    backgroundColor: '#ffffff',
    paddingVertical: 5
  },
  listContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10
  },
  textWrapper: { marginHorizontal: 10, marginTop: 30 },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#454545'
  },
  addImageStyle: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
    alignItems: 'center'
  },
  imageAddStyle: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    alignSelf: 'center'
  }
})
export default style
