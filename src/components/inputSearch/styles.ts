import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#292C33",
    opacity: 0.8,
    margin: 10,
    padding: Platform.OS === "android" ? 15 : 10,
    marginTop: 30,
    marginBottom: 20,
    marginRight: 90,
    borderRadius: 3,
    width: "70%",
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  icone: {
    marginLeft: 190,
  },
  inputText: {
    fontSize: 15,
    fontWeight: "bold",
    position:'absolute',
    marginLeft:45
  },
});
