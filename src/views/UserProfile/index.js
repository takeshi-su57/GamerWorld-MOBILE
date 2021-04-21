import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'

import Avatar from '../../assets/isis.png'
import customer from '../../assets/customer.png'
import cod from '../../assets/codPost.jpg'
import nfs from '../../assets/Nfs.jpg'
import destiny from '../../assets/destiny.jpg'
import pen from '../../assets/pen.png'
import dlt from '../../assets/delete.png'

function UserProfile({navigation}){
    const [users, setUsers] = useState(100)
    const [follow, setFollow] = useState('Seguir')

    function Follow(){
        if(follow == 'Seguir'){
            setFollow('Deixar de seguir')
            setUsers(users + 1)
        }else{
            setFollow('Seguir')
            setUsers(users - 1)
        }
    }

    function handleHome(){
        navigation.navigate('Home')
    }
    function handleUserProfile(){
        navigation.navigate('UserProfile')
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

    return(
        <View style={styles.Container}>
            <Header/>
                <ScrollView style={styles.ContainerScrollView}>
                    <View style={styles.ContainerAvatar}>
                        <Image style={styles.avatar} source={Avatar}/>
                        <Text style={styles.textName}>Ana Claudia</Text>
                    </View>

                    <View style={styles.ContainerFollow}>
                        <TouchableOpacity style={styles.buttonFollow} onPress={Follow}>
                            <Text style={styles.textFollow}>{follow}</Text>
                        </TouchableOpacity>
                        <View style={styles.ContainerCustomer}>
                            <Image style={styles.ImgCustomer} source={customer}/>
                            <Text style={styles.TextCustomer}>{users}</Text>
                        </View>
                    </View>


                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={cod}/>
                        <Text style={styles.TextCaption}>Jogo maravilhoso!</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>

                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={nfs}/>
                        <Text style={styles.TextCaption}>NFS quem topa jogar??</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>

                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={destiny}/>
                        <Text style={styles.TextCaption}>O melhor PVP</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>
                </ScrollView>
                <Navigation 
                    Home={handleHome} 
                    User={handleUserProfile}
                    Post={handlePost}
                    Login={handleLogin}
                    Create={handleCreateProfile}  
                />
        </View>
    )
}

export default UserProfile