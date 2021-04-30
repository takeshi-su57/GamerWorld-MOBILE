import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Header from './src/components/header';
import Router from './src/router';

import moon from './src/assets/moon.png'
import sunny from './src/assets/sunny.png'


export default function App() {
  const [backColor, setBackColor] = useState(true)

  function teste(){
      if(backColor){
        setBackColor(false)
      }else{
        setBackColor(true)
      }
  }

  return (
    <View style={backColor ? styles.Containerglobal : styles.ContainerglobalClear}>
      <Header bcgd={teste} time={backColor ? sunny : moon}/>
      <Router/>
    </View>
  )
}

const styles = StyleSheet.create({
  Containerglobal:{
      backgroundColor: '#151515',
      width: '100%',
      height: '100%'
  },
  ContainerglobalClear:{
    backgroundColor: '#A4A4A4',
    width: '100%',
    height: '100%'
  }
})
