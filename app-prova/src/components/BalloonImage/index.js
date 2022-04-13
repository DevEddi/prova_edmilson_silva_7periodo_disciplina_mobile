import React from 'react';
import { View, Image} from 'react-native';

export default function BalloonImage() {
  return (
    <View>
      <Image style={{width: 150, height: 150}} source={require('app-prova/src/assets/balloon_red.jpg')}/>
    </View>
  );
}