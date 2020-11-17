import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

import {
    Splash,
    Home,
    Detail,
    Query,
    Feedback,
    Rateus,
    MapScreen
} from './../Screens'

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Drawer from './Drawer'

function iStack() {
  return (
    <Stack.Navigator headerMode={"none"}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Query" component={Query} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Rateus" component={Rateus} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default iStack;