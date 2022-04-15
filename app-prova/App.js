import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BalaoDaSorte from './src/screens/BalaoDaSorte'


export default function App() {
  return (
    <View style={styles.container}>
      <BalaoDaSorte/>      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#0081cf',
    paddingTop: 50,
  }
})