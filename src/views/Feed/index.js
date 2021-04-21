import React, {useState} from 'react'
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

import heartWhite from '../../assets/heartWhite.png'
import heartRed from '../../assets/heartRed.png'
import commentsBlue from '../../assets/commentsBlue.png'
import imgPublic from '../../assets/public.png'

function Feed({avatar, post, name, caption, Profile}){
    const[img, SetImg] = useState(false)
    const[number, setNumber] = useState(34)

    function like(){
        if(!img){
            SetImg(true)
            setNumber(number + 1)
        }else{
            SetImg(false)
            setNumber(number - 1)
        }
    }

    return(
        <View style={styles.Container}>
            <View style={styles.ContainerFeed}>
                
                <TouchableOpacity onPress={Profile}>                                                              
                    <View style={styles.ContainerAvatar}>
                        <Image style={styles.imgAvatar} source={avatar}/>
                        <Text style={styles.Text}>{name}</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.ContainerPost}>
                    <Image style={styles.imgPost} source={post}/>

                    <View style={styles.ContainerInteraction}>
                        <View style={styles.likesComments}>
                            <TouchableOpacity onPress={like}>
                                <Image style={styles.imgInteraction} source={img == true ? heartRed : heartWhite}/>
                            </TouchableOpacity>
                            <Text style={styles.TextNumber}>{number}</Text>
                        </View>
                        <View style={styles.likesComments}>
                            <Image style={styles.imgInteraction} source={commentsBlue}/>
                            <Text style={styles.TextNumber}>10</Text>
                        </View>
                    </View>

                    <Text style={styles.TextCaption}>
                        <Text style={styles.Text}>{name} </Text> 
                        {caption}
                    </Text>

                    <View style={styles.ContainerComment}>
                        <TextInput
                            style={styles.Input}
                            placeholder="Comente aqui..."
                            placeholderTextColor="#fff"
                        />
                        <Image style={styles.imgPublic} source={imgPublic}/>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default Feed