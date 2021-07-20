import React from 'react';
import {View} from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import data from '../components/sampleData';

const LikedDogs = ({navigation, route}) => {
  const likedDogs = data.filter(dog => dog.characteristics.status === 'LIKE');

  return (
    <View>
      {
        likedDogs.map((l,i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{uri: l.characteristics.photo}}/>
            <ListItem.Content>
              <ListItem.Title>{l.characteristics.name}, {l.characteristics.age}</ListItem.Title>
              <ListItem.Subtitle>{l.characteristics.location}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
    </View>
  )
}

export default LikedDogs;