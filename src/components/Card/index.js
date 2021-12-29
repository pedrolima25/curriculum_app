import React  from 'react';
import {View,Text } from 'react-native';
import estilo from './style';

const Card = ({tilulo, children}) => {
    return(
        <View style={estilo.card_conteiner}>
          < View style={estilo.card}>
              <View style={estilo.card_header}>
              <Text >{tilulo}</Text>
              </View>
            <View style={estilo.card_content}>
            {children}
            </View>
          </View>
        </View>
    )
}

export default Card