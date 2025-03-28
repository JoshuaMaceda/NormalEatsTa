import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import { handleLogin } from "./auth";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CHANGING THE GAME{"\n"}WITH MEAL</Text>
      <View style={styles.logoContainer}>
        <Image source={{ uri: "https://via.placeholder.com/150" }} style={styles.logo} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Signup</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
