import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const App = () => {
  const numArray = [1,2,3,4,5,6,7,8,9,10];
  return (
    <SafeAreaView style={styles.container}>

      <ScrollView horizontal={true}>
          
      {numArray.map((num) => {
        return(
          <View style={styles.textWrapper}>
             <Text  style={styles.text} key={num}>{num}</Text>
          </View>
        ) 
      })}
     
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding:10
  },
  textWrapper:{
    backgroundColor:"yellow",
    height:70,
    width:70,
    margin:10,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:16,
    fontWeight:"bold",
    color:'black',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    
    
  }
});
