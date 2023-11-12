import React from "react";
import { Text, Image, View } from "react-native";
import dwarf from "../../../assets/dwarf.jpg";
import gtacard from "../../../assets/gtacard.png";
import { styles } from "./styles";

export const Featured = () => {
  return (
    <View style={styles.container}>
      <Image source={dwarf} />
      <Text style={styles.textDestaques}>DESTAQUES E RECOMENDADOS</Text>
      <View style={styles.recommended}>
        <Image source={gtacard} />
      </View>
    </View>
  );
};
