import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Form2Screen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          // Handle back button press here
        }}
      >
        {/* Replace with the actual back arrow icon */}
        <Text>Back</Text>
      </TouchableOpacity>

      <View style={styles.firstLayout}>
        {/* Add educational level picker */}
        <TextInput
          style={styles.textInput}
          placeholder="Educational Level"
        />

        {/* Add region picker */}
        <TextInput
          style={styles.textInput}
          placeholder="Select region"
        />

        {/* Add district input field */}
        <TextInput
          style={styles.textInput}
          placeholder="District"
        />

        {/* Add residential address input field */}
        <TextInput
          style={styles.textInput}
          placeholder="Residential address"
        />

        {/* Add email address input field */}
        <TextInput
          style={styles.textInput}
          placeholder="Email address"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Enter Ghana card number:</Text>

        {/* Add Ghana card number input field */}
        <TextInput
          style={styles.textInput}
          placeholder="GHA-000000000-0"
          keyboardType="default"
        />
      </View>

      <Button
        title="Save and Continue"
        onPress={() => {
          // Handle save and continue button press here
        }}
        style={styles.saveContinueButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#005f73',
  },
  backButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  firstLayout: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
    color: '#fff',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    color: '#fff',
  },
  saveContinueButton: {
    width: 400,
    marginHorizontal: 50,
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#1976D2',
  },
});

export default Form2Screen;