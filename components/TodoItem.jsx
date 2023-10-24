import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import CloseButton from "./CloseButton";
import todoStyles from "../styles/todo";
import CheckIcon from "./CheckIcon";

export default function TodoItem(props) {
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(props.checked);

  const remove = () => {
    setVisible(false);
    props.removeItem(props.index);
  };

  const toggle = () => {
    setChecked(!checked);
    props.toggleItem(props.index);
  };

  return (
    <>
      {visible && (
        <View style={todoStyles.todoLine}>
          <TouchableOpacity
            style={todoStyles.todoLineTouch}
            onPress={() => toggle()}
          >
            {checked && <CheckIcon size={24} />}
            <Text style={todoStyles.todoLineText}>{props.item.text}</Text>
            <CloseButton
              style={todoStyles.closeButton}
              onPress={() => remove()}
              size={24}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
