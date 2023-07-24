import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['Royal_blue', 'Sky_blue']}
      style={{flex: 1}}

    >
        <View style={styles.container}>
        <View style={styles.secondLayout}>
            <View style={styles.textContainer}>
            <Text style={styles.whiteText}>Maximum loan limit</Text>
            <Text style={styles.whiteText}>GH₵ 6,000</Text>
            </View>

            <View style={styles.textContainer}>
            <Text style={styles.whiteText}>Maximum loan Term</Text>
            <Text style={styles.whiteText}>180 days</Text>
            </View>
        </View>

        <Text style={styles.reviewStatusText} />

        <TouchableOpacity style={styles.applicationBtn}>
            <Text style={styles.whiteText}>Apply now!</Text>
        </TouchableOpacity>

        <View style={styles.bottomBar}>
            <TouchableOpacity>
            <Ionicons name="home" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
            <Ionicons name="person" size={30} color="black" />
            </TouchableOpacity>
        </View>
        </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondLayout: {
    width: 380,
    height: 100,
    margin: 15,
    marginTop: 100,
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  textContainer: {
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  whiteText: {
    color: '#fff',
    fontSize: 17,
  },
  reviewStatusText: {
    width: 380,
    margin: 15,
    marginTop: 20,
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'serif-monospace',
  },
  applicationBtn: {
    width: 400,
    marginHorizontal: 50,
    marginTop: 300,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#000080',
  },
  bottomBar: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;