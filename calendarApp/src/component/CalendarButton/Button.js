import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from 'prop-types';  
import styles from "./styles";



const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
//defined proptypes and multiple styles
const Button = (props) => {
  const {day} =props;
  return (
    <View
    style={[styles.borderShadow,{
      width: winWidth * 0.12,
      height: winWidth * 0.12,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: day == 17 ? '#5451D6' : 'transparent',
      borderRadius: winWidth * 0.12,
    }]}>
    {
      <Text
        style={{
          fontSize: winWidth * 0.035,
          color: day==17 ? 'white' : 'black',
          fontWeight: '500',
        }}>
        {day}
      </Text>
    }
  </View>
  );
};

Button.prototypes = {
  styles:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
  day:PropTypes.number.isRequired,
}

export default Button;
