import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackgroundImage from '../Components/Background';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <BackgroundImage source={require('../assets/loan_img.jpg')}>
      <View style={styles.container}>    
        <Text style={styles.welcomeText}>Welcome to CediLoan!</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.loginButton}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account? <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color: 'navy', fontSize: 20}}>Register now!</Text></TouchableOpacity></Text>
          
        </View>
      </View>
    </BackgroundImage>      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    marginBottom: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  loginButton: {
    width: 320,
    paddingVertical: 10,
    backgroundColor: 'navy',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
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
