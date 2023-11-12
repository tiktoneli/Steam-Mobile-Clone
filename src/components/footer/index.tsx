import React from "react";
import {
  View,
} from "react-native";
import { styles } from "./styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  Octicons,
} from "@expo/vector-icons";

export const Footer = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={{ transform: [{ rotateY: "180deg" }] }}
        name="pricetag"
        size={30}
        color="white"
      />
      <MaterialCommunityIcons
        name="newspaper-variant-outline"
        size={35}
        color="white"
      />
      <Ionicons name="md-shield" size={35} color="white" />
      <Octicons name="bell-fill" size={30} color="white" />
      <Feather name="menu" size={35} color="white" />
    </View>
  );
};
