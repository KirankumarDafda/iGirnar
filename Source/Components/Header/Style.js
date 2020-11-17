import {
    StyleSheet,
    Dimensions
} from 'react-native';

import Color from './../../Helper/Color';

export default StyleSheet.create({
    header: {
        height: 45,
        padding: 10,
        backgroundColor: Color.primary,
        flexDirection: "row",
    },
    textColor: {
        fontSize: 16,
        fontWeight: "bold",
        color: Color.white,
        marginLeft: 10,
        marginTop: 3, 
        textTransform: "uppercase",
    },
})