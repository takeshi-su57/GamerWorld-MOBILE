import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'

import logo from '../../assets/logoPurple.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

function Header({back, img, bcgd, time, qrcode}){
    return(
        <View style={styles.Container}>
            {
                <TouchableOpacity onPress={back}>
                    <Image source={qrcode} style={styles.Icon}/>
                </TouchableOpacity>
            }
        
            <Image source={logo} style={styles.Logo}/>
            
            <TouchableOpacity onPress={bcgd}>
                <Image source={time} style={styles.Icon}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
        marginTop: getStatusBarHeight(),
        width: '100%',
        borderBottomWidth: 5,
        borderBottomColor: '#B40486'
    },
    Logo:{
        width: 82,
        height: 82
    },
    Icon:{
        width: 37,
        height: 37
    }
})


export default Header