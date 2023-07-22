import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      <View style={styles.gridLayout}>
        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image
              style={styles.cardIcon}
              source={require('./path/to/baseline_receipt_24.png')}
            />
            <Text style={styles.cardText}>My Bill</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image
              style={styles.cardIcon}
              source={require('./path/to/baseline_security_24.png')}
            />
            <Text style={styles.cardText}>Security</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image
              style={styles.cardIcon}
              source={require('./path/to/baseline_question_answer_24.png')}
            />
            <Text style={styles.cardText}>FAQ</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image
              style={styles.cardIcon}
              source={require('./path/to/baseline_contact_support_24.png')}
            />
            <Text style={styles.cardText}>Contact Us</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardView}>
          <View style={styles.cardContent}>
            <Image
              style={styles.cardIcon}
              source={require('./path/to/baseline_logout_24.png')}
            />
            <Text style={styles.cardText}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 40,
    color: '#738688',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 30,
  },
  gridLayout: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 30,
  },
  cardView: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: '#282D2E',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  cardContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIcon: {
    width: 72,
    height: 80,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
