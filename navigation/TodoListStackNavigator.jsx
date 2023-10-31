import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import TodoListScreen from "./screens/TodoListScreen";
import CheckedTodoListScreen from "./screens/CompletedTodoList";

const Stack = createNativeStackNavigator();

export const NavigationComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Home"} tit component={HomeScreen} />
      <Stack.Screen name={"Todo List"} component={TodoListScreen} />
      <Stack.Screen name={"About"} component={AboutScreen} />
      <Stack.Screen name={"Completed"} component={CheckedTodoListScreen} />
    </Stack.Navigator>
  );
};
