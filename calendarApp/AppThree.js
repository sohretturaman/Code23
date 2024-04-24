import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CalendarPage from './src/screens/CalendarPage';
import SecondPage from './src/screens/SecondPage';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const AppThree = () => {


  return (
 <View style={{height: winHeight, width: winWidth, backgroundColor: '#f6f6f6'}}>
{/*   <CalendarPage/> */}
<SecondPage/>
 </View>
  );
};

export default AppThree;

const styles = StyleSheet.create({});
