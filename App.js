import React from 'react';
import { View, StyleSheet } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import LoginScreen from './Screens/Login';
import RegisterScreen from './Screens/Register';
import HomeScreen from './Screens/Home';
import Form1Screen from './Screens/Form1';
import Form2Screen from './Screens/Form2';
import Form3Screen from './Screens/Form3';
import ProfileScreen from './Screens/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomeScreen />
      <LoginScreen />
      <RegisterScreen />
      <HomeScreen />
      <Form1Screen />
      <Form2Screen />
      <Form3Screen />
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
