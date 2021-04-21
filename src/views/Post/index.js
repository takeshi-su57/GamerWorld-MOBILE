import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'

import wallpaper from '../../assets/wallpaper.png'

function Login({navigation}){
    return(
        <View style={styles.Container}>
            <Header/>
            
            <View style={styles.ContainerFile}>
                <Image style={styles.img} source={wallpaper}/>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Carregar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.ContainerCaption}>
                <Text style={styles.textCaption}>Legenda:</Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"/>    
            </View>
            <TouchableOpacity style={styles.textButtonCaption}>
                    <Text style={styles.textButton}>Postar</Text>
                </TouchableOpacity>
            <Navigation/>
        </View>
    )
}

export default Login