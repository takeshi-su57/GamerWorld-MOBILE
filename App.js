import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Router from './src/router';

export default function App() {

  return (
    <View style={styles.Containerglobal}>
      <Router/>
    </View>
  )
}

const styles = StyleSheet.create({
  Containerglobal:{
      backgroundColor: '#151515',
      width: '100%',
      height: '100%'
  }
})
