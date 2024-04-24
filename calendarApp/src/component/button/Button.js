import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import PropTypes from 'prop-types';  



const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;


const Button = () => {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
};

Button.prototypes = {
  styles:PropTypes.oneOfType([PropTypes.object,PropTypes.array]),
}

