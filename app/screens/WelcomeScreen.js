import React from 'react';
import { ImageBackground, Picker, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import DogList from '../components/DogList.js';

const WelcomeScreen = ({ navigation }) => {

  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.container}>
      <Text style={styles.Text}>Click Me!</Text>
        <Text style={styles.Text}>↓</Text>
        <Text style={styles.titleText} onPress={() => navigation.navigate('Match')}>DogMeet</Text>
        <DogList navigation = {navigation}/>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    top: 420
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Courier New",
  },
  Text: {
    fontSize: 15,
    color: "red",
    fontFamily: "Courier New",
  }
})

