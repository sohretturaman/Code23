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
import FirstPage from './src/screens/FirstPage';
import SecondPage from './src/screens/SecondPage';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View
      style={{height: winHeight, width: winWidth, backgroundColor: '#f6f6f6'}}>
     {/*  <CalendarPage /> */}
   {/*   <FirstPage /> */}
   <SecondPage />

    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
