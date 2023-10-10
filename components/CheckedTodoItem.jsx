import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import todoStyles from "../styles/todo";
import CheckIcon from "./CheckIcon";

export default function TodoItem(props) {
  return (
    <View style={todoStyles.todoLine}>
      <TouchableOpacity style={todoStyles.todoLineTouch}>
        <CheckIcon size={24} />
        <Text style={todoStyles.todoLineText}>{props.item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
