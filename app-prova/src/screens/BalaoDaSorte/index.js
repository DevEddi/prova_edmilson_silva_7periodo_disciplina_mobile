import React from 'react'
import { View, Text} from 'react-native'

import BalloonImage from '../../components/BalloonImage'
import styles from './style'

export default function BalaoDaSorte() {
  return (
    <View style={styles.boxTitulo}>
      <Text style={styles.titulo}>Balão das Verdades</Text>
      <View >
        <BalloonImage/>         
      </View>
    </View>
  );
}