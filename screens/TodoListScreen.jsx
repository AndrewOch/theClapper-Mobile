import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, View, TextInput, FlatList, SafeAreaView } from "react-native";
import TodoItem from "../components/TodoItem";
import styles from "../styles/styles";
import todoStyles from "../styles/todo";
import todoStore from "../stores/TodoStore";
import logStore from "../stores/LogStore";

export default function TodoListScreen() {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const addItem = () => {
    todoStore.addItem(text);
    setText('');
  }

  const removeItem = (index) => {
    todoStore.removeItem(index);
  }

  const toggleItem = (index) => {
    todoStore.toggleItem(index);
  }

  const keyExtractor = (index) => {
    return index.toString();
  };

  const checkedTodos = () => {
    const items = [...todos];
    return items.filter((item) => item.checked);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <FlatList
          style={todoStyles.flatList}
          data={todoStore.todos}
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
              navigation.navigate("Completed", { data: checkedTodos() });
            }}
          ></Button>
          <Button
            title="Добавить"
            onPress={() => addItem()}
          ></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
