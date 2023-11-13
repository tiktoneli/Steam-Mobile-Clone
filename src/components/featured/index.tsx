import React, { useState } from "react";
import { FlatList, Text, Image, View, TouchableOpacity } from "react-native";
import dwarf from "../../../assets/dwarf.jpg";
import baldur from "../../../assets/baldur.png";
import hollow from "../../../assets/hollow.png";
import middle from '../../../assets/middle.png'
import hunt from '../../../assets/hunt.png'
import { styles } from "./styles";

export const Featured = () => {
  const [images, setImages] = useState([
    {
      name: "Baldur's gate 3",
      source: baldur,
    },
    {
      name: "Hunt Showdown",
      source: hunt,
    },
    {
      name: "Middle Earth",
      source: middle,
    },
    {
      name: "Hollow Knight",
      source: hollow,
    },
  ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.featuredImage} source={dwarf} />
      </TouchableOpacity>
      <Text style={styles.textDestaques}>DESTAQUES E RECOMENDADOS</Text>
      <FlatList
        horizontal={true}
        data={images}
        renderItem={({ item }) => (
          <Image
            source={item.source}
            style={styles.imageRecommended}
            alt={item.name}
          />
        )}
      />
    </View>
  );
};
