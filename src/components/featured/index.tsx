import React from "react";
import { Text, Image, View } from "react-native";
import dwarf from "../../../assets/dwarf.jpg";
import baldur from "../../../assets/baldur.png";
import hollow from "../../../assets/hollow.png";
import { styles } from "./styles";

export const Featured = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.featuredImage} source={dwarf} />
      <Text style={styles.textDestaques}>DESTAQUES E RECOMENDADOS</Text>
      <View style={styles.recommended}>
        <Image style={styles.imageRecommended} source={baldur} />
        <Image style={styles.imageRecommended} source={hollow} />
      </View>
    </View>
  );
};
