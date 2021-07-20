import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import {FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function TopBar({ navigation }) {
  return(
    <View style={styles.container}>
      <FontAwesome5 name='dog' size={27} color="brown" onPress={() => navigation.navigate('Liked Dogs')}></FontAwesome5>
      <FontAwesome name='comments' size={27} color="grey"></FontAwesome>
      <FontAwesome5 name='paw' size={27} color="grey"></FontAwesome5>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  }
})