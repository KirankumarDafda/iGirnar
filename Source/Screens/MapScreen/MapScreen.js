import React, { Component } from 'react';

import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TextInput,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import Color from './../../Helper/Color'
import Styles from './Style.js'
import Header from './../../Components/Header/Header'

export default class MapScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        };
    }
 
    goBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
          <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
            <View style={Styles.container}>
                <Header leftIcon={"Back"} title={"How to reach?"}  submit={()=>this.goBack()} />
                <Text style={Styles.content}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Text>
            </View>
            </SafeAreaView>
        )
    }
}

