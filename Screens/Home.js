import React from 'react';
import { View, Text, Button, ImageButton, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondLayout}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Maximum loan limit</Text>
          <Text style={styles.infoValue}>GH₵ 6,000</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Maximum loan Term</Text>
          <Text style={styles.infoValue}>180 days</Text>
        </View>
      </View>

      <Text style={styles.reviewStatusText}>(Review status text)</Text>

      <Button
        title="Apply now!"
        onPress={() => {
          // Handle apply button press here
        }}
        style={styles.applicationButton}
      />

      <View style={styles.bottomBar}>
        <ImageButton
          source={require('./path/to/home_icon.png')}
          style={styles.imageButton}
          accessibilityLabel="Home"
        />

        <ImageButton
          source={require('./path/to/account_icon.png')}
          style={styles.imageButton}
          accessibilityLabel="Account"
          onPress={() => {
            // Handle account button press here
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Replace with your desired background image or color
    padding: 16,
  },
  secondLayout: {
    flexDirection: 'row',
    width: 380,
    height: 100,
    marginVertical: 100,
    marginHorizontal: 15,
    backgroundColor: 'transparent', // Replace with the drawable border
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  infoLabel: {
    fontSize: 17,
    color: 'white',
  },
  infoValue: {
    fontSize: 17,
    color: 'white',
    marginLeft: 30,
  },
  reviewStatusText: {
    width: 380,
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'serif-monospace',
    marginTop: 20,
    visibility: 'hidden', // Update visibility as needed
  },
  applicationButton: {
    width: 400,
    marginHorizontal: 50,
    marginTop: 300,
    fontSize: 15,
    color: 'white',
    backgroundColor: 'blue', // Replace with your desired color
  },
  bottomBar: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
  },
  imageButton: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
  },
});

export default HomeScreen;