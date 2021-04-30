import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/header';
import Router from './src/router';

import logoPurple from './src/assets/logoPurple.png'
import logoBlue from './src/assets/logoBlue.png'

import moon from './src/assets/moon.png'
import sunny from './src/assets/sunny.png'

import qrcode from './src/assets/qrcode.png'
import qrcodeDark from './src/assets/qrcodeBlue.png'

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
      <Header 
        logo={backColor ? logoPurple : logoBlue}
        bcgd={teste} 
        time={backColor ? sunny : moon}
        qrcode={backColor ? qrcode : qrcodeDark}  
        body={backColor ? styles.ContainerHearderDark : styles.ContainerHearderClear}
      />
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
    backgroundColor: '#6E6E6E',
    width: '100%',
    height: '100%',
  },
  ContainerHearderDark:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    width: '100%',
    borderBottomWidth: 5,
    borderBottomColor: '#B40486'
  },
  ContainerHearderClear:{
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,

    width: '100%',
    borderBottomWidth: 5,
    borderBottomColor: '#848484',
  },
})
