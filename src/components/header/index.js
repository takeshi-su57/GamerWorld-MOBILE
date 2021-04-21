import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import qrcode from '../../assets/qrcode.png'
import logo from '../../assets/logoPurple.png'
import sunny from '../../assets/sunny.png'

function Header(){
    return(
        <View style={styles.Container}>
            <TouchableOpacity>
                <Image source={qrcode} style={styles.Icon}/>
            </TouchableOpacity>
            
            <Image source={logo} style={styles.Logo}/>
            
            <TouchableOpacity>
                <Image source={sunny} style={styles.Icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header