import { StatusBar } from "expo-status-bar";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
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

export default function TodoListScreen() {
  const navigation = useNavigation();
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [checkedFilter, setCheckedFilter] = useState(false);

  const addItem = () => {
    setTodos([...todos, { text: text, checked: false }]);
    setText("");
  };

  const toggleItem = (index) => {
    let newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const removeItem = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const keyExtractor = (index) => {
    return index.toString();
  };

  const checkedTodos = () => {
    const items = [...todos]
    const serializableCheckedTodos = items.filter(item => item.checked).map(todo => ({
      text: todo.text,
      checked: todo.checked
    }));
    return 
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={todoStyles.flatList}
          data={todos}
          keyExtractor={(item, index) => keyExtractor(index)}
          renderItem={({ item, index }) => (
            <TodoItem
              item={item}
              removeItem={removeItem}
              toggleItem={toggleItem}
              index={index}
            />
          )}
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(newText) => setText(newText)}
          placeholder={"Введите название"}
          value={text}
        />
        <View style={styles.actionBar}>
          <Button
            title="Выполненные"
            onPress={() => { 
              navigation.navigate("Completed", { checkedTodos })
            }
          }
          ></Button>
          <Button title="Добавить" onPress={() => addItem()}></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
