import React from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import SvgIcon from '../../../common/SvgIcon'
import { useSelector } from 'react-redux'

export default function index () {
  const { profileData } = useSelector((state) => state.reducerProfileScreen)
  return (
        <View style={{ backgroundColor: 'red' }}>
            <View style={styles.firstContainer}>
                <View style={{ position: 'absolute', right: 0 }}>
                    <SvgIcon.YellowCurveIcon />
                </View>
                <View style={{ position: 'absolute', right: 0 }}>
                    <SvgIcon.TopCurveIcon />
                </View>
                <View style={styles.TextPosition}>
                    <View>
                        <Text style={styles.boldStyle}>{profileData?.fullname}</Text>
                        <Text style={styles.simpleWhileStyle}>{profileData?.location}</Text>
                    </View>
                </View>
            </View>
        </View>
  )
}
