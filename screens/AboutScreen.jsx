import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  Button,
} from "react-native";
import styles from "../styles/styles";

export const AboutScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text>About Screen</Text>
        <Button title="Back" onPress={() => navigation.goBack()} />
      </View>
    );
  };