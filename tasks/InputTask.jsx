import React, { useState } from "react";

import {
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import styles from "../styles/styles";

export const InputTask = () => {
    const [name, setName] = useState("");
    const [showName, setShowName] = useState("");
  
    const handlePress = () => {
      if (name) {
        setShowName(name);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={{ marginVertical: 16, color: "black" }}>
          {showName ? `Hi ${showName}!` : "What is your name?"}
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setName(text)}
        />
        <Button title="Press me" onPress={handlePress}></Button>
      </View>
    );
  };