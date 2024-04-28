import { Dimensions, StyleSheet, Text, View ,Pressable} from "react-native";
import React from "react";
import PropTypes from 'prop-types'; // ES6
import styles from "./style";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Button = (props) => {
    const {title,onClick} =props
  return (
    <Pressable
    onPress={onClick}
    style={[styles.borderShadow,{
        height: winWidth * 0.12,
        width: winWidth * 0.3,
        paddingHorizontal: winWidth * 0.02,
        justifyContent: 'center',
        backgroundColor: '#42154E',
        alignItems: 'center',
        borderRadius: winWidth * 0.04,
        borderColor: '#42154E',
        borderWidth: winWidth * 0.005,
      }]}>
    <Text
      style={{
        fontSize: winWidth * 0.05,
        color: 'white',
        fontWeight: '500',
      }}>
{title} 
    </Text>
  </Pressable>
  );
};


  Button.propTypes={
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button;


