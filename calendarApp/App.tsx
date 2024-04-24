import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const winWidth = Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
const App = () => {

  return (
    <View style={{ height:winHeight, width:winWidth,alignItems: "center" }} >
      <View style={{ width: winWidth* 0.8, height: winWidth* 1, marginTop: winWidth * 0.15}}>
      <Image source={require("./images/splash.jpg")} style={{
         width: winWidth* 0.8, height: winWidth* 1 ,
         borderBottomLeftRadius: winWidth * 0.9, borderBottomRightRadius: winWidth * 0.9}} />
      </View>
    
    <View style={{ width: winWidth * 0.8, height:winWidth* 0.3, marginTop: winWidth * 0.15, alignItems:"flex-start"}}>
          <Text style={{  textAlign:'left',fontSize: winWidth* 0.1, marginTop: winWidth* 0.02 , fontWeight:'700', width: winWidth * 0.7, color:'#342E7A'}}> Manage Your Daily Tasks</Text>
    </View>
    <View style={{ width: winWidth * 0.8, height:winWidth* 0.2, marginTop: winWidth * 0.04,alignItems:'flex-start'}}>
        <Text style={{ textAlign:'left',fontSize: winWidth* 0.05, marginTop: winWidth* 0.02, color:'gray' }}> Manage Your Daily Tasks Manage Your Daily Tasks Manage Your Daily  </Text>
    </View>

    <View style={{ width: winWidth * 0.8, height:winWidth* 0.15, marginTop: winWidth * 0.03, alignItems:'flex-start', justifyContent:'center'}}>
        <Text style={{ fontSize: winWidth* 0.06, marginTop: winWidth* 0.02, fontWeight:'700', color:'#342E7A' }}> Get Started  </Text>
    </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
