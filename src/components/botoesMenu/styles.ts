import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#292C33",
    gap: 5,
    padding: 18,
    borderBlockColor: "grey",
    borderStyle: "solid",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    maxHeight: 57,
    justifyContent:'space-between',
    alignItems:'center',
  },
  textDestaques: {
    paddingLeft: 15,
    padding: 0,
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
  },

  textWallet: {
    padding: 0,
    fontSize: 14,
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
  containerMisc: {
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#292C33",
    gap: 5,
    padding: 9,
    maxHeight: 50,
  },
  textMisc: {
    paddingLeft: 5,
    padding: 0,
    fontSize: 10,
    color: "white",
    fontWeight: "200",
  },
});
