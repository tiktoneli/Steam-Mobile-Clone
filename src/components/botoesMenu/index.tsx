import React from "react";
import { Text, View } from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons, Octicons } from "@expo/vector-icons";
import { styles } from "./styles";

export const BotoesMenu = () => {
  return (
    <View style={{ height: "77%" }}>
      <View style={styles.container}>
        <Ionicons
          style={{ transform: [{ rotateY: "180deg" }] }}
          name="pricetag"
          size={30}
          color="white"
        />
        <Text style={styles.textDestaques}>Loja</Text>
        <Text style={styles.textWallet}>(R$0,00)</Text>
      </View>
      <View style={styles.container}>
        <Ionicons
          style={{transform: [{scaleX: -1}]}}
          name="newspaper-outline"
          size={28}
          color="white" />
        <Text style={styles.textDestaques}>Notícias</Text>
      </View>
      <View style={styles.container}>
      <Ionicons name="md-shield" size={25} color="white" />
        <Text style={styles.textDestaques}>Steam Guard</Text>
      </View>
      <View style={styles.container}>
      <Octicons name="bell-fill" size={24} color="white" />
        <Text style={styles.textDestaques}>Notificações</Text>
      </View>
      <View style={styles.container}>
      <MaterialIcons name="check" size={26} color="white" />
        <Text style={styles.textDestaques}>Confirmações</Text>
      </View>
      <View style={styles.container}>
      <MaterialIcons name="my-library-books" size={26} color="white" />
        <Text style={styles.textDestaques}>Biblioteca</Text>
      </View>
      <View style={styles.container}>
      <FontAwesome5 name="users" size={24} color="white" />
        <Text style={styles.textDestaques}>Comunidade</Text>
      </View>
      <View style={styles.container}>
      <Ionicons name="chatbubble-ellipses" size={26} color="white" />
        <Text style={styles.textDestaques}>Conversa</Text>
      </View>
    </View>
  );
};
