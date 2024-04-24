import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from 'prop-types';
import styles from "./style";

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const WeekDayItem = (props) => {
  const {day} = props;
  
  return (
    <View
    
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: winWidth * 0.125,
      width: winWidth * 0.12,
    }}>
    <Text
      style={{
        fontSize: winWidth * 0.035,
        fontWeight: '600',
        color: 'black',
      }}>
      {day}
    </Text>
  </View>
  );
};

WeekDayItem.prototypes = {
  day: PropTypes.string.isRequired,
  styles:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
};

export default WeekDayItem;



