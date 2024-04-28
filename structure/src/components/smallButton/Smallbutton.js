import { View, Text, Dimensions } from "react-native";
import React from "react";
import PropTypes from 'prop-types'; // ES6
import styles from "./style";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const Smallbutton = (props) => {
  const {title} =props
  return (
    <View
    style={[styles.borderShadow,{
      height: winWidth * 0.08,
      width: winWidth * 0.2,
      justifyContent: 'center',
      backgroundColor: '#E47C57',
      borderRadius: winWidth * 0.02,
      alignItems: 'center',
    }]}>
    <Text
      style={{
        fontSize: winWidth * 0.04,
        color: 'white',
        fontWeight: '500',
      }}>
      {title}
    </Text>
  </View>
  );
};

Smallbutton.propTypes = {
  title: PropTypes.string.isRequired
}

export default Smallbutton;
