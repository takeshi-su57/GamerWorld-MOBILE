import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../../components/header'

import img from '../../utils'

function CreateProfile({navigation}){
    const[name, setName] = useState()
    const[surname, setSurname] = useState()
    const[nickName, setNickName] = useState()
    const[age, setAge] = useState()
    const[alert, setAlert] = useState()

    function Create(){    
        if(!name){
            setAlert("Nome é obrigatório! 😐")
        }
        else if(!surname){
            setAlert("Sobrenome é obrigatório! 🙄")
        }
        else if(!nickName){
            setAlert("NickName é obrigatório! 😤")
        }
        else if(!age){
            setAlert("Idade é obrigatório! 🤯")
        }
        else if(age < 16){
            setAlert("Você precisa ser maior de 16 anos! 😕")
        }
        else{   
            navigation.navigate("Home")
            Alert.alert("Parabéns! 🥳", "Perfil criado com sucesso!")
        }
    }

    return(
        <View style={styles.Container}>
            <Header/>
            {   alert &&
                <LinearGradient
                    colors={['rgba(231, 91, 173, 0.7)', 'transparent']}
                    style={styles.ContainerAlert}
                >
                    <Text style={styles.textAlert}>{alert}</Text>
                </LinearGradient>
            }
            <View style={styles.ContainerAvatar}>
                <Text style={styles.text}>Escolha seu avatar:</Text>
                <ScrollView 
                style={styles.Scrollimgs}
                horizontal={true}>
                    {
                        img.map((icon, index) => (
                            index > 0 &&
                            <TouchableOpacity>
                                <Image style={styles.avatar} source={icon}/>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
            
            
            <View style={styles.ContainerInputs}>
                <Text style={styles.textLabel}>Nome: </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"
                value={name}
                onChangeText={setName}
                />
                
                <Text style={styles.textLabel}>Sobrenome: </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"
                value={surname}
                onChangeText={setSurname}
                />
                
                <Text style={styles.textLabel}>NickName: </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"
                value={nickName}
                onChangeText={setNickName}
                />
                
                <Text style={styles.textLabel}>Idade: </Text>
                <TextInput
                style={styles.AgeInput}
                placeholder="+16"
                placeholderTextColor="#A4A4A4"
                value={age}
                onChangeText={setAge}
                keyboardType='numeric'
                />

                <View style={styles.ContainerButton}>
                    <TouchableOpacity style={styles.PurpleButton} onPress={Create}>
                        <Text style={styles.textButton}>Pronto</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.GreenButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textButton}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CreateProfile