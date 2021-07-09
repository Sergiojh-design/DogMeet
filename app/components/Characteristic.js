import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, Text, Pressable, Image } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings';

import data from "./charData.js";

const Characteristic = ({ navigation, breed, characteristic, characteristicData }) => {
  const [selectedValue, setSelectedValue] = useState("");

  if(characteristic === 'Adaptability') {
  return (
    <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristicData.photo}}
      />
      <Text style={styles.titleText}>Adapts Well To Apartment Living</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.adapts_well_to_apartment_living}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText2}>Good For Novice Owners</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.good_for_novice_owners}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText3}>Sensitivity Level</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.sensitivity_level}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText4}>Tolerates Being Alone</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.tolerates_being_alone}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText5}>Tolerates Cold Weather</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.tolerates_cold_weather}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText6}>Tolerates Hot Weather</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.tolerates_hot_weather}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
    </View>
  );
  } else if (characteristic === 'All_Around_Friendliness') {
    return (
      <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristicData.photo}}
      />
      <Text style={styles.titleText}>Affectionate With Family</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.affectionate_with_family}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText2}>Kid-Friendly</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.kid_friendly}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText3}>Dog Friendly</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.dog_friendly}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText4}>Friendly Towards Strangers</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.friendly_toward_strangers}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
    </View>
    );
  } else if (characteristic === 'Health_and_Grooming') {
    return (
      <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristicData.photo}}
      />
      <Text style={styles.titleText}>Amount Of Shedding</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.amount_of_shedding}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText2}>Drooling Potential</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.drooling_potential}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText3}>Easy To Groom</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.easy_to_groom}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText4}>General Health</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.general_health}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText5}>Potential For Weight Gain</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.potential_for_weight_gain}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
       <Text style={styles.titleText6}>Size</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.size}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
    </View>
    );
  } else if (characteristic === 'Trainability') {
    return (
      <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristicData.photo}}
      />
      <Text style={styles.titleText}>Easy To Train</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.easy_to_train}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText2}>Intelligence</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.intelligence}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText3}>Potential For Mouthiness</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.potential_for_mouthliness}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText4}>Prey Drive</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.prey_drive}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText5}>Tendency To Bark Or Howl</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.tendency_to_bark_or_howl}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
       <Text style={styles.titleText6}>Wonderlust Potential</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.wanderlust_potential}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
    </View>
    );
  } else if (characteristic === 'Physical_Needs') {
    return (
      <View style={styles.container}>
      <Image
      style={styles.tinyLogo}
      source={{uri: characteristicData.photo}}
      />
      <Text style={styles.titleText}>Energy Level</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.energy_level}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText2}>Intensity</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.intensity}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText3}>Exercise Needs</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.exercise_needs}
        style={{ paddingVertical: 0 }}
        imageSize={30}
        readonly
      />
      <Text style={styles.titleText4}>Potential For Playfulness</Text>
      <Rating
        type='star'
        count={5}
        startingValue={characteristicData.potential_for_playfulness}
        style={{ paddingVertical: 30 }}
        imageSize={30}
        readonly
      />
    </View>
    );
  }
}

export default Characteristic;

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
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText2: {
    height: 100,
    position: "absolute",
    top: 530,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText3: {
    height: 100,
    position: "absolute",
    top: 585,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText4: {
    height: 100,
    position: "absolute",
    top: 645,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText5: {
    height: 100,
    position: "absolute",
    top: 705,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  titleText6: {
    height: 100,
    position: "absolute",
    top: 765,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Courier New"
  },
  tinyLogo: {
    position: "absolute",
    top: 52,
    width: 400,
    height: 400,
  }
});