import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import gamerInfo from '../../assets/gamerInfo.png'

export default function Intro({navigation}){
    function Info(){
        navigation.navigate('Info')
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerIntro}>
                <Image source={gamerInfo} style={styles.img}/>
            </View>
            <TouchableOpacity onPress={Info} style={styles.buttonNext}>
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
    containerIntro:{
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