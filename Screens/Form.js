import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FormScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = () => {
    // Process and submit the form data
    // You can send the data to a server or perform any other action here
    console.log({
      firstName,
      lastName,
      email,
      password,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Registration Form</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.submitButton} onPress={handleFormSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    color: 'black',
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FormScreen;
