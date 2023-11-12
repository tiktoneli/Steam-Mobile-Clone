import React from "react";
import { Image, TouchableOpacity, Text, View, TextInput, Button } from "react-native";
import { styles } from "./styles";
import { InputSearch } from "../inputSearch";
import perfsteam from '../../../assets/perfsteam.png'

export const Header = () => {
  return (
    <View style={styles.container}>
      <InputSearch />
      <View style={styles.botoesHeader}>
        <TouchableOpacity>
          <Text style={styles.textoBotoes}>MENU V</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.textoBotoes}>LISTA DE DESEJOS</Text>
        </TouchableOpacity>
        <View style={styles.botoesCarteira}>
          <TouchableOpacity>
            <Text style={styles.textoBotoes}>CARTEIRA</Text>
          </TouchableOpacity>
          <Text style={styles.textoCarteira}> (R$ 0,00)</Text>
        </View>
      <Image source={perfsteam} style={styles.fotoPerfil}/>
      </View>
    </View>
  );
};
