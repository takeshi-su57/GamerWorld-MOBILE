import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'

import wallpaper from '../../assets/wallpaper.png'

function Login({navigation}){
        function handleHome(){
            navigation.navigate('Home')
        }
        function handlePost(){
            navigation.navigate('Post')
        }
        function handleLogin(){
            navigation.navigate('Login')
        }
        function handleCreateProfile(){
            navigation.navigate('CreateProfile')
        }
        function handleProfile(){
            navigation.navigate('Profile')
        }
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
                <Navigation 
                    Home={handleHome} 
                    Post={handlePost}
                    Login={handleLogin}
                    Create={handleCreateProfile} 
                    Profile={handleProfile}
                />
        </View>
    )
}

export default Login