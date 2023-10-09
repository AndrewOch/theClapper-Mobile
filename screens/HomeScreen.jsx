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
        <Button title="Открыть список задач" onPress={() => navigation.navigate("Todo List")} />
      </View>
    );
  };