import React, { Component } from 'react';

import {
    View,
    Text,
    FlatList,
    TextInput,
    Image,
    TouchableWithoutFeedback,
    Dimensions,
    SafeAreaView
} from 'react-native';

const winWidth = Dimensions.get('window').width;

import Icon from "react-native-vector-icons/Ionicons"
import SideMenu from 'react-native-side-menu';
import Menu from './../../Navigations/Drawer';
import Color from './../../Helper/Color'
import Styles from './Style.js'
import Header from './../../Components/Header/Header'
import data from './../../Helper/data.json';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          loading: false,
            isOpen: false,
            selectedItem: 'About',
        };
        this._renderItem = this._renderItem.bind(this)
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen,
        });
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen });
    }

    onMenuItemSelected = item => {
        this.setState({
            isOpen: false,
            selectedItem: item,
        },()=>{
            item != "share" ?
            this.props.navigation.navigate(item)
            :
            null
        });
    }

    _renderItem({ item, index }) {
        return(
            <TouchableWithoutFeedback
            onPress={() => this.openDetailPage(item._id)}
            activeOpacity={0.6}>
                <View style={Styles.listing}>
                    <Image source={require('./../../Assets/lion.jpg')} style={{ height: 250, width: winWidth, }}/>
                    <View style={Styles.bottomText}>
                        <Icon name={item.isFavorite == "true" ? "heart" : "heart-outline"} style={{ fontSize: 24, color: Color.primary}} />
                        <Text style={Styles.listtitle}>{item.title}</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    openDetailPage = (id) => {
        this.props.navigation.navigate('Detail',{ id: id})
    }

    render(){

        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return(
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
        >

        <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
            <View style={Styles.container}>
                <Header leftIcon={"Menu"} title={"Girnar"} submit={this.toggle} />
                <View>
                    <Icon name={"search"} style={Styles.searchicon} />
                    <TextInput
                        autoCapitalize="none" 
                        autoCorrect={false}
                        underlineColorAndroid="transparent"
                        onChangeText={text => this.setState({search: text})}
                        value={this.state.search}
                        placeholder={"Search"}
                        returnKeyType="search"
                        style={Styles.searchtextbox}
                    />
                        
                </View>
                <View style={Styles.content}>
                    <FlatList
                        style={{}}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
            </SafeAreaView>
            </SideMenu>
        )
    }
}