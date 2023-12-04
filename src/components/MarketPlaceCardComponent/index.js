/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import SvgIcon from '../../common/SvgIcon'
import { useNavigation } from '@react-navigation/native'
import { Routes } from '../../routes/Routes'
import BottomModal from './BottomModal'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../screens/MyMarketPlaceScreen/actionMarketPlaceScreen'

export default function MarketPlaceCardComponent({
  id,
  image,
  name,
  price,
  icons = true
}) {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const deleteProductBuId = () => {
    dispatch(deleteProduct({ productId: id, navigation }))
  }
  return (
    <>
      <View style={styles.mainWrapper}>
        <TouchableOpacity onPress={() => price
          ? navigation.navigate(Routes.PRODUCT_DETAILS_SCREEN, { productId: id })
          : navigation.navigate(Routes.MY_MARKET_PLACE_SCREEN)
        }>
          <Image source={{ uri: image }} style={styles.imageStyle} />
          <View style={styles.textWrapper}>
            <Text style={styles.productNameStyle}>{name}</Text>
            {price ? <Text>{`Rs ${price}`}</Text> : null}
          </View>
        </TouchableOpacity>
        {icons && price
          ? <>
            <>
              <View style={styles.bookmarkPositionStyle}>
                <SvgIcon.BookmarkIconMarketPlace />
              </View>
              <TouchableOpacity onPress={() => setOpen(!open)} style={styles.threeDotPositionStyle}>
                <SvgIcon.ThreeDotMarketPlace />
              </TouchableOpacity>
            </>
            {open
              ? <View style={styles.threeDotPositionModalStyle}>
                <TouchableOpacity onPress={() => navigation.navigate(
                  Routes.ADD_PRODUCT_WITH_FORM_SCREEN, { productId: id })}>
                  <Text>Edit</Text>
                </TouchableOpacity>
                <View style={{ height: 1, marginVertical: 5, width: '100%', backgroundColor: '#000' }} />
                <TouchableOpacity onPress={deleteProductBuId}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
              : null}
          </>
          : null}
      </View>
      {/* {open
        ? <BottomModal
          onDeleteProduct={deleteProductBuId}
          id={id}
          bottomSheet={open}
          setBottomSheet={setOpen}
        />
        : null} */}
    </>
  )
}
