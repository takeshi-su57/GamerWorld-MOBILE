import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import gamerInfo from '../../assets/gamerInfo.png'

export default function Info({navigation}){
    function login(){
        navigation.navigate('Login')
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Image source={gamerInfo} style={styles.img}/>
            </View>
            <TouchableOpacity onPress={login} style={styles.buttonNext}>
                <Text style={styles.text}>Próximo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#B4045F',
    },
    containerInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: '100%',
        height: '70%',
        borderBottomRightRadius: 150
    },
    buttonNext:{
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: '60%',
        height: 40
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    img: {
        width: 250,
        height: 250
    }
})