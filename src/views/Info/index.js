import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import gamerInfo from '../../assets/gamerInfo.png'

export default function Info({navigation}){
    function back(){
        navigation.navigate('Intro')
    }

    function login(){
        navigation.navigate('Login')
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerInfo}>
                <Image source={gamerInfo} style={styles.img}/>

                <Text style={styles.textInfo}>
                    Uma rede social onde fãs apaixonados por jogos
                    vão poder compartilhar informações do mundo nerd
                    com seus amigos seguidores, curtir e comentar
                    postagens e criar novos ciclos de amizades.
                </Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity onPress={back} style={styles.buttonBack}>
                    <Text style={styles.text}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={login} style={styles.buttonNext}>
                    <Text style={styles.text}>Começar</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    containerInfo:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#B4045F',
        width: '100%',
        height: '75%',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#fff',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30
    },
    containerButton:{
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonNext:{
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',

        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: '35%',
        height: 40,
        marginLeft: 10
    },
    buttonBack:{
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#01A9DB',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        width: '35%',
        height: 40,
        marginRight: 10 
    },
    text:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textInfo:{
        color: '#fff',
        fontSize: 23,
        marginLeft: 20,
        marginRight: 20
    },
    img: {
        width: 190,
        height: 190,
        marginBottom: '7%'
    }
})