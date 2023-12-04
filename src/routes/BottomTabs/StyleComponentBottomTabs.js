import { StyleSheet } from 'react-native'
import { useContext, useMemo } from 'react'
import { FontTheme, ColorTheme } from '../../common/AppStyles'

export const StyleComponentBottomTabs = () => {
  return useMemo(() => {
    return StyleSheet.create({
      activeTabContainer: {
        borderTopColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
        borderTopWidth: 2
      },
      buttonContainer: {
        alignItems: 'center',
        height: 70,
        justifyContent: 'center'
      },
      backgroundGreen: {
        backgroundColor: ColorTheme.PRIMARY_BACKGROUND_COLOR_01,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        width: 49,
        borderRadius: 25
      },
      freeIconStyle: {
        left: 32,
        position: 'absolute',
        top: 6
      },
      iconStyle: {
        height: 18,
        resizeMode: 'contain',
        width: 20
      },
      iconCameraStyle: {
        height: 80,
        resizeMode: 'contain',
        width: 80
      },
      image: {
        alignSelf: 'center'
      },
      imageContainer: {
        alignItems: 'center',
        flexDirection: 'column'
      },
      tabButtonContainer: {
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        width: 40
      },
      textLabel: {
        fontFamily: FontTheme.REGULAR,
        fontSize: 10,
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: 10
      }
    })
  }, [])
}
