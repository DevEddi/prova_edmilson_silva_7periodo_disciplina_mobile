import React from 'react';
import { View, Text} from 'react-native';
import styles from './style'

import BalloonImage from '../BalloonImage/'
import ButtonToSend from '../Button/ButtonToSend/'
import ButtonReset from '../Button/ButtonReset/'

export default function BalaoDaSorte() {
  return (
    <View>
      <Text style={styles.textBalloon}>Balão dos Desejos</Text>
      <BalloonImage/>
      <ButtonToSend/>
      <ButtonReset/>     

    </View>
  );
}