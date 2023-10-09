import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "../styles/styles";

export default function TodoListScreen() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    let newTodos = [...todos];
    newTodos.push(text);
    setTodos(newTodos);
    setText("");
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>NEW:</Text>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item }) => (
            <View style={styles.todoLine}>
              <TouchableOpacity style={styles.todoLineTouch}>
                <Text style={{ flex: 3 }}>{item}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => setText(newText)}
          value={text}
        ></TextInput>
        <Button title=" ADD " onPress={() => addTodo()}></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}