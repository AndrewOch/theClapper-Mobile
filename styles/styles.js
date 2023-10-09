import { StyleSheet } from "react-native";

export default StyleSheet.create({
  body: {
    backgroundColor: "#ddd",
    width: "100%",
    height: "100%",
    paddingVertical: 50,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ddd",
    width: "100%",
    gap: 20,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
    width: "100%",
    gap: 20,
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 80,
  },
  horizontalStack: {
    flexDirection: "row",
    gap: 30,
  },
  textInput: {
    padding: 8,
    backgroundColor: "#f5f5f5",
    alignSelf: "stretch",
    marginHorizontal: 20,
    borderRadius: 5,
  },
  actionBar: {
    display: "flex",
    flexDirection: "row",
    gap: 30
  }
});
