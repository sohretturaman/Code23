import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";


const winWidth =Dimensions.get("window").width;
const winHeight = Dimensions.get("window").height;
const FirstScreen = () => {
  const CardItem=()=>{
    return (
      <View style={{height:winWidth*0.45,width:winWidth*0.7,backgroundColor:'#42154E', borderRadius:winWidth*0.02,paddingHorizontal:winWidth*0.03, marginHorizontal:winWidth*0.02}}>
      <View style={{height:winWidth*0.15,width:winWidth*0.65,  justifyContent:'flex-end', paddingLeft:winWidth*0.04}}>
         <Text  style={{fontSize:winWidth*0.04, color:'white', fontWeight:'500'}} >Balance</Text>
         <Text  style={{fontSize:winWidth*0.05, color:'white', fontWeight:'500'}} >25.633,00 USD</Text>
         
        
         
      </View>
      <View style={{height:winWidth*0.15,width:winWidth*0.6,marginLeft:winWidth*0.02, justifyContent:'space-between',flexDirection:'row',alignItems:'flex-end' }}>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >1234</Text>
      </View>
      <View style={{height:winWidth*0.15,width:winWidth*0.65,marginLeft:winWidth*0.01, justifyContent:'space-between',flexDirection:'row', alignItems:'flex-end',paddingVertical:winWidth*0.02, paddingRight:winWidth*0.03}}>
         <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >
           12/20
         </Text>
         <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >VISA</Text>
      </View>
   </View>
    )
  }
  const CardItemTwo=()=>{
    return (
      <View style={{height:winWidth*0.45,width:winWidth*0.7,backgroundColor:'#E47C57', borderRadius:winWidth*0.02,paddingHorizontal:winWidth*0.03, marginHorizontal:winWidth*0.02}}>
      <View style={{height:winWidth*0.15,width:winWidth*0.65,  justifyContent:'flex-end', paddingLeft:winWidth*0.04}}>
         <Text  style={{fontSize:winWidth*0.04, color:'white', fontWeight:'500'}} >Balance</Text>
         <Text  style={{fontSize:winWidth*0.05, color:'white', fontWeight:'500'}} >25.633,00 USD</Text>
         
        
         
      </View>
      <View style={{height:winWidth*0.15,width:winWidth*0.6,marginLeft:winWidth*0.02, justifyContent:'space-between',flexDirection:'row',alignItems:'flex-end' }}>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >**** </Text>
      <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >1234</Text>
      </View>
      <View style={{height:winWidth*0.15,width:winWidth*0.65,marginLeft:winWidth*0.01, justifyContent:'space-between',flexDirection:'row', alignItems:'flex-end',paddingVertical:winWidth*0.02, paddingRight:winWidth*0.03}}>
         <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >
           12/20
         </Text>
         <Text  style={{fontSize:winWidth*0.03, color:'white', fontWeight:'500'}} >VISA</Text>
      </View>
   </View>
    )
  }
  const TotalSentItem =()=>{
    return (
      <View style={{height:winWidth*0.2,width:winWidth*0.9,  justifyContent:'space-between',flexDirection:'row',alignSelf:'center', backgroundColor:'white',alignItems:'center',borderRadius:winWidth*0.04, marginBottom:winWidth*0.02,elevation:1}}>
      <View 
      style={{height:winWidth*0.16,width:winWidth*0.65, paddingHorizontal:winWidth*0.02, alignItems:"center",flexDirection:'row',marginTop:winWidth*0.02, }}>
      <Image source={require("./src/assets/images/pImage.jpg")} style={{width:winWidth*0.15, height:winWidth*0.15, borderRadius:winWidth*0.02}} />
       <View style={{ height:winWidth*0.12, paddingHorizontal:winWidth*0.02, justifyContent:'space-between',flexDirection:'column',marginLeft:winWidth*0.02}}>
         <Text style={{fontSize:winWidth*0.04, color:'black', fontWeight:'500'}}>Max William</Text>
         <Text style={{fontSize:winWidth*0.03, color:'gray', fontWeight:'500'}}>03 August 2020</Text>
       </View>
      </View>
      <View 
      style={{height:winWidth*0.16,width:winWidth*0.24, paddingHorizontal:winWidth*0.02, justifyContent:'center',marginTop:winWidth*0.02}}>
     
      <Text style={{fontSize:winWidth*0.032, color:'black', fontWeight:'500'}}>$ 458.00 USD</Text>
      </View>
    </View>
    )
  }
  return (
    <ScrollView style={{width:winWidth,height:winHeight, backgroundColor:'#f6f6f6f6'}}>
      {/**header */}
       <View style={{height:winWidth*0.12,width:winWidth,backgroundColor:'white', 
       flexDirection:'row', justifyContent:'space-between',
        paddingHorizontal:winWidth*0.02,
        alignItems:'center',
        marginBottom:winWidth*0.02
       }}>
         <Image source={require("./src/assets/images/menu.png")} style={{width:winWidth*0.055, height:winWidth*0.06}} />
        <View>
        <Image source={require("./src/assets/images/pImage.jpg")} style={{width:winWidth*0.09, height:winWidth*0.09, borderRadius:winWidth*0.02}} />
        </View>
       </View>
       {/**cards conatiner */}
       <View style={{height:winWidth*0.7,width:winWidth,marginTop:winWidth*0.02}}>
         <View style={{height:winWidth*0.2,width:winWidth, paddingHorizontal:winWidth*0.02, justifyContent:'center'}} >
           <Text style={{fontSize:winWidth*0.06, color:'black', fontWeight:'bold'}}>My Cards</Text>
         </View>
         {/**cards */}
         <ScrollView horizontal={true} style={{height:winWidth*0.5,paddingHorizontal:winWidth*0.02,}}>
         <View style={{ alignItems:'center',flexDirection:'row'}}>
          <CardItem />
          <CardItemTwo/>
          <CardItem />
          <CardItemTwo/>
          <CardItemTwo/>
         </View>
         </ScrollView>
        
       </View>
       {/** send money container */}
       <View style={{height:winWidth*0.4,width:winWidth,marginTop:winWidth*0.02}}>
       {/**header */}
         <View style={{height:winWidth*0.15,width:winWidth, paddingHorizontal:winWidth*0.02, alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:winWidth*0.035, color:'black', fontWeight:'500'}} > Send Money To </Text>
          <View style={{height:winWidth*0.1,width:winWidth*0.2, flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{fontSize:winWidth*0.035, color:'black', fontWeight:'500'}} >search</Text>
             <Image source={require("./src/assets/images/search.png")} style={{width:winWidth*0.035, height:winWidth*0.03,resizeMode:'contain'}} tintColor={"#E47C57"} />
          </View>
        
          
          
         </View>
   {/** profiles */}
         <View style={{height:winWidth*0.25,width:winWidth, paddingHorizontal:winWidth*0.02, alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{height:winWidth*0.16,width:winWidth*0.16, alignItems:'center', borderWidth:2, borderColor:'white',borderRadius:winWidth*0.15,justifyContent:'center',position:'absolute', left:winWidth*0.05,zIndex:3}}>
           <Image source={require("./src/assets/images/pImage.jpg")} style={{width:winWidth*0.15, height:winWidth*0.15,resizeMode:'cover', borderRadius:winWidth*0.15}} />
           </View>
           <View style={{height:winWidth*0.16,width:winWidth*0.16, alignItems:'center', borderWidth:2, borderColor:'white',borderRadius:winWidth*0.15,justifyContent:'center',position:'absolute',left: winWidth*0.1,zIndex:2}}>
           <Image source={require("./src/assets/images/pImage.jpg")} style={{width:winWidth*0.15, height:winWidth*0.15,resizeMode:'cover', borderRadius:winWidth*0.15}} />
           </View>
           <View style={{height:winWidth*0.16,width:winWidth*0.16, alignItems:'center', borderWidth:2, borderColor:'white',borderRadius:winWidth*0.15,justifyContent:'center',position:'absolute', left:winWidth*0.15,zIndex:1}}>
           <Image source={require("./src/assets/images/pImage.jpg")} style={{width:winWidth*0.15, height:winWidth*0.15,resizeMode:'cover', borderRadius:winWidth*0.15}} />
           </View>
           <View style={{height:winWidth*0.16,width:winWidth*0.16, alignItems:'center', borderWidth:2, borderColor:'black',borderRadius:winWidth*0.15,justifyContent:'center',position:'absolute', left:winWidth*0.25,zIndex:0,borderStyle:'dotted'}}>
           <Text style={{fontSize:winWidth*0.05, color:'black', fontWeight:'500'}} >+</Text>
           </View>
          
          
         </View>

       </View>
      
      {/**serach */}
       <View style={{height:winWidth*0.3,width:winWidth,marginTop:winWidth*0.02}}>
         <View style={{height:winWidth*0.15,width:winWidth, paddingHorizontal:winWidth*0.02, justifyContent:'center'}} >
           <Text style={{fontSize:winWidth*0.045, color:'black', fontWeight:'500',paddingLeft:winWidth*0.02}}>Amount</Text>
         </View>
         <View style={{height:winWidth*0.2,width:winWidth, paddingHorizontal:winWidth*0.02, justifyContent:'space-between',flexDirection:'row'}} >
            <View style={{height:winWidth*0.1,width:winWidth*0.8, paddingHorizontal:winWidth*0.02, justifyContent:'center', backgroundColor:'#d6d6d6',borderRadius:winWidth*0.02}} >
               <Text style={{fontSize:winWidth*0.045, color:'black', fontWeight:'500'}}>45.00 USD</Text>
            </View>
            <View style={{height:winWidth*0.1,width:winWidth*0.1,  justifyContent:'center', backgroundColor:'#E47C57',borderRadius:winWidth*0.02,alignItems:'center'}} >
            <Image source={require("./src/assets/images/search.png")} style={{width:winWidth*0.04, height:winWidth*0.04,}}  tintColor={"white"}/>
            </View>

         </View>
         
        
        
       </View>

       {/**total sent */}
       <View style={{width:winWidth, marginBottom:winHeight*0.1}}>
       <View style={{height:winWidth*0.15,width:winWidth, paddingHorizontal:winWidth*0.02, justifyContent:'center'}} >
           <Text style={{fontSize:winWidth*0.045, color:'black', fontWeight:'500',paddingLeft:winWidth*0.02}}>Total Sent</Text>
         </View>
        {/**ıtem first */}
       <TotalSentItem />
       <TotalSentItem />
       <TotalSentItem />
       <TotalSentItem />
       </View>

 {/** bottpm tab */}
 <View
        style={{
          height: winHeight * 0.1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: winWidth * 0.05,
          position: 'absolute',
          bottom:0,
          width: winWidth,
          backgroundColor:'white'
        }}>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            tintColor={'gray'}
            source={require('./src/assets/images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            tintColor={'gray'}
            source={require('./src/assets/images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
     
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            tintColor={'gray'}
            source={require('./src/assets/images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            tintColor={'gray'}
            source={require('./src/assets/images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default FirstScreen;


