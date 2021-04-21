import React from 'react'
import { Text, View, ScrollView } from 'react-native'

import Header from '../../components/header'
import Navigation from '../../components/Navigation'
import Feed from '../Feed'

import isis from '../../assets/isis.png'
import cod from '../../assets/codPost.jpg'

import batman from '../../assets/batman.png'
import forza from '../../assets/forza.jpg'

import hermione from '../../assets/hermione.png'
import handson from '../../assets/handsonGearOfWar.jpeg'

import styles from './styles'

export default function Home({navigation}) {

  function UserProfile(){
    navigation.navigate('UserProfile')
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

  return (
    <View style={styles.Container}>
      <Header/>
        <ScrollView style={styles.feed}>
          <Feed avatar={isis} post={cod} name={"Ana Claudia"} caption={"Jogo maravilhoso!"} Profile={UserProfile}/>
          <Feed avatar={batman} post={forza} name={"Henrique Jonas"} caption={"Bora jogar?"}/>
          <Feed avatar={hermione} post={handson} name={"Erika Souza"} caption={"Hadson <3"}/>
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