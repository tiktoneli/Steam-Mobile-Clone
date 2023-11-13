import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "#202126",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
  botoesHeader: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#202126",
    gap: 30,
    marginLeft: 23,
  },
  botoesCarteira: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#202126",
    justifyContent: "flex-start",
  },
  textoBotoes: {
    color: "white",
  },
  textoCarteira: {
    color: "#4890C2",
  },
  fotoPerfil: {
    maxWidth: 50,
    height: 50,
    borderRadius: 2,
    marginRight: 5,
    flex: 1,
    marginBottom: 55,
    alignSelf: "flex-end",
  },
});
