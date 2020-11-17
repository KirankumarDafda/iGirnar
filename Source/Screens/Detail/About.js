import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';


const winWidth = Dimensions.get('window').width;

import Styles from './Style.js'

export default class About extends React.Component {
  
    render(){
        return(
            <View style={{flex: 1,}}>
                <Image source={require('./../../Assets/lion.jpg')} style={{height: 250, width: winWidth }} />
                <View style={Styles.tabcontainer}>
                    <Text style={Styles.heading}>Lion 1</Text>
                    <Text style={Styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </View>
        )
    }
}

