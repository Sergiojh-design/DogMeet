import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function SwipeableImage({ user }) {
  return (
    <View>
      <Image source={{uri: user.characteristics.photo}} style={styles.photo}/>
      <View style={styles.textContainer}>
        <View style={styles.textRow}>
          <Text style={[styles.textPrimary, styles.textShadow]}>{user.characteristics.name}</Text>
          <Text style={[styles.textSecondary, styles.textShadow]}>{user.characteristics.age}</Text>
        </View>
        <View style={styles.textRow}>
          <FontAwesome name="map-marker" size={20} color="brown"></FontAwesome>
          <Text style={[styles.textSecondary, styles.textShadow]}>{user.characteristics.location}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  textContainer:{
    position: 'absolute',
    bottom: 20,
    left: 20
  },
  textRow:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  textPrimary: {
    color: 'brown',
    fontSize: 35,
    fontWeight: 'bold'
  },
  textSecondary: {
    color: 'brown',
    marginLeft: 10,
    fontSize: 25
  },
  textShadow: {
    textShadowColor: 'rgba(0,0,0,0.80)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
})