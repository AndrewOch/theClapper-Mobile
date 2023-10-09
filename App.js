import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InputTask } from "./tasks/InputTask";
import { AuthForm } from "./tasks/AuthForm";
import { BoxForm } from "./tasks/BoxForm";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import TodoListScreen from "./screens/TodoList";

const Stack = createNativeStackNavigator();

const App = () => {
  return <NavigationComponent/>;
};

export const NavigationComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={HomeScreen} />
        <Stack.Screen name={"About"} component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
