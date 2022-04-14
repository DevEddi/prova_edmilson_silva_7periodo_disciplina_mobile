import React, {useState} from 'react'
import { View, Image, Button, Text} from 'react-native'
import styles from './style/'

export default function BalloonImage(Props) {

  let frases = ['', 'Fui', 'Não voltei', 'Quero ir']

  const [frase, setFrase] = useState(frases[0])
    
  
  const enviarBalao = () => {    
    setFrase(frases[Math.floor(Math.random()*frases.length)])
  }
  
  const resetar = () => {
    setFrase(frases[0])
  }
  
  return (
    <View>
      <Text>{frase}</Text>
      <Button onPress={enviarBalao} title='Enviar'></Button>
      <Button onPress={resetar} title='Resetar'></Button>

        
    </View>
  );
}