import { Alert } from 'react-native';

export const handleLogin = () => {
  Alert.alert(
    'Login', 
    'Functionality can be added here later ;))', 
    [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false }
  );
};
