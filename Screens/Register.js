import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Phone number"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Create password"
          secureTextEntry={true}
          maxLength={4}
        />
      </View>

      <Text style={styles.forgotPassword}>Forgot password?</Text>

      <Button
        title="Login"
        onPress={() => {
          // Handle login button press here
        }}
        style={styles.loginButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff', // Replace with your desired background image or color
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    marginLeft: 130,
    color: 'black',
  },
  loginButton: {
    width: 300,
    marginTop: 20,
    fontSize: 25,
    color: 'white',
    backgroundColor: 'navy',
  },
});

export default RegisterScreen;