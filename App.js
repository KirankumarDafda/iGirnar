/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  YellowBox
} from 'react-native';


YellowBox.ignoreWarnings(['componentWillReceiveProps']);
YellowBox.ignoreWarnings(['componentWillMount']);
YellowBox.ignoreWarnings(['useNativeDriver']);

import { NavigationContainer } from '@react-navigation/native';
import Auth from './Source/Navigations/Auth'
import Color from './Source/Helper/Color'

export default class App extends Component{

  render(){
    return(
          <NavigationContainer>
              <Auth/>
          </NavigationContainer>
    );
  }
      
    
}
