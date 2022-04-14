import React, {useState} from 'react'
import { View, Button, Text, Image} from 'react-native'
import styles from './style'



export default function BalloonImage() {

  let frases = ['', 'Fui', 'Não voltei', 'Quero ir']


  const [frase, setFrase] = useState(frases[0])
  //const [emocoes, setEmocoes] = useState(imagens.)  
  
  const enviarBalao = () => {    
    setFrase(frases[Math.floor(Math.random()*frases.length)])
  }
  
  const resetar = () => {
    setFrase(frases[0])
  }
  
  return (
    <View>
      <View  style ={styles.container}>
       <Text style ={styles.texto}>{frase}</Text>
      </View>
     <View style ={styles.button}>
      <Button onPress={enviarBalao} title='Enviar' />
      <Button onPress={resetar} title='Resetar'/> 
     </View>
    </View>
  );
}