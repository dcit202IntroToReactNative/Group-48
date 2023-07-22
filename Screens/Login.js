import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, TextInputLayout, Button} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInputLayout
        label="Phone number"
        style={styles.inputLayout}
      >
        <TextInput
          style={styles.input}
          keyboardType="number"
        />
      </TextInputLayout>
      <TextInputLayout
        label="Create password"
        style={styles.inputLayout}
      >
        <TextInput
          style={styles.input}
          keyboardType="numberPassword"
          maxLength={4}
        />
      </TextInputLayout>
      <Button
        title="Forgot password?"
        style={styles.button}
      />
      <Button
        title="Login"
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputLayout: {
    width: 300,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#0000ff',
    color: '#ffffff',
    borderRadius: 5,
  },
});

export default LoginScreen;