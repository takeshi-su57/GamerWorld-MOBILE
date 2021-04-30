import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

function Header({back, body, bcgd, time, qrcode, logo}){
    return(
        <View style={[styles.Container, body]}>
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
        marginTop: getStatusBarHeight(),
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