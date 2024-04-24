import {Dimensions, StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const winWidht = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;


const Title = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: 'black',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: winWidht * 0.05,
          }}>
          {' '}
          My Cart{' '}
        </Text>
       
      
      </View>
    );
  };

  const   ShopItem =()=>{
      {/**componet1 */}
    return (
       
         <View style={{backgroundColor:'white',elevation:2, width:winWidht*0.85,borderRadius:winWidht*0.02, height:winWidht*0.3, flexDirection:'row',justifyContent:'space-between', alignItems:'center',alignSelf:'center',marginVertical:winWidht*0.02}}>        
        {/**image shoes */}
          <View
            style={{
              backgroundColor: '#FDDFCE',
              padding: 10,
              borderRadius: 100,
              height: winWidht * 0.28,
              width: winWidht * 0.28,
              alignSelf: 'center',
            }}>
            <Image
              source={require('./images/shoes.png')}
              style={{
                height: winWidht * 0.25,
                width: winWidht * 0.25,
                position: 'absolute',
                alignSelf: 'flex-end',
                
                bottom: winWidht * 0.02,
                right:-winWidht*0.02,
                justifyContent: 'flex-end',
            
                
              }}
            />
          </View>
          <View style={{ backgroundColor:'white',height:winWidht*0.3, width:winWidht*0.55, paddingHorizontal:winWidht*0.02,alignItems:'flex-start',justifyContent:'center', paddingLeft:winWidht*0.05, borderTopRightRadius:winWidht*0.05, borderBottomRightRadius:winWidht*0.05}}>
          <Text
              style={{
                color: '#3C44A8',
                fontSize: winWidht * 0.04,
                fontWeight: '500',
                marginBottom:winWidht*0.02
              }}>
            
              Nike Air Max 200
            </Text>
            <Text  style={{
                color: '#3C44A8',
                fontSize: winWidht * 0.055,
                fontWeight: '500',
              }}>
             240.00
            </Text>
          </View>
         
        </View>
    )
  }

const CommerceThree = () => {
  return (
    <View
      style={{
        flex: 1,
        height: winHeight,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
      }}>
        {/** title */}
      <View
        style={{
          width: winWidht,
          height: winWidht * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <Image
          source={require('./images/arrow.png')}
          style={{height: winWidht * 0.05, width: winWidht * 0.05}}
        />
        <Title />
        <View
          style={{
            alignItems: 'center',
         
            width: winWidht * 0.08,
            height: winWidht * 0.08,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Image
            source={require('./images/mail.png')}
            style={{height: winWidht * 0.05, width: winWidht * 0.05}}
          />
        </View>
      </View>
      {/**components */}
      <ScrollView style={{ height:winHeight*0.5, }}>
        <View style={{flex:1, alignItems:'center'}}>
        <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
          <ShopItem />
        </View>
         
          
       
      </ScrollView>
      {/**footer */}

      <View
        style={{
          flexDirection: 'row',
          width: winWidht,
          justifyContent: 'space-between',
          paddingHorizontal: winWidht * 0.02,
          paddingRight: winWidht * 0.02,
          marginTop: winWidht * 0.05,
          alignItems: 'center',
          backgroundColor: 'white',
          alignContent: 'center',
          height: winWidht * 0.3,
          width: winWidht,
          position: 'absolute',
          bottom: 0,
          paddingBottom: winWidht * 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'center',
            paddingHorizontal: winWidht * 0.02,
            paddingRight: winWidht * 0.02,
            marginTop: winWidht * 0.05,
            alignItems: 'center',

            padding: winWidht * 0.02,
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: winWidht * 0.08,
              fontWeight: '500',
            }}>
            269.00
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingHorizontal: winWidht * 0.02,
            marginTop: winWidht * 0.05,
            alignItems: 'center',
            height: winWidht * 0.12,
            width: winWidht * 0.35,
            borderRadius: winWidht * 0.2,
            padding: winWidht * 0.02,
            alignSelf: 'center',

            backgroundColor: '#E2E2E4',
          }}>
          <Image
            source={require('./images/store.png')}
            tintColor={'#3D44A8'}
            style={{
              height: winWidht * 0.05,
              width: winWidht * 0.05,
              marginRight: winWidht * 0.01,
            }}
          />
          <Text
            style={{
              color: '#3D44A8',
              fontSize: winWidht * 0.035,
              fontWeight: '500',
            }}>
            Add To Cart
          </Text>
        </View>
      </View>

    </View>
  );
};

export default CommerceThree;

const styles = StyleSheet.create({});
