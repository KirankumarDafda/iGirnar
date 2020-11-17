import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons"
import Color from './../../Helper/Color'
import Styles from './Style.js'

export default class Header extends React.Component {

    render(){
        const pr = this.props
        return(
            <View style={Styles.header}>
                {
                    pr.leftIcon == "Menu" ?
                    <TouchableOpacity onPress={this.props.submit}>
                        <Icon name='menu' style={{color: Color.white, fontSize: 24,  }} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={this.props.submit}>
                        <Icon name='ios-arrow-back' style={{color: Color.white, fontSize: 24,}} />
                    </TouchableOpacity>
                }
                <Text style={Styles.textColor}>{pr.title}</Text>
                <View style={{position: "absolute", right: 10, top: 10,}}>
                {
                    pr.more == "true" &&
                    <TouchableOpacity>
                        <Icon name='ellipsis-vertical-outline' style={{color: Color.white, fontSize: 20,}} />
                    </TouchableOpacity>
                }
                </View>
            </View>
        )
    }
}