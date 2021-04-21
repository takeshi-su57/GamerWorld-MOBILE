import React from 'react';
import { View } from 'react-native';
import Router from './src/router';
import styles from './global.js'

export default function App() {
  return (
    <View style={styles.Containerglobal}>
      <Router/>
    </View>
  )
}