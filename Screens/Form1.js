import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Form1Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLayout}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            // Handle back button press here
          }}
        >
          {/* Replace with the actual back arrow icon */}
          <Text>Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.secondLayout}>
        <Text style={styles.label}>Enter your name as it appears on your ID card</Text>

        <TextInput
          style={styles.textInput}
          placeholder="First name"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Middle name (Optional)"
        />

        <TextInput
          style={styles.textInput}
          placeholder="Last name"
        />

        {/* Add date of birth picker */}
        <Button
          title="Date of birth"
          onPress={() => {
            // Handle date of birth picker here
          }}
          color="#000"
        />

        {/* Add occupation picker */}
        <TextInput
          style={styles.textInput}
          placeholder="Occupation"
        />

        {/* Add monthly income picker */}
        <TextInput
          style={styles.textInput}
          placeholder="Monthly Income"
        />

        {/* Add salary pay day picker */}
        {/* Replace NumberPicker with appropriate picker component */}
        <TextInput
          style={styles.textInput}
          placeholder="Salary PayDay"
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
  firstLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  backButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondLayout: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 5,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: '#fff',
  },
  saveContinueButton: {
    width: 400,
    marginHorizontal: 50,
    marginTop: 25,
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#1976D2',
  },
});

export default Form1Screen;