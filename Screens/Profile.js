import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import BackgroundImage from '../Components/Background';

const ProfileScreen = () => {
  const handleLogout = () => {
    // Implement your logout logic here
  };

  return (
      <BackgroundImage source={require('../assets/img.jpg')}>
        <Text style={styles.title}>My Profile</Text>

        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="receipt" size={40} color="yellow" />
            <Text style={styles.cardText}>My Bill</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="ios-lock-closed" size={40} color="yellow" />
            <Text style={styles.cardText}>Security</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="ios-help-circle" size={40} color="yellow" />
            <Text style={styles.cardText}>FAQ</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="ios-call" size={40} color="yellow" />
            <Text style={styles.cardText}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={handleLogout}>
            <Ionicons name="ios-log-out" size={40} color="yellow" />
            <Text style={styles.cardText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </BackgroundImage>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#738688',
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#282D2E',
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
  },
});

export default ProfileScreen;