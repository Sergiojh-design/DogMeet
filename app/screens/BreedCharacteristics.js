import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import Characteristics from '../components/Characteristics.js';

const BreedCharacteristics = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.titleText}>{route.params.breed}</Text>
      <Characteristics navigation = {navigation} breed = {route.params.breed} characteristics = {route.params.characteristics} />
    </View>
  )
}

export default BreedCharacteristics;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  titleText: {
    height: 30,
    position: "absolute",
    top: 20,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Courier New"
  }
})