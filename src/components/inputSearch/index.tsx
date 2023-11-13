import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FontAwesome5, Ionicons, Entypo } from "@expo/vector-icons";
import { useRef, useEffect } from "react";

export const InputSearch = () => {
  const ref = React.useRef<TextInput>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <View style={styles.input}>
        <FontAwesome5 name="steam" size={28} color="#62626A" />
        <Ionicons style={styles.icone} name="search" size={32} color="#62626A" />
      <TextInput
        style={styles.inputText}
        placeholder="  STEAM©"
        placeholderTextColor="#62626A"
      ></TextInput>
      <View>
        <TouchableOpacity>
          <Entypo
            style={{ marginLeft: 35 }}
            name="dots-three-vertical"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
