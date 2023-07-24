import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={require('../assets/loan_img.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Login</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry={true}
            maxLength={4}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 10,
    backgroundColor: 'transparent',
  },
  headingText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  forgotPasswordButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  forgotPasswordText: {
    color: 'black',
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default RegisterScreen;
