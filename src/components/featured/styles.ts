import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#233E5B",
  },
  recommended: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 9,
    borderRadius: 2,
  },
  textDestaques: {
    margin: 10,
    fontSize: 17,
    color: "white",
    fontWeight: "400",
  },
  imageRecommended: {
    width: 310,
    maxHeight: 230,
    resizeMode: "contain",
  },
  featuredImage: {
    flex: 1,
    maxWidth: 500,
    maxHeight: 200,
  },
});
