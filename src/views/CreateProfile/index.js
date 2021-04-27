import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native'
import styles from './styles'

import Header from '../../components/header'

import img from '../../utils'

function CreateProfile({navigation}){
    const[name, setName] = useState()
    const[surname, setSurname] = useState()
    const[nickName, setNickName] = useState()
    const[age, setAge] = useState()

    function Create(){
        if(!name){
            Alert.alert("Nome é obrigatório!")
        }
        else if(!surname){
            Alert.alert("Sobrenome é obrigatório!")
        }
        else if(!nickName){
            Alert.alert("NickName é obrigatório!")
        }
        else if(!age){
            Alert.alert("Idade é obrigatório!")
        }
        else{
            navigation.navigate("Login")
        }
    }

    return(
        <View style={styles.Container}>
            <Header/>
            
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
                onChange={setName}
                />
                
                <Text style={styles.textLabel}>Sobrenome: </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"
                value={surname}
                onChange={setSurname}
                />
                
                <Text style={styles.textLabel}>NickName: </Text>
                <TextInput
                style={styles.input}
                placeholder="Digite aqui..."
                placeholderTextColor="#A4A4A4"
                value={nickName}
                onChange={setNickName}
                />
                
                <Text style={styles.textLabel}>Idade: </Text>
                <TextInput
                style={styles.AgeInput}
                placeholder="+16"
                placeholderTextColor="#A4A4A4"
                value={age}
                onChange={setAge}
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