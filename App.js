import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#654062' }}>

    <View>
     <Image
        style={styles.Banner}
        source={require('./assets/images/banner.png')}
      />
      <TextInput style={styles.Input} />
      <TouchableOpacity style={styles.Botao}
      onPress={() => navigation.navigate('PaginaCardapio')}>
       Ir para o cardapio
      </TouchableOpacity>
    </View>

    </View>
  );
}

function Cardapio({ navigation }) {
  return (
    <View style={{  backgroundColor:'#FAF1F1',
}}>

<Text style={styles.Nome}>Cardapio </Text>
<Text style={styles.Resultados}> 8 resultados</Text>
<Image
        style={styles.Banner2}
        source={require('./assets/images/banner2.png')}
      />     

      <View style={styles.Menu}> 

      <Image
        style={styles.Acai}
        source={require('./assets/images/produtos 1.png')}
      /> 
      <TouchableOpacity style={styles.Comprar}> Pedir </TouchableOpacity>

      <Image
        style={styles.Acai}
        source={require('./assets/images/produtos-1.png')}
      /> 
            <TouchableOpacity style={styles.Comprar1}> Pedir </TouchableOpacity>


      <Image
        style={styles.Acai}
        source={require('./assets/images/produtos-4.png')}
      /> 
            <TouchableOpacity style={styles.Comprar2}> Pedir </TouchableOpacity>

             <Image
        style={styles.Acai}
        source={require('./assets/images/produtos-5.png')}
      /> 
            <TouchableOpacity style={styles.Comprar3}> Pedir </TouchableOpacity>

            <Image
        style={styles.Acai}
        source={require('./assets/images/produtos-3.png')}
      /> 
            <TouchableOpacity style={styles.Comprar4}> Pedir </TouchableOpacity>

      

    <TouchableOpacity style={styles.Botao2}
      onPress={() => navigation.navigate('Home')}>
Voltar para Home 
     </TouchableOpacity>

      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PaginaCardapio" component={Cardapio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
Banner: {
width: 340,
height: 600,
},
Botao:{
  position: 'absolute',
  top:500,
  left: 20,
  width: 300,
  padding: 20,
  height:62,
  color: 'white',
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: '#6F4A8E',

  
},
Input:{
    position: 'absolute',
  top:430,
  left: 20,
width: 300,
  padding: 20,
  height:62,
  color: 'white',
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: 'white',
},
Banner2:{
  width:320,
  height: 238
},
Menu:{
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems:'center',
  width:320,
  borderRadius: 10,
  background: '#FAF1F1',
top: 130
},

Acai:{
  width: 300,
  height:100,
  margin: 10
},
Comprar :{
  position: "absolute",
  top: 72,
  left: 200,
  backgroundColor: '#654062',
  width: 100,

  height: 34,
  padding: 8,
  borderRadius: 5,
  textAlign: 'center',
  color: 'white'
},
 Comprar1 :{
   position: "absolute",
  top: 192,
  left: 200,
  backgroundColor: '#654062',
  width: 100,

  height: 34,
  padding: 8,
  borderRadius: 5,
  textAlign: 'center',
  color: 'white'
 },
 Comprar2 :{
   position: "absolute",
  top: 312,
  left: 200,
  backgroundColor: '#654062',
  width: 100,
  height: 34,
  padding: 8,
  borderRadius: 5,
  textAlign: 'center',
  color: 'white'},
  Comprar3 :{
   position: "absolute",
  top: 432,
  left: 200,
  backgroundColor: '#654062',
  width: 100,
  height: 34,
  padding: 8,
  borderRadius: 5,
  textAlign: 'center',
  color: 'white'},
  Comprar4 :{
   position: "absolute",
  top: 552,
  left: 200,
  backgroundColor: '#654062',
  width: 100,
  height: 34,
  padding: 8,
  borderRadius: 5,
  textAlign: 'center',
  color: 'white'},
  Botao2:{
  position: 'absolute',
  margin: 10,
  top:590,
  left: 20,
  width: 270,
  padding: 20,
  height:62,
  color: 'white',
  borderRadius: 10,
  textAlign: 'center',
  backgroundColor: '#6F4A8E',

  
},
Nome:{
  fontSize: 26,
  color: 'white',
  position: 'absolute',
  top: 80,
  left: 190,
  zIndex: 2
},
Resultados:{
  fontSize: 12,
color: '#FFC107',
  position: 'absolute',
  top: 110,
  left: 190,
  zIndex: 2
}


})
