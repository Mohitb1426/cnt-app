/* eslint-disable react/prop-types */
import React from 'react'
import { CustomModal } from '../CustomModal'
import { Text, TouchableOpacity, View } from 'react-native'
import SvgIcon from '../../common/SvgIcon'
import { ColorTheme } from '../../common/AppStyles'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'

function PostBottomSheet ({
  bottomSheet, setBottomSheet, id,
  openDeleteModal, setOpenDeleteModel
}) {
  const navigation = useNavigation()
  return (
    <CustomModal
      borderBottomLeftRadius={0}
      borderBottomRightRadius={0}
      visible={bottomSheet}
      markingType="period"
      modalHeight={150}
      alignBottom={true}
      backdropOpacity={0.2}
      onBackdropPress={() => {
        setBottomSheet(false)
      }}
      onModalHide={() => {
        setBottomSheet(false)
      }}
    >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        marginVertical: 40
      }}>
        <TouchableOpacity
          onPress={() => {
            setBottomSheet(false)
            navigation.navigate(
              Routes.EDIT_POSTS_SCREEN, { postId: id })
          }
          }
          style={{
            flexDirection: 'row'
          }}>
          <SvgIcon.EditIcon />
          <Text style={{
            marginLeft: 10,
            fontSize: 18,
            color: ColorTheme.BLACK,
            fontWeight: '700'
          }}>Edit</Text>
        </TouchableOpacity>
        <View style={{
          width: '100%',
          height: 2,
          marginVertical: 5,
          backgroundColor: ColorTheme.DIVIDER_BACKGROUND
        }} />
        <TouchableOpacity
          onPress={() => {
            setBottomSheet(false)
            setOpenDeleteModel(true)
          }}
          style={{
            marginTop: 10,
            marginLeft: 5,
            alignItems: 'center',
            flexDirection: 'row'
          }}>
          <SvgIcon.DeleteIcon />
          <Text style={{
            marginLeft: 15,
            fontSize: 18,
            color: ColorTheme.PRIMARY_RED_COLOR
          }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </CustomModal>
  )
}

export default PostBottomSheet
