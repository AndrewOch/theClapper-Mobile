import { StyleSheet } from "react-native";

export default StyleSheet.create({
  todoLine: {
    alignSelf: "stretch",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoLineTouch: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  todoLineText: {
    flex: 1,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  flatList: {
    alignSelf: "stretch",
  },
});
