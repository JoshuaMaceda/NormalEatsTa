import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Screens/Login_auth/login_page" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Screens/Dashboard/dashboard_page" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}

//