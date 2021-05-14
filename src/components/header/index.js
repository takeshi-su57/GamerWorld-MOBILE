import React from 'react'
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native'

import logo from '../../assets/logoPurple.png'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

function Header({back, arrowLeft, qrcodeRouter, qrcodeImg, info, sunny}){
    return(
        <View style={styles.Container}>
            {   back ?
                <TouchableOpacity onPress={back}>
                    <Image source={arrowLeft} style={styles.Icon}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={qrcodeRouter}>
                    <Image source={qrcodeImg} style={styles.Icon}/>
                </TouchableOpacity>
            }
        
            <Image source={logo} style={styles.Logo}/>
            
            <TouchableOpacity onPress={info}>
                <Image source={sunny} style={styles.Icon}/>
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
        width: '100%',
        borderBottomWidth: 5,
        borderBottomColor: '#B40486',
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