import React, {useState} from 'react'
import {
        View, 
        Text, 
        Image, 
        TextInput, 
        TouchableOpacity,
        KeyboardAvoidingView,
        Platform,
        ScrollView
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import gamer from '../../assets/gamerWomanMan.png'

function Login({navigation}){
    const[input, setInput] = useState()
    const[alert, setAlert] = useState()

    function Enter(){
        if(!input){
            setAlert("Como posso te chamar? 😢")
        }else{
            navigation.navigate('Home')
        }
    }

    return(
        <ScrollView contentContainerStyle={styles.Container}>
            {   alert &&
                <LinearGradient
                    colors={['rgba(231, 91, 173, 0.7)', 'transparent']}
                    style={styles.ContainerAlert}
                >
                    <Text style={styles.textAlert}>{alert}</Text>
                </LinearGradient>
            }
                 
            <KeyboardAvoidingView 
                style={styles.ContainerKeyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Image style={styles.img} source={gamer}/>
                    <Text style={styles.text}>NickName: </Text>
                    <TextInput 
                        style={styles.input}
                        placeholder="Digite aqui..."
                        placeholderTextColor="#585858"
                        value={input}
                        onChange={setInput}
                    />
                    <TouchableOpacity onPress={Enter} style={styles.button}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.ContainerCreateUser}>
                        <Text style={styles.textLink}>Criar conta </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('CreateProfile')}>
                            <Text style={styles.textLinkPurple}>aqui!</Text>
                        </TouchableOpacity>
                    </View>   
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Login