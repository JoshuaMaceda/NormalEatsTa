import { Alert } from 'react-native';
import { router } from 'expo-router';

export const handleLogin = (username: string, password: string) => {
  if (!username || !password) {
    Alert.alert('Error', 'Please enter both username and password');
    return;
  }

  // Simulate login validation
  if (username === 'user' && password === 'password') {
    // Successful login - redirect to dashboard
    router.replace('/Screens/Dashboard/dashboard_page');
  } else {
    Alert.alert('Login Failed', 'Invalid credentials');
  }
};

export default handleLogin;

