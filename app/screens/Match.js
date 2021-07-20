import React, { useState } from 'react'
import { StyleSheet, View, Text} from 'react-native'
import Constants from 'expo-constants'
import TopBar from '../components/TopBar'
import data from '../components/sampleData'
import SwipableImage from '../components/Swipeableimage'
import BottomBar from '../components/BottomBar'

const Match = ({ navigation }) => {
  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleLikePress(){
    data[currentIndex].characteristics.status = 'LIKE';
    setCurrentIndex(currentIndex + 1);
  }

  function handlePassPress(){
    data[currentIndex].characteristics.status = 'DISLIKE';
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <View style={styles.container}>
       <TopBar navigation = {navigation} />
       <View style={styles.swipes}>
    {data.length > 1 && (
      <SwipableImage user={data[currentIndex]} />
    )}
       </View>
       <BottomBar handleLikePress={handleLikePress} handlePassPress={handlePassPress}/>
    </View>
  )
}

export default Match;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 4.65,
    elevation: 7,
  }
})