import React, { useState } from "react";

import {
  Text,
  View,
  Button,
  TextInput,
} from "react-native";
import styles from "../styles/styles";

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