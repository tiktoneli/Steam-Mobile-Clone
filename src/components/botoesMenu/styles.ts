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
    maxHeight: 70,
    justifyContent:'space-between',
    alignItems:'center',
  },
  containerBody: {
    borderBlockColor: "grey",
    borderStyle: "solid",
    height:565
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
  containerMisc: {
    flexDirection: "row",
    justifyContent:'flex-start',
    backgroundColor: "#292C33",
    gap: 12,
    padding: 8,
  },
  textMisc: {
    fontSize: 13,
    color: "white",
    fontWeight: "200",
  },
});
