/* eslint-disable react/prop-types */
import React from 'react'
import { CustomModal } from '../CustomModal'
import { Text, View } from 'react-native'
import { ColorTheme } from '../../common/AppStyles'
import CustomButton from '../CustomButton'
import styles from './style'
import Fonts from '../../common/Fonts'
import { deleteProfilePostData, getProfilePostData } from '../../screens/ProfileScreen/actionProfileScreen'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { getHomeFeedData } from '../../screens/HomeScreen/actionHomeScreen'

function DeleteComponent (
  { postId, openDeleteModal, setOpenDeleteModel }
) {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  return (
        <CustomModal
            borderBottomLeftRadius={25}
            borderBottomRightRadius={25}
            visible={openDeleteModal}
            markingType="period"
            modalHeight={250}
            alignBottom={false}
        // onBackdropPress={() => {
        //     dispatch(onPasswordValidationError({
        //         passwordValidationError: false,
        //         errorMessage: ''
        //     }))
        // }}
        // onModalHide={() => {
        //     dispatch(onPasswordValidationError({
        //         passwordValidationError: false,
        //         errorMessage: ''
        //     }))
        // }}
        >
            <View style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
                <Text style={{
                  fontSize: 25,
                  marginBottom: 10,
                  color: ColorTheme.BLACK,
                  fontWeight: '700'
                }}>Delete this post?</Text>
                <Text style={{
                  fontSize: 14,
                  color: ColorTheme.PRIMARY_RED_COLOR
                }}>are you sure to delete post? </Text>
                <View style={{ marginVertical: 10 }} />
                <CustomButton
                    customStyle={styles.customButtonCustomStyle}
                    onButtonPress={() => {
                      setOpenDeleteModel(false)
                      dispatch(deleteProfilePostData({ postId, navigation }))
                    }
                    }
                    buttonText={'Delete'}
                    isDisabled={false}
                    textColor={ColorTheme.PRIMARY_RED_COLOR}
                    buttonColor={ColorTheme.GREEN_BG}
                    fontFamily={Fonts.INTER_BOLD}
                />
                <CustomButton
                    customStyle={styles.customButtonCustomStyle}
                    onButtonPress={() => {
                      setOpenDeleteModel(false)
                    }
                    }
                    buttonText={'Cancel'}
                    isDisabled={false}
                    textColor={ColorTheme.BLACK}
                    buttonColor={ColorTheme.GREEN_BG}
                    fontFamily={Fonts.INTER_BOLD}
                />
            </View>
        </CustomModal>)
}

export default DeleteComponent
