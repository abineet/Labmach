import { Stack } from "expo-router";
import {StyleSheet} from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTintColor: '#fff',
        headerTitleStyle: styles.headertext,
      }}>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="login" options={{ headerShown: false }}/>
      <Stack.Screen name="register" options={{ headerShown: false }}/>
      <Stack.Screen name="dashboard" options={{ headerShown: false }}/>
    </Stack>
  );
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#f4511e',
    },
    headertext: {
      fontWeight: 'bold',
    }
});
