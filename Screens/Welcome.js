import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to our CediLoan!</Text>

      <Button
        title="Login"
        onPress={() => {
          // Handle login button press here
        }}
        style={styles.loginButton}
      />

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? Register now!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', // Replace with your desired background image or color
  },
  welcomeText: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    width: 320,
    marginTop: 20,
    marginBottom: 5,
    fontSize: 35,
    backgroundColor: 'navy',
    color: 'white',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 20,
    color: 'black',
  },
});

export default WelcomeScreen;
