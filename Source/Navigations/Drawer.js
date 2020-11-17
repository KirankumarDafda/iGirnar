import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  ScrollView,
  View,
  Image,
  Text,
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"
import Styles from './Style'

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={Styles.menu}>
      <View style={Styles.avatarContainer}>
        <Image style={Styles.avatar} source={require('./../Assets/lion.jpg')}/>
      </View>
      <View style={Styles.menucontainer}>
        <Icon name='exit-outline' style={{ fontSize: 24,  }} />
        <Text onPress={()=>onItemSelected('MapScreen')} style={Styles.item}>How to reach?</Text>
      </View>
      <View style={Styles.menucontainer}>
        <Icon name='archive-outline' style={{ fontSize: 24,  }} />
        <Text onPress={()=>onItemSelected('Query')} style={Styles.item}>Query</Text>
      </View>

      <View style={Styles.menucontainer}>
        <Icon name='arrow-redo-circle-outline' style={{ fontSize: 24,  }} />
        <Text onPress={()=>onItemSelected('Feedback')} style={Styles.item}>Feedback</Text>
      </View>

      <View style={Styles.menucontainer}>
        <Icon name='star-half-outline' style={{ fontSize: 24,  }} />
        <Text onPress={()=>onItemSelected('Rateus')} style={Styles.item}>Rate Us</Text>
      </View>

      <View style={Styles.menucontainer}>
        <Icon name='share-social-outline' style={{ fontSize: 24,  }} />
        <Text onPress={()=>onItemSelected('Share')} style={Styles.item}>Share</Text>
      </View>

    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};