import React from 'react'
import { 
    View, 
    Text,
    Image, 
    ScrollView
} from 'react-native'
import styles from './styles'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'

import bender from '../../assets/bender.png'
import deadpool from '../../assets/deadpool.png'
import gambit from '../../assets/gambit.png'
import heistDali from '../../assets/heist-dali.png'

import crash from '../../assets/crash.png'
import mario from '../../assets/mario.png'
import naruto from '../../assets/naruto.png'
import sonic from '../../assets/sonic.png'



import heartRed from '../../assets/heartRed.png'
import commentsWhite from '../../assets/commentsWhite.png'

export default function Activity({navigation}){
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
      function handleProfile(){
        navigation.navigate('Profile')
      }
      function handleActivity(){
        navigation.navigate('Activity')
      }

    return(
        <View style={styles.Container}>
          <Header/>
            <ScrollView contentContainerStyle={styles.ContainerLikes}>
                <View style={styles.ContainerActivity}>
                    <Image source={crash} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Maria Luiza </Text> 
                      comentou a sua foto
                    </Text>
                    <Image source={commentsWhite} style={styles.imgComments}/>
                </View>

                <View style={styles.ContainerActivity}>
                    <Image source={bender} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Ana Clara </Text> 
                      curtiu a sua foto
                    </Text>
                    <Image source={heartRed} style={styles.imgLike}/>
                </View>

                <View style={styles.ContainerActivity}>
                  <Image source={deadpool} style={styles.avatar}/>
                  <Text style={styles.text}>
                    <Text style={styles.textName}>Naldo Gonzales </Text> 
                    curtiu a sua foto
                  </Text>
                  <Image source={heartRed} style={styles.imgLike}/>
                </View>

    
                <View style={styles.ContainerActivity}>
                    <Image source={heistDali} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Alex Araujo </Text> 
                      curtiu a sua foto
                    </Text>
                    <Image source={heartRed} style={styles.imgLike}/>
                </View>

                <View style={styles.ContainerActivity}>
                    <Image source={mario} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Amanda Ana </Text> 
                      comentou a sua foto
                    </Text>
                    <Image source={commentsWhite} style={styles.imgComments}/>
                </View>

                <View style={styles.ContainerActivity}>
                    <Image source={naruto} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Laura da Silva </Text> 
                      comentou a sua foto
                    </Text>
                    <Image source={commentsWhite} style={styles.imgComments}/>
                </View>

                <View style={styles.ContainerActivity}>
                    <Image source={sonic} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Mario Nascimento </Text> 
                      curtiu a sua foto
                    </Text>
                    <Image source={heartRed} style={styles.imgLike}/>
                </View>

                <View style={styles.ContainerActivity}>
                    <Image source={gambit} style={styles.avatar}/>
                    <Text style={styles.text}>
                      <Text style={styles.textName}>Luiza de Souza </Text> 
                      comentou a sua foto
                    </Text>
                    <Image source={commentsWhite} style={styles.imgComments}/>
                </View>
            </ScrollView>

            <Navigation 
                Home={handleHome} 
                Post={handlePost}
                Login={handleLogin}
                Create={handleCreateProfile}  
                Profile={handleProfile}
                Activity={handleActivity}
            />
        </View>
    )
}