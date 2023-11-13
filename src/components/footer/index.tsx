import React from "react";
import { TouchableOpacity, View } from "react-native";
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
      <TouchableOpacity>
        <Ionicons
          style={{ transform: [{ rotateY: "180deg" }] }}
          name="pricetag"
          size={30}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialCommunityIcons
          name="newspaper-variant-outline"
          size={35}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="md-shield" size={35} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons name="bell-fill" size={30} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="menu" size={35} color="white" />
      </TouchableOpacity>
    </View>
  );
};
