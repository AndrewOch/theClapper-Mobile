import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Ionicons, Feather } from "react-native-vector-icons"; // Импортируйте нужные иконки

import { HomeScreen } from "../screens/HomeScreen";
import { AboutScreen } from "../screens/AboutScreen";
import TodoListScreen from "../screens/TodoListScreen";
import CheckedTodoListScreen from "../screens/CompletedTodoList";
import { SettingsScreen } from "../screens/SettingsScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { NewsScreen } from "../screens/NewsScreen";
import { Image, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const titleImage = require("../assets/images/logo.png");

export const HomeStack = () => {
  let navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Home Screen"}
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image source={titleImage} style={{ width: 32, height: 32 }} />
          ),
          headerRight: () => (
            <Button onPress={() => navigation.navigate("About")} title="About" />
          ),
        }}
      />
      <Stack.Screen name={"Todo List"} component={TodoListScreen} />
      <Stack.Screen name={"About"} component={AboutScreen} />
      <Stack.Screen name={"Completed"} component={CheckedTodoListScreen} />
    </Stack.Navigator>
  );
};