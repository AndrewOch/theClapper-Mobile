import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  ScrollView,
  Switch,
  Button,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

const fontStyles = ["normal", "italic"];

const App = () => {
  return (
      <InputTask1/>
  );
}

export const InputTask1 = () => {
  const [name, setName] = useState("");

  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        padding: 16,
      }}>
      <Text style={{ marginVertical: 16 }}>
        {name ? `Hi ${name}!` : "What is your name?"}{" "}
      </Text>
      <TextInput
        style={{ padding: 8, backgroundColor: "#f5f5f5" }}
        onChangeText={(text) => setName(text)} />{" "}
    </View>
  );
}

export const Box = (props) => (
  <View
    style={{
      width: props.width,
      height: props.height,
      backgroundColor: props.color,
      alignSelf: props.alignSelf,
      borderRadius: props.borderRadius
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 80,
  },
});

export default App;