import React, {useState, useEffect} from 'react'
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

import Header from '../../components/header'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import gamer from '../../assets/gamerWomanMan.png'
import Load from '../../components/load'

function Login({navigation}){
    const[input, setInput] = useState()
    const[alert, setAlert] = useState()
    const[load, SetLoad] = useState(true)


    function Enter(){
        if(!input){
            setAlert("Como posso te chamar? 😢")
        }else{
            navigation.navigate('Home')
        }
    }

    useEffect(() => {
        SetLoad(false)
    }, [])

    return(
        <>
            {load == true ? 
                <View style={styles.ContainerLoad}>
                    <Load/>
                </View>
                :
                <ScrollView contentContainerStyle={styles.Container}>
                    <Header/>
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
                                style={alert ? styles.inputAlert : styles.input}
                                placeholder="Digite aqui..."
                                placeholderTextColor="#A4A4A4"
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
            }
        </>
    )
}

export default Login