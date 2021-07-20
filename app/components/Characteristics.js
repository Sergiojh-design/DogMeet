import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, Text, Pressable, Image } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

import data from "./sampleData.js";
import chardata from "./charData.js";

const Characteristics = ({ navigation, breed, characteristics }) => {
  const [selectedValue, setSelectedValue] = useState("");

  function clickme(name){
    for(var i=0; i< chardata.length; i++){
      if(chardata[i].name === breed) {
        navigation.navigate('Characteristic', {breed: breed, characteristic: name, characteristicData: chardata[i][name]})
      }
    }
  }

  return (
    <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristics.photo}}
      />
      <Text style={styles.titleText} onPress={() => clickme('Adaptability')}>Adaptability</Text>
      <Rating
        type='heart'
        count={5}
        startingValue={characteristics.adaptability}
        style={{ paddingVertical: 0 }}
        imageSize={40}
        readonly
      />
      <Text style={styles.titleText2} onPress={() => clickme('All_Around_Friendliness')}>All Around Friendliness</Text>
      <Rating
        type='heart'
        count={5}
        startingValue={characteristics.all_around_friendliness}
        style={{ paddingVertical: 30 }}
        imageSize={40}
        readonly
      />
      <Text style={styles.titleText3} onPress={() => clickme('Health_and_Grooming')}>Health and Grooming Needs</Text>
      <Rating
        type='heart'
        count={5}
        startingValue={characteristics.health_and_grooming_needs}
        style={{ paddingVertical: 0 }}
        imageSize={40}
        readonly
      />
      <Text style={styles.titleText4} onPress={() => clickme('Trainability')}>Trainability</Text>
      <Rating
        type='heart'
        count={5}
        startingValue={characteristics.trainability}
        style={{ paddingVertical: 30 }}
        imageSize={40}
        readonly
      />
      <Text style={styles.titleText5} onPress={() => clickme('Physical_Needs')}>Physical Needs</Text>
      <Rating
        type='heart'
        count={5}
        startingValue={characteristics.physical_needs}
        style={{ paddingVertical: 0 }}
        imageSize={40}
        readonly
      />
    </View>
  );
}

export default Characteristics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 490,
    alignItems: "center"
  },
  titleText: {
    height: 100,
    position: "absolute",
    top: 465,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText2: {
    height: 100,
    position: "absolute",
    top: 535,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText3: {
    height: 100,
    position: "absolute",
    top: 605,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText4: {
    height: 100,
    position: "absolute",
    top: 675,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText5: {
    height: 100,
    position: "absolute",
    top: 745,
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  tinyLogo: {
    position: "absolute",
    top: 52,
    width: 400,
    height: 400,
  },
  video: {
    top: 70,
    position: "absolute",
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    top: 275,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});