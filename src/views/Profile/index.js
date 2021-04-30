import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'
import styles from './styles'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'

import Avatar from '../../assets/joker.png'
import customer from '../../assets/customer.png'
import camera from '../../assets/camera.png'
import gow from '../../assets/gow.jpg'
import thecrew from '../../assets/thecrew.jpg'
import crash from '../../assets/crash.jpg'
import pen from '../../assets/pen.png'
import dlt from '../../assets/delete.png'

function Profile({navigation}){
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
    function handleActivity(){
        navigation.navigate('Activity')
    }

    return(
        <View style={styles.Container}>
                <ScrollView style={styles.ContainerScrollView}>
                    <View style={styles.ContainerAvatar}>
                        <Image style={styles.avatar} source={Avatar}/>
                        <Text style={styles.textName}>Gabriel Felix</Text>
                    </View>

                    <View style={styles.ContainerFollow}>
                        <View style={styles.ContainerCustomer}>
                            <Image style={styles.ImgCamera} source={camera}/>
                            <Text style={styles.TextCustomer}>
                               3
                            </Text>
                        </View>
                        <View style={styles.ContainerCustomer}>
                            <Image style={styles.ImgCustomer} source={customer}/>
                            <Text style={styles.TextCustomer}>
                               200
                            </Text>
                        </View>
                    </View>


                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={gow}/>
                        <Text style={styles.TextCaption}>Marcou minha infancia 😍</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>

                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={thecrew}/>
                        <Text style={styles.TextCaption}>Topam jogar??</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>

                    <View style={styles.ContainerPost}>
                        <Image style={styles.ImgPost} source={crash}/>
                        <Text style={styles.TextCaption}>Quem lembra? 😁</Text>

                        <View style={styles.ContainerCommon}>
                            <Image style={styles.ImgCommon} source={pen}/>
                            <Image style={styles.ImgCommon} source={dlt}/>
                        </View>
                    </View>
                </ScrollView>
                <Navigation 
                    Home={handleHome} 
                    Post={handlePost}
                    Login={handleLogin}
                    Create={handleCreateProfile} 
                    Activity={handleActivity}
                />
        </View>
    )
}

export default Profile