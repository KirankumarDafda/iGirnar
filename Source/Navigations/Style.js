import {
    StyleSheet,
    Dimensions
} from 'react-native';

import Color from './../Helper/Color';

export default StyleSheet.create({
    menu: {
      flex: 1,
      width: window.width,
      height: window.height,
      backgroundColor: Color.white,
    },
    menucontainer: {
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
    },
    avatar: {
        height: 250,
        width: "100%",
        flex: 1,
    },
    item: {
      fontSize: 18,
      marginTop: 2,
      marginLeft: 10,
    },
  });