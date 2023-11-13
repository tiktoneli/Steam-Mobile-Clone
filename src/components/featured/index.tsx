import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import dwarf from "../../../assets/dwarf.jpg";
import baldur from "../../../assets/baldur.png";
import hollow from "../../../assets/hollow.png";
import { styles } from "./styles";

export const Featured = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.featuredImage} source={dwarf} />
      </TouchableOpacity>
      <Text style={styles.textDestaques}>DESTAQUES E RECOMENDADOS</Text>
      <View style={styles.recommended}>
        <TouchableOpacity>
          <Image style={styles.imageRecommended} source={baldur} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.imageRecommended} source={hollow} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
