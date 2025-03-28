import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import styles from './login_style';
import { handleLogin } from '../../auth';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
// to simulate login credential 

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
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handleLogin(username, password)}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Signup</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;