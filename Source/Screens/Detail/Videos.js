import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

import Styles from './Style.js'
import YouTube from 'react-native-youtube';
export default class Videos extends React.Component {

    onBuffer = () => {

    }
    onError = () => {

    }
    render(){
        return(
            <View style={Styles.videocontainer}>
                <YouTube
                    videoId="Smvw9yA8rHM" 
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={Styles.backgroundVideo}
                />
            </View>
        )
    }
}

