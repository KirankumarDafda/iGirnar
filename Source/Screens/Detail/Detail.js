import React, { Component } from 'react';

import {
    View,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import Color from './../../Helper/Color'
import Styles from './Style.js'
import Header from './../../Components/Header/Header'
import MaterialTabs from 'react-native-material-tabs';
import About from './About'
import Photos from './Photos'
import Videos from './Videos'

export default class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
          selectedTab: 0,
        };
    }
 
    goBack = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
      <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>

            <View style={Styles.container}>
                <Header leftIcon={"Back"} title={"Detail"} more={"true"} submit={()=>this.goBack()} />
                <MaterialTabs
                    items={['About', 'Photos', 'Videos']}
                    selectedIndex={this.state.selectedTab}
                    onChange={(tab)=>this.setState({selectedTab: tab})}
                    barColor={Color.white}
                    indicatorColor={Color.primary}
                    textStyle={{color: Color.gray}}
                    activeTextStyle={{color: Color.black}}
                />
                <ScrollView style={{flex: 1, backgroundColor: Color.white}}>
                    {
                        this.state.selectedTab == 0 ?
                            <About />
                        :
                        this.state.selectedTab == 1 ?
                            <Photos />
                        :
                            <Videos />
                    }
                </ScrollView>
            </View>   
        </SafeAreaView>
        )
    }
}

