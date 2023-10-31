import { StatusBar } from "expo-status-bar";
import React from "react";

import { View, FlatList, SafeAreaView } from "react-native";
import CheckedTodoItem from "../components/CheckedTodoItem";
import styles from "../styles/styles";
import todoStyles from "../styles/todo";
import LogItem from "../components/LogItem";

export default function LogListScreen({ route }) {
  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={todoStyles.flatList}
          data={route.params.data}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item, index }) => <LogItem text={item.text} />}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
