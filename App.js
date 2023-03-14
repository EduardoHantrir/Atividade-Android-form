import react, {useEffect, useState} from "react";
import {View, Text, TextInput, TetImput, TouchableOpacity, FlatList,
        ScrollView, Alert, Image, StyleSheet} from 'react-native';
import Estilo from "./Estilo";

        const app = ()=> {
          return(
            <View>
              <Text style={Estilo.Texto2}>Aula 3 O alex é um gostoso
                Componentes
              </Text>
              <Textimput style={{border:1, bordercolor:"red",borderWidth:1, borderRadius:100, width: 100}}
            </View>
          )
        }
  export default app;