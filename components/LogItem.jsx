import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import todoStyles from "../styles/todo";

export default function LogItem(props) {
  return (
    <View style={todoStyles.todoLine}>
      <TouchableOpacity style={todoStyles.todoLineTouch}>
        <Text style={todoStyles.todoLineText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
