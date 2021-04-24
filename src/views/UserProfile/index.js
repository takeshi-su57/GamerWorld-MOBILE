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
import arrowLeft from '../../assets/arrowLeft.png'

function UserProfile({navigation}){
    const [users, setUsers] = useState(100)
    const [follow, setFollow] = useState('Deixar de seguir')

    function Follow(){
        if(follow == 'Deixar de seguir'){
            setFollow('Seguir')
            setUsers(users - 1)
        }else{
            setFollow('Deixar de seguir')
            setUsers(users + 1)
        }
    }

    function Back(){
        navigation.navigate('Home')
    }

    return(
        <View style={styles.Container}>
            <Header back={Back} img={arrowLeft}/>
                <ScrollView style={styles.ContainerScrollView}>
                    <View style={styles.ContainerAvatar}>
                        <Image style={styles.avatar} source={Avatar}/>
                        <Text style={styles.textName}>Ana Claudia</Text>
                    </View>

                    <View style={styles.ContainerFollow}>
                        <TouchableOpacity style={
                            follow != 'Deixar de seguir' ? styles.buttonUnFollow : styles.buttonFollow}
                            onPress={Follow}>

                            <Text style={styles.textFollow}>{follow}</Text>
                        </TouchableOpacity>
                        <View style={styles.ContainerCustomer }>
                            <Image style={styles.ImgCustomer} source={customer}/>
                            <Text style={styles.TextCustomer}>
                                {follow == 'Seguir' ? '-' : ''}
                                {users}
                            </Text>
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
        </View>
    )
}

export default UserProfile