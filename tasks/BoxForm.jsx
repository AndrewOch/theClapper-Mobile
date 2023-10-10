import React, { useState } from "react";

import {
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableHighlight,
} from "react-native";
import styles from "../styles/styles";

export const BoxForm = () => {
    const [boxes, setBoxes] = useState([]);
    const [size, setSize] = useState("");
    const [borderRadius, setborderRadius] = useState("");
    const [alignSelf, setAlignSelf] = useState("center");
    const [color, setColor] = useState("");
  
    const handleAdd = () => {
      const newBox = {
        size: parseInt(size),
        borderRadius: parseInt(borderRadius),
        alignSelf: alignSelf,
        color: color,
      };
      setBoxes([...boxes, newBox]);
    };
  
    const handleRemove = () => {
      if (boxes.length > 0) {
        const updatedBoxes = [...boxes];
        updatedBoxes.pop();
        setBoxes(updatedBoxes);
      }
    };
  
    const handleClean = () => {
      setBoxes([]);
    };
  
    return (
      <View style={styles.body}>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.container}>
            <Box width={100} height={100} color="red" alignSelf="center" />
            <Box width={100} height={100} color="green" alignSelf="center" />
            {boxes.map((box, index) => {
              return (
                <Box
                  key={index}
                  width={box.size}
                  height={box.size}
                  color={box.color}
                  alignSelf={box.alignSelf}
                  borderRadius={box.borderRadius}
                />
              );
            })}
            <TextInput
              style={styles.textInput}
              placeholder="Size"
              onChangeText={(text) => setSize(text)}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Border radius"
              onChangeText={(text) => setborderRadius(text)}
            />
            <View style={styles.horizontalStack}>
              <Button
                title="Left"
                onPress={() => setAlignSelf("flex-start")}
              ></Button>
              <Button
                title="Center"
                onPress={() => setAlignSelf("center")}
              ></Button>
              <Button
                title="Right"
                onPress={() => setAlignSelf("flex-end")}
              ></Button>
            </View>
            <View style={styles.horizontalStack}>
              <TouchableHighlight onPress={() => setColor("red")}>
                <Box width={50} height={50} borderRadius={20} color="red" />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => setColor("green")}>
                <Box width={50} height={50} borderRadius={20} color="green" />
              </TouchableHighlight>
              <TouchableHighlight onPress={() => setColor("blue")}>
                <Box width={50} height={50} borderRadius={20} color="blue" />
              </TouchableHighlight>
            </View>
            <View style={styles.horizontalStack}>
              <Button
                title="Clean"
                disabled={boxes.length == 0}
                onPress={handleClean}
              ></Button>
              <Button
                title="Remove"
                disabled={boxes.length == 0}
                onPress={handleRemove}
              ></Button>
              <Button
                title="Add"
                onPress={handleAdd}
                disabled={!(size && color && alignSelf)}
              ></Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

export const Box = (props) => (
    <View
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
        alignSelf: props.alignSelf,
        borderRadius: props.borderRadius,
      }}
    />
  );