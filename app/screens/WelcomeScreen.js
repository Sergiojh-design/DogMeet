import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button } from 'react-native';
import DogList from '../components/DogList.js';

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <Text
        style={styles.titleText}
      >
        Dog Meet
      </Text>
      <DogList navigation = {navigation}/>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  titleText: {
    height: 100,
    position: "absolute",
    top: 425,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#FF5733'
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#FFC300'
  }
})

