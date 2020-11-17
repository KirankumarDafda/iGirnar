import {
    StyleSheet
} from 'react-native';

import Color from './../../Helper/Color';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Color.white
    },
    content: {
        flex: 1,
        margin: 10,
        marginTop: 0,
        marginBottom: 0,
    },
    searchicon: { 
        fontSize: 20, 
        position: "absolute",
        top: 20, 
        left: 20, 
        color: Color.gray
    },
    searchtextbox: {
        paddingVertical: 0,
        borderRadius: 5,
        height: 40,
        fontSize: 16,
        overflow: "hidden",
        margin: 10,
        padding: 10,
        paddingLeft: 40,
        color: Color.gray
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
        height: 290,
        overflow: "hidden",
    },
    bottomText: {
        height: 40,
        backgroundColor: Color.lightgray,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        paddingRight: 10,
    },
    listtitle: {
        marginLeft: 10,
        fontSize: 17,
    },
})