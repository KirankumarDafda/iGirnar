import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';

import Styles from './Style.js'

export default class Photos extends React.Component {

    render(){
        return(
            <View style={Styles.tabcontainer}>
               <View style={Styles.galleryContainer}>
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
                    <Image source={require('./../../Assets/lion.jpg')} style={Styles.galleryimgs} />
               </View>
            </View>
        )
    }
}

