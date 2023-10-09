import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  Button,
} from "react-native";
import styles from "../styles/styles";

export const HomeScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="About" onPress={() => navigation.navigate("About")} />
      </View>
    );
  };