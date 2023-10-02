import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Platform,
  ScrollView,
  Switch,
  Button,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

const fontStyles = ["normal", "italic"];

const App = () => {
  return <AuthForm />;
};

export const InputTask1 = () => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={{ marginVertical: 16, color: "black" }}>
        {name ? `Hi ${name}!` : "What is your name?"}
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
      />
    </View>
  );
};

export const AuthForm = () => {
  const correctLogin = "username";
  const correctPassword = "password";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setError] = useState(false);
  const [auth, setAuth] = useState(false);

  const handlePress = () => {
    if (login === correctLogin && password === correctPassword) {
      setError(false);
      setAuth(true);
    } else {
      setError(true);
    }
  };

  return (
    <View style={styles.container}>
      {auth ? (
        <Text style={{ color: "black" }}>Welcome!</Text>
      ) : (
        <>
          <Text style={{ color: "black" }}>Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Login"
            onChangeText={(text) => setLogin(text)}
          />
          <Text style={{ color: "black" }}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
          />
          <Text style={{ color: "red" }}>
            {showError && "Incorrect login or password!"}
          </Text>
          <Button title="Sign in" onPress={handlePress}></Button>
        </>
      )}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#ddd",
    width: "100%",
    gap: 20,
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 80,
  },
  textInput: {
    padding: 8,
    backgroundColor: "#f5f5f5",
    alignSelf: "stretch",
    marginHorizontal: 20,
    borderRadius: 5,
  },
});

export default App;
