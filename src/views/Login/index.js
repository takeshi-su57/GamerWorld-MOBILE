import React from 'react'
import {
        View, 
        Text, 
        Image, 
        TextInput, 
        TouchableOpacity,
        KeyboardAvoidingView,
        Platform,
        SafeAreaView,
        ScrollView
} from 'react-native'

import styles from './styles'
import Header from '../../components/header'

import gamer from '../../assets/gamerWomanMan.png'

function Login({navigation}){
    return(
        <ScrollView contentContainerStyle={styles.Container}>
          <Header/>
            <KeyboardAvoidingView 
            style={styles.ContainerKeyboard}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                   
                        <Image style={styles.img} source={gamer}/>
                        <Text style={styles.text}>NickName: </Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Digite aqui..."
                            placeholderTextColor="#585858"
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
                            <Text style={styles.text}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.ContainerCreateUser}>
                            <Text style={styles.textLink}>Criar conta</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('CreateProfile')}>
                                <Text style={styles.textLinkPurple}> aqui!</Text>
                            </TouchableOpacity>
                        </View>   
                    
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default Login