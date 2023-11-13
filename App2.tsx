import { View, Text } from "react-native";
import { Header2 } from "./src/components/headerTela2";
import { styles } from "./styles2";
import { Footer } from "./src/components/footer";
import { BotoesMenu } from "./src/components/botoesMenu";


export default function App() {
  return (
    <View style={styles.container}>
        <Header2/>
        <BotoesMenu />
        <Footer/>
    </View>
  );
}
