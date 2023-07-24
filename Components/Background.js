import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

const BackgroundImage = ({ source, children }) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage} resizeMode="cover">
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
});

export default BackgroundImage;
