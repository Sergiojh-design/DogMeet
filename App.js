import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/screens/WelcomeScreen';
import BreedCharacteristics from './app/screens/BreedCharacteristics';
import Characteristic from './app/screens/Characteristic';
import Match from './app/screens/Match';
import LikedDogs from './app/screens/LikedDogs';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="Breed Characteristics" component={BreedCharacteristics} />
        <Stack.Screen name="Characteristic" component={Characteristic} />
        <Stack.Screen name="Liked Dogs" component={LikedDogs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
