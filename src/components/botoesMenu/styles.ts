import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#292C33",
    gap: 5,
    padding: 20,
    borderBlockColor: "grey",
    borderStyle: "solid",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    maxHeight: 70,
  },
  textDestaques: {
    paddingLeft:15,
    padding: 3,
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  textWallet: {
    padding: 3,
    fontSize: 18,
    color: "#63B755",
    fontWeight: "400",
  },
  miscInfo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#292C33",
    gap: 5,
    padding: 20,
    borderBlockColor: "grey",
    borderStyle: "solid",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    maxHeight: 70,
  },
});
