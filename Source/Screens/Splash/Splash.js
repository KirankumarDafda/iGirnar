import React, { Component } from 'react';

import {
    View,
    Image,
    ActivityIndicator,
    Dimensions,
} from 'react-native';

import Color from '../../Helper/Color.js';
import Styles from './Style.js'

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default class Splash extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        };
    }
 
    goBack = () => {
        this.props.navigation.goBack();
    }
    componentDidMount(){
        let that = this;
        setTimeout(function(){
            that.props.navigation.navigate('Home')
        },2000)
    }
    render(){
        return(
            
            <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#fff"}}>
                <ActivityIndicator color={Color.secondary} size="large" style={{position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 1}}></ActivityIndicator>
                <Image source={require("./../../Assets/splash.png")} style={{height: winHeight}}/>
            </View>
        )
    }
}

