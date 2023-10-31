import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, View, TextInput, FlatList, SafeAreaView } from "react-native";
import TodoItem from "../components/TodoItem";
import styles from "../styles/styles";
import todoStyles from "../styles/todo";
import todoStore from "../stores/TodoStore";
import logStore from "../stores/LogStore";
import { observer } from "mobx-react";

const TodoListScreen = observer(({ navigation }) => {
  const [text, setText] = useState("");

  const addItem = () => {
    todoStore.addItem(text);
    logStore.addLog(`Добавлена задача ${text}`)
    setText("");
  };

  const removeItem = (item) => {
    todoStore.removeItem(item);
    logStore.addLog(`Удалена задача ${item.text}`)
  };

  const toggleItem = (item) => {
    todoStore.toggleItem(item);
    logStore.addLog(`Задача ${item.text} отмечена как ${item.checked ? 'Выполнена' : 'Не выполнена'}`)
  };

  const keyExtractor = (index) => {
    return index.toString();
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
              removeItem={() => removeItem(item)}
              toggleItem={() => toggleItem(item)}
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
            title="Логи"
            onPress={() => {
              navigation.navigate("Logs", { data: logStore.logs });
            }}
          ></Button>
          <Button
            title="Выполненные"
            onPress={() => {
              navigation.navigate("Completed", { data: todoStore.checkedTodos() });
            }}
          ></Button>
          <Button title="Добавить" onPress={() => addItem()}></Button>
        </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
});

export default TodoListScreen;