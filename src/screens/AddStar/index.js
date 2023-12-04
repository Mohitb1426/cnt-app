import React from 'react'
import { StatusBar, View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent'
import { ColorTheme } from '../../common/AppStyles'
import styles from './styles'
import StarBalanceCard from '../../components/StarBalanceCard'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import SvgIcons from '../../common/SvgIcon'

export default function AddStar () {
  const navigation = useNavigation()
  const dummyData = ['+50', '+100', '+150', '+500', '+5000']
  return (
        <View style={styles.mainContainer}>
            <LinearGradient style={{ height: StatusBar.currentHeight }}
                colors={['#075E54', '#128C7E']}
                start={{ x: 0, y: 1 }} end={{ x: 1.3, y: 0 }} >
                <StatusBar translucent={true} barStyle={'light-content'} backgroundColor={'transparent'} />
            </LinearGradient >
            <HeaderComponent
                goBack={() => navigation.goBack()}
                title="Add Stars"
                isTextColor={ColorTheme.WHITE}
                isNotificationIcon={true}
                isMenuIcon={true}
                isYellowIcon={true}
                isWhiteIcon={'#FFB804'}
            />
            <View>
                <StarBalanceCard
                    text={'Add Stars'}
                    buttonText={'Proceed To pay ₹00.00'}
                    data={dummyData}
                    labelText={'Add Stars To Your Balance'} />
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SvgIcons.ComingSoonIcon />
            </View>
        </View>
  )
}
