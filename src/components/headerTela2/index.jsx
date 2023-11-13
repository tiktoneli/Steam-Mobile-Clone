import React from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { styles } from "./styles";
import perfsteam from "../../../assets/perfsteam.png";
import { Ionicons } from "@expo/vector-icons";

export const Header2 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="chevron-back-outline" size={35} color="white" style={styles.iconeBack} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textoBotoes}>MENU</Text>
      </TouchableOpacity>
      <Image source={perfsteam} style={styles.fotoPerfil} />
    </View>
  );
};
