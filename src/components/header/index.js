import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import qrcode from '../../assets/qrcode.png'
import logo from '../../assets/logoPurple.png'
import sunny from '../../assets/sunny.png'

function Header({back, img}){
    return(
        <View style={styles.Container}>
            {
                back ?
                <TouchableOpacity onPress={back}>
                    <Image source={img} style={styles.Icon}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={back}>
                    <Image source={qrcode} style={styles.Icon}/>
                </TouchableOpacity>
            }
        
            <Image source={logo} style={styles.Logo}/>
            
            <TouchableOpacity>
                <Image source={sunny} style={styles.Icon}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header