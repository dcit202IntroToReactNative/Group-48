import React, {useState} from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, ToastAndroid} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(true);
  const handleResend = () => {
    ToastAndroid.show('Sent', ToastAndroid.SHORT);
  };
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ImageBackground source={require('../assets/loan_img.jpg')} style={{ ...styles.backgroundImage, width, height }}>
      <View style={styles.container}>
        <Text style={styles.headingText}>Create Account</Text>

        {/* Phone Number Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="call-outline" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="numeric"
          />
        </View>

        {/* Create Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Create password"
            secureTextEntry={true}
            maxLength={4}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <Ionicons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
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
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.otpContainer}>
          <TextInput
            style={styles.otpInput}
            placeholder="Get OTP"
            keyboardType="numeric"
            secureTextEntry={true}
          />

          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.resendContainer} onPress={handleResend}>
          <Text style={styles.resendText}>Did not receive code? <Text style={{color: 'Navy'}}>Resend</Text></Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
              navigation.navigate('Home');
          }}>
          <Text style={styles.registerButtonText}>Register</Text>
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
  icon: {
    marginRight: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  otpInput: {
    width: 290,
    height: 50,
    backgroundColor: '#F0F0F0',
    marginRight: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  sendButton: {
    backgroundColor: '#4169E1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  resendContainer: {
    alignItems: 'flex-start',
    marginBottom: 10,
    marginLeft: 80,
  },
  resendText: {
    color: 'black',
  },
  registerButton: {
    width: 300,
    height: 50,
    backgroundColor: '#000080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 25,
  },
});

export default RegisterScreen;
