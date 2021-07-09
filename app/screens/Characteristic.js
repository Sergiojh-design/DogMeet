import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import Characteristic from '../components/Characteristic.js';

const CharacteristicScreen = ({navigation, route}) => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.titleText}>{route.params.breed}</Text>
      <Text style={styles.Text}>({route.params.characteristic})</Text>
      <Characteristic navigation = {navigation} breed = {route.params.breed} characteristic = {route.params.characteristic} characteristicData = {route.params.characteristicData} />
    </View>
  )
}

export default CharacteristicScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  titleText: {
    height: 30,
    position: "absolute",
    top: 0,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  Text: {
    height: 30,
    position: "absolute",
    top: 32,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  }
})