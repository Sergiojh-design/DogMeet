import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, Text, Pressable } from "react-native";
import data from "./sampleData.js";

const DogList = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState("");

function clickme(){
  for(var i=0; i< data.length; i++){
    if(data[i].name === selectedValue) {
      navigation.navigate('Breed Characteristics', {breed: selectedValue, characteristics: data[i].characteristics})
    }
  }
}

  return (
    <View style={styles.container}>
      <Text
      style={styles.titleText}
      >
        Select Breed:
      </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 5, width: 400 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        itemStyle={{ backgroundColor: "#FFF0F5", color: "black", fontFamily:"Courier New", fontSize:20, fontWeight: "bold" }}
      >
        <Picker.Item label="Select a option" value=""/>
        <Picker.Item label="American Foxhound" value="American Foxhound"/>
        <Picker.Item label="Boxer" value="Boxer"/>
        <Picker.Item label="Chinese Shar-Pei" value="Chinese Shar-Pei"/>
        <Picker.Item label="Dalmatian" value="Dalmatian"/>
      </Picker>
      <Pressable style={styles.button} onPress= {clickme} >
       <Text style={styles.text}>Submit</Text>
    </Pressable>
    </View>
  );
}

export default DogList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 515,
    alignItems: "center"
  },
  titleText: {
    height: 100,
    position: "absolute",
    top: 480,
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: 735,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 25,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});