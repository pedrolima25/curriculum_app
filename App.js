import React from 'react';
import { StyleSheet, View, Image, Text, SafeAreaView, Alert, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/foto.jpeg';
import Card from './src/components/Card';

const App = () => {


  function handleRedeSocial(redes_social) {
    switch (redes_social) {
      case 'linkedin':
        Alert.alert('Meu Linkedin', 'https://www.linkedin.com/in/alessandro-pedro-figueiredo-lima-87732b168/')
        break

      case 'github':
        Alert.alert('Meu Github', 'https://www.githun.com/in/alessandro-pedro-figueiredo-lima-87732b168/')
        break

      case 'facebook':
        Alert.alert('Meu Facebook', 'https://www.facebook.com/in/alessandro-pedro-figueiredo-lima-87732b168/')
        break
    }
  }

  return (
    <>
      <View style={estilo.pagina}>
        <View style={estilo.Container_cabecalho}>
          <Image source={foto} style={estilo.foto} />
          <Text style={estilo.nome}>ALESSANDRO PEDRO </Text>
          <Text style={estilo.cargo}>Desenvolvedor Web</Text>
          <View style={estilo.redes_socias}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')} >
              <Icon name="github" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
              <Icon name="facebook" size={30} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={30} />
            </TouchableOpacity>
          </View>
        </View>

        <Card tilulo="Formação Academica">
          <Text style={estilo.card_content_text}>Anhanguera-Ampli</Text>
          <Text style={estilo.card_content_text}>Estácio</Text>
          <Text style={estilo.card_content_text}>Senai</Text>
        </Card>
        <Card tilulo="Experiencia Profissonal">
          <Text style={estilo.card_content_text}>Anhanguera-Ampli</Text>
          <Text style={estilo.card_content_text}>Estácio</Text>
          <Text style={estilo.card_content_text}>Senai</Text>
        </Card>
      </View>
    </>
  );
};

const estilo = StyleSheet.create({
  pagina: {
    backgroundColor: '#E7E7E7',
    flex: 1
  },

  Container_cabecalho: {

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50

  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 125
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },

  cargo: {
    color: '#939393',
    marginBottom: 10

  },

  redes_socias: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20

  },

  card_content_text :{
    color: '#939393',
  
  }


})

export default App;
