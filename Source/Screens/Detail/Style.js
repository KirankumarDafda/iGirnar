import {
    StyleSheet,
    Dimensions
} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;


import Color from './../../Helper/Color';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    content: {
        flex: 1,
        margin: 20,
        marginTop: 0,
        marginBottom: 0,
    },
    searchtextbox: {
        paddingVertical: 0,
        borderColor: Color.gray,
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        fontSize: 15,
        overflow: "hidden",
        margin: 20,
        padding: 10,
    },
    listing: {
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 12,
        height: 260,
        overflow: "hidden",
    },
    bottomText: {
        height: 40,
        backgroundColor: Color.lightgray
    },
    listtitle: {
        marginLeft: 10,
        marginTop: 5,
        paddingTop: 5,
        fontSize: 16,
        fontWeight: "bold",
    },
    tabcontainer: {
        flex: 1,
        margin: 10, 
    },
    heading: {
        fontSize: 20,
        marginBottom: 10,
    },
    description: {
        fontSize: 17,
        textAlign: "justify",
    },

    galleryContainer: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
    },
    galleryimgs: { 
        height: winWidth/2-20, 
        width: winWidth/2-20, 
        margin: 5,
    },
    backgroundVideo: {
        marginTop: 20,
        backgroundColor: Color.black,
        height: winHeight-195,
        width: winWidth,
    },
})