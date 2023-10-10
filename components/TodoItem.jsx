import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CloseButton from "./CloseButton";
import todoStyles from "../styles/todo";
import CheckIcon from "./CheckIcon";

export default function TodoItem(props) {
  return (
    <View style={todoStyles.todoLine}>
      <TouchableOpacity
        style={todoStyles.todoLineTouch}
        onPress={() => props.toggleItem(props.index)}
      >
        {props.item.checked && <CheckIcon size={24} />}
        <Text style={todoStyles.todoLineText}>{props.item.text}</Text>
        <CloseButton
          style={todoStyles.closeButton}
          onPress={() => props.removeItem(props.index)}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
}
