import React from 'react'
import { View, Text} from 'react-native'
import  styles   from './style'

import BalloonImage from '../../components/BalloonImage'


export default function BalaoDaSorte() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Balão dos Desejos</Text>
      <View>
        <BalloonImage/>
         
      </View>    

    </View>
  );
}