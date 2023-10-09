import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { useRoute } from '@react-navigation/native';

import {
  Button,
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import TodoItem from "../components/TodoItem";
import styles from "../styles/styles";
import todoStyles from "../styles/todo";

export default function CompletedTodoListScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={todoStyles.flatList}
          data={data}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item, index }) => (
            <Text>{item.text}</Text>
            // <TodoItem
            //   item={item}
            //   removeItem={removeItem}
            //   toggleItem={toggleItem}
            //   index={index}
            // />
          )}
        />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
