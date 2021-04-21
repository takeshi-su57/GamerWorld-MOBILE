import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import home from '../../assets/home.png'
import heartWhite from '../../assets/heartWhite.png'
import plus from '../../assets/plus.png'
import photoProfile from '../../assets/photoProfile.png'
import back from '../../assets/back.png'

function Nav(){
    return(
        <View style={styles.Container}>
            <TouchableOpacity>
                <Image style={styles.Icon} source={home}/>
            </TouchableOpacity>
            <Text style={styles.Afstand}/>
            <TouchableOpacity>
                <Image style={styles.Icon} source={heartWhite}/>
            </TouchableOpacity>
            <Text style={styles.Afstand}/>
            <TouchableOpacity>
                <Image style={styles.Icon} source={plus}/>
            </TouchableOpacity>
            <Text style={styles.Afstand}/>
            <TouchableOpacity>
                <Image style={styles.PhotoProfile} source={photoProfile}/>
            </TouchableOpacity>
            <Text style={styles.Afstand}/>
            <TouchableOpacity>
                <Image style={styles.Icon} source={back}/>
            </TouchableOpacity>
        </View>
    )
}

export default Nav