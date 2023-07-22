import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const Form3Screen = () => {
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
        <View style={styles.emergencyContactContainer}>
          <Text style={styles.emergencyContactTitle}>Emergency contact 1:</Text>

          {/* Add Name input field */}
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            keyboardType="default"
          />

          <View style={styles.phoneNumberContainer}>
            {/* Add Phone number input field */}
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone number"
              keyboardType="number-pad"
            />

            {/* Add Contacts button */}
            <TouchableOpacity
              style={styles.contactsButton}
              onPress={() => {
                // Handle contacts button press here
              }}
            >
              {/* Replace with the actual contacts icon */}
              <Text>Contacts</Text>
            </TouchableOpacity>
          </View>

          {/* Add Relation input field */}
          <TextInput
            style={styles.textInput}
            placeholder="Relation"
            keyboardType="default"
          />
        </View>

        <View style={styles.emergencyContactContainer}>
          <Text style={styles.emergencyContactTitle}>Emergency contact 2:</Text>

          {/* Add Name input field */}
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            keyboardType="default"
          />

          <View style={styles.phoneNumberContainer}>
            {/* Add Phone number input field */}
            <TextInput
              style={styles.phoneNumberInput}
              placeholder="Phone number"
              keyboardType="number-pad"
            />

            {/* Add Contacts button */}
            <TouchableOpacity
              style={styles.contactsButton}
              onPress={() => {
                // Handle contacts button press here
              }}
            >
              {/* Replace with the actual contacts icon */}
              <Text>Contacts</Text>
            </TouchableOpacity>
          </View>

          {/* Add Relation input field */}
          <TextInput
            style={styles.textInput}
            placeholder="Relation"
            keyboardType="default"
          />
        </View>
      </View>

      <Button
        title="Apply"
        onPress={() => {
          // Handle apply button press here
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
  emergencyContactContainer: {
    marginBottom: 30,
  },
  emergencyContactTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  phoneNumberContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  phoneNumberInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
  },
  contactsButton: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1976D2',
    marginLeft: 10,
    borderRadius: 5,
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
    width: 300,
    alignSelf: 'center',
    fontSize: 10,
    color: '#fff',
    backgroundColor: '#1976D2',
  },
});

export default Form3Screen;