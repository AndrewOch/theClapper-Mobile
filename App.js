import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InputTask } from "./tasks/InputTask";
import { AuthForm } from "./tasks/AuthForm";
import { BoxForm } from "./tasks/BoxForm";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import TodoListScreen from "./screens/TodoListScreen";
import CheckedTodoListScreen from "./screens/CompletedTodoList";

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationComponent />;
};

export const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} tit component={HomeScreen} />
        <Stack.Screen name={"Todo List"} component={TodoListScreen} />
        <Stack.Screen name={"About"} component={AboutScreen} />
        <Stack.Screen name={"Completed"} component={CheckedTodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
