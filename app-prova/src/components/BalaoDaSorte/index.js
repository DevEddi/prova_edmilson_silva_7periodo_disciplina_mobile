import React from 'react'
import { View, Text} from 'react-native'
import styles from './style'

import BalloonImage from '../BalloonImage/'


export default function BalaoDaSorte() {
  return (
    <View style={styles.container}>
      <Text style={styles.textBalloon}>Balão dos Desejos</Text>
      <View style={styles.containerItems}>
        <BalloonImage/>
         
      </View>    

    </View>
  );
}