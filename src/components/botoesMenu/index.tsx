import React from "react";
import { Text, View } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  Octicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { styles } from "./styles";

export const BotoesMenu = () => {
  return (
    <View style={{ height: "77%" }}>
      <View style={styles.container}>
        <Ionicons
          style={{ transform: [{ rotateY: "180deg" }] }}
          name="pricetag"
          size={20}
          color="white"
        />
        <Text style={styles.textDestaques}>Loja</Text>
        <Text style={styles.textWallet}>(R$0,00)</Text>
        <Text style={styles.textDestaques}>V</Text>
      </View>
      <View style={styles.container}>
        <Ionicons
          style={{ transform: [{ scaleX: -1 }] }}
          name="newspaper-outline"
          size={20}
          color="white"
        />
        <Text style={styles.textDestaques}>Notícias</Text>
      </View>
      <View style={styles.container}>
        <Ionicons name="md-shield" size={20} color="white" />
        <Text style={styles.textDestaques}>Steam Guard</Text>
      </View>
      <View style={styles.container}>
        <Octicons name="bell-fill" size={20} color="white" />
        <Text style={styles.textDestaques}>Notificações</Text>
      </View>
      <View style={styles.container}>
        <MaterialIcons name="check" size={22} color="white" />
        <Text style={styles.textDestaques}>Confirmações</Text>
      </View>
      <View style={styles.container}>
        <MaterialIcons name="my-library-books" size={20} color="white" />
        <Text style={styles.textDestaques}>Biblioteca</Text>
      </View>
      <View style={styles.container}>
        <FontAwesome5 name="users" size={20} color="white" />
        <Text style={styles.textDestaques}>Comunidade</Text>
        <Text style={styles.textDestaques}>V</Text>
      </View>
      <View style={styles.container}>
        <Ionicons name="chatbubble-ellipses" size={20} color="white" />
        <Text style={styles.textDestaques}>Conversa</Text>
      </View>
      <View style={styles.containerMisc}>
        <Ionicons name="md-megaphone" size={14} color="grey" />
        <Text style={styles.textMisc}>
          Enviar comentário sobre o aplicativo
        </Text>
      </View>
      <View style={styles.containerMisc}>
        <Entypo name="cog" size={14} color="grey" />
        <Text style={styles.textMisc}>Configurações</Text>
      </View>
      <View style={styles.containerMisc}>
        <FontAwesome name="question-circle" size={14} color="grey" />
        <Text style={styles.textMisc}>Suporte</Text>
      </View>
    </View>
  );
};
