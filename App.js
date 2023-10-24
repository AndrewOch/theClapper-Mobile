import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "./screens/HomeScreen";
import { AboutScreen } from "./screens/AboutScreen";
import TodoListScreen from "./screens/TodoListScreen";
import CheckedTodoListScreen from "./screens/CompletedTodoList";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, View, Text } from "react-native";
import { observer } from "mobx-react-lite";
import LogListScreen from "./screens/LogList";

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
        <Stack.Screen name={"Logs"} component={LogListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MobXView = observer(() => {
  clickerStore = rootStore.clickerStore;

  const handleOnClick = () => {
    clickerStore.actionClick();
  };

  const handleOnReset = () => {
    clickerStore.resetClick();
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Count: {clickerStore.count}</Text>
        <Text>Double: {clickerStore.doubleCount}</Text>
        <Button onPress={handleOnClick} title={"Press"}></Button>
        <Button onPress={handleOnReset} title={"Press"}></Button>
      </View>
    </SafeAreaView>
  );
});

export default App;
