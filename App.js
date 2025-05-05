import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Vibration, Alert, Share, TouchableOpacity } from 'react-native';

export default function App() {
  const [cont,setCont]=useState(0);
  
  const apretarBoton=()=>{
    setCont(cont+1);
  }
  
  return (
    <View style={styles.container}>
      <Text>Hellow Worl!</Text>
      <TouchableOpacity onPress={apretarBoton} style={styles.boton}>
        <Text style={styles.textoBco}>Hola</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={()=>Vibration.vibrate(200000)}>
        <Text style={styles.textoBco}>Vibrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boton} onPress={()=>Share.share({message: "https://www.youtube.com/LoquinYT"})} >
        <Text style={styles.textoBco}>Compartir</Text>
      </TouchableOpacity>
      <Text>{cont}</Text>
      <StatusBar style="auto" />
      <Text style={styles.berman}>BERMAN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    padding: '3%',
    marginTop: '4%',
    backgroundColor: '#000000'
  },
  textoBco: {
    color: 'white',
    fontSize: 20
  },
  berman: {
    color: "green",
    backgroundColor: "blue",
    fontSize: 50
  }
});