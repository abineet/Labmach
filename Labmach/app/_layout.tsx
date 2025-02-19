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
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
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
