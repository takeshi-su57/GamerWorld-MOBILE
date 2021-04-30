import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'

import qrcode from '../../assets/qrcode.png'
import logo from '../../assets/logoPurple.png'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

function Header({back, img, bcgd, time}){
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
        width: 80,
        height: 80
    },
    Icon:{
        width: 35,
        height: 35
    }
})


export default Header