import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const winWidht = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const CommerceTwo = () => {
  const Title = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#3C44A8',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: winWidht * 0.05,
          }}>
          {' '}
          X{' '}
        </Text>
        <Text
          style={{
            color: '#A0DBF5',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: winWidht * 0.05,
          }}>
          {' '}
          E{' '}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        height: winHeight,
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
      }}>
      {/**title */}
      <View
        style={{
          width: winWidht,
          height: winWidht * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingHorizontal: 20,
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
            backgroundColor: 'red',
            borderRadius: winWidht * 0.08,
            width: winWidht * 0.08,
            height: winWidht * 0.08,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
           
          }}>
          <Image
            source={require('./images/heart.png')}
            style={{height: winWidht * 0.038, width: winWidht * 0.038}}
          />
        </View>
      </View>

      {/**top image container */}
      <View
        style={{
          backgroundColor: 'white',
          width: winWidht,
          height: winWidht * 1,
          alignItems: 'center',
          justifyContent: 'space-between',
       
        }}>
        <View
          style={{
            height: winWidht * 0.2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#A1DCF5',
              width: winWidht * 0.2,
              height: winWidht * 0.09,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: winWidht * 0.01,
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: winWidht * 0.045,
                alignSelf: 'center',
              }}>
              %30
            </Text>
          </View>
        </View>

        {/**image shoes */}
        <View
          style={{
            width: winWidht,
            height: winWidht,
            flex: 1,
            alignItems: 'center',

            // marginTop:winWidht * 0.1
          }}>
          <View
            style={{
              backgroundColor: '#FDDFCE',
              padding: 10,
              borderRadius: 100,
              height: winWidht * 0.5,
              width: winWidht * 0.5,
              marginTop: winWidht * 0.02,
            }}>
            <Image
              source={require('./images/shoes.png')}
              style={{
                height: winWidht * 0.4,
                width: winWidht * 0.4,
                position: 'absolute',
                alignSelf: 'center',
                bottom: winWidht * 0.05,
                justifyContent: 'center',
              }}
            />
          </View>
          <View
            style={{
              height: winWidht * 0.1,
              width: winWidht * 0.3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                backgroundColor: 'blue',
                width: winWidht * 0.05,
                height: winWidht * 0.01,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                backgroundColor: 'blue',
                width: winWidht * 0.1,
                height: winWidht * 0.01,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                backgroundColor: 'blue',
                width: winWidht * 0.05,
                height: winWidht * 0.01,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </View>

      {/**bottom container */}
      <View style={{backgroundColor:'#F6F6F6', height: 'auto',flex:1,width:winWidht,
      paddingBottom:winWidht * 0.4, justifyContent:'space-around', borderTopLeftRadius:winWidht * 0.3, borderTopRightRadius:winWidht * 0.3,
       }}>    
        <View
          style={{
            width: winWidht,
            height: winWidht * 0.3,
            justifyContent: 'center',
            flexDirection: 'row',
          
          }}>
          <View
            style={{
              width: 'auto',
              paddingHorizontal: winWidht * 0.01,
              justifyContent: 'center',
            
            }}>
            <Text
              style={{
                color: '#3C44A8',
                fontSize: winWidht * 0.07,
                fontWeight: '500',
              }}>
              {' '}
              Nike Air Max 200
            </Text>
            <Text
              style={{
                color: '#3C44A8',
                fontSize: winWidht * 0.04,
                marginLeft: winWidht * 0.02,
              }}>
              Built for natural motion, the nike Flex shoes
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'flex-start',
              paddingTop: winWidht * 0.08,
              paddingRight: winWidht * 0.02,
            }}>
            <Image
              source={require('./images/star.png')}
              style={{height: winWidht * 0.05, width: winWidht * 0.05}}
            />
            <Text
              style={{
                color: 'gray',
                fontSize: winWidht * 0.04,
                paddingLeft: 5,
              }}>
              {' '}
              (4.5)
            </Text>
          </View>
        </View>
    
     
   
        {/**sizes */}
        <View
          style={{
            flexDirection: 'row',
            width: winWidht,
            justifyContent: 'space-between',
            // backgroundColor: 'gray',
            paddingRight: winWidht * 0.02,
          }}>
          <View
            style={{
              width: winWidht * 0.15,
              height: winWidht * 0.08,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              Size :
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#A1DCF5',
              width: winWidht * 0.15,
              height: winWidht * 0.08,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              US 6
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: winWidht * 0.15,
              height: winWidht * 0.08,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              US 7
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: winWidht * 0.15,
              height: winWidht * 0.08,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              US 8
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#ffffff',
              width: winWidht * 0.15,
              height: winWidht * 0.08,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 2,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              US 9
            </Text>
          </View>
        </View>

        {/** availale colors*/}
        <View
          style={{
            flexDirection: 'row',
            width: winWidht,
            justifyContent: 'space-between',
            paddingHorizontal: winWidht * 0.02,
            paddingRight: winWidht * 0.02,
            marginTop: winWidht * 0.05,
            alignItems: 'center',
          }}>
          <View
            style={{
              width: winWidht * 0.3,
              height: winWidht * 0.08,

              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: winWidht * 0.035,
                fontWeight: '500',
              }}>
              {' '}
              Available Colors :
            </Text>
          </View>
          <View
            style={{
              width: winWidht * 0.08,
              height: winWidht * 0.08,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#FDD446',
              borderRadius: winWidht * 0.08,
            }}
          />
          <View
            style={{
              width: winWidht * 0.08,
              height: winWidht * 0.08,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F6565D',
              borderRadius: winWidht * 0.08,
            }}
          />
          <View
            style={{
              width: winWidht * 0.08,
              height: winWidht * 0.08,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F9A1DA',
              borderRadius: winWidht * 0.08,
            }}
          />
          <View
            style={{
              width: winWidht * 0.08,
              height: winWidht * 0.08,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6EA2FF',
              borderRadius: winWidht * 0.08,
            }}
          />
      
      </View>
      </View>


      {/** bottom tab  */}
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
          height: winWidht * 0.35,
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

export default CommerceTwo;

const styles = StyleSheet.create({});
