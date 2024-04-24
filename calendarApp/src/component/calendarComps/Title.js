import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
  
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Title = () => {
  return (
    <View
    style={{
      flexDirection: 'row',
      width: winWidth * 0.85,
      height: winWidth * 0.15,
      justifyContent: 'space-between',
      marginTop: winWidth * 0.1,
      alignSelf: 'center',
      borderRadius: winWidth * 0.03,
      alignItems: 'center',
    }}>
    <Text
      style={{
        color: 'black',
        fontSize: winWidth * 0.03,
        fontWeight: '400',
        marginTop: winWidth * 0.03,
      }}>
      prev
    </Text>
    <Text
      style={{
        color: 'black',
        fontSize: winWidth * 0.05,
        fontWeight: '600',
        marginTop: winWidth * 0.03,
      }}>
      January
    </Text>
    <Text
      style={{
        color: 'black',
        fontSize: winWidth * 0.03,
        fontWeight: '400',
        marginTop: winWidth * 0.03,
      }}>
      Next
    </Text>
  </View>
  );
};

export default Title;

const styles = StyleSheet.create({});
