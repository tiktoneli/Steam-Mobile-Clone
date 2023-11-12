import { StyleSheet, Text, View } from "react-native";
import { Header } from "./src/components/header";
import { styles } from "./styles";
import { Featured } from "./src/components/featured";
import { Footer } from "./src/components/footer";

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
        <Featured />
        <Footer />
    </View>
  );
}
