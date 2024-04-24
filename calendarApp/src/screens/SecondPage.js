import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const SecondPage = () => {
  //create  components and pass props , take data types with prpos and give a style page , import styles file to children comps , then define imported styles in prop types !!
  return (
    <View
      style={{height: winHeight, width: winWidth, backgroundColor: '#442FB3'}}>
      <View
        style={{
          width: winWidth,
          height: winWidth * 0.15,
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingHorizontal: winWidth * 0.02,
          marginTop: winWidth * 0.05,
        }}>
        <Image
          source={require('../assets/images/pImage.jpg')}
          style={{
            width: winWidth * 0.1,
            borderRadius: winWidth * 0.1,
            height: winWidth * 0.1,
            resizeMode: 'cover',
            borderColor: 'white',
            borderWidth: 2,
          }}
        />
      </View>
      <View
        style={{
          width: winWidth * 0.9,
          alignSelf: 'center',
          height: winWidth * 0.15,
          justifyContent: 'center',
          paddingHorizontal: winWidth * 0.05,
          marginTop: winWidth * 0.1,
        }}>
        <Text
          style={{color: 'white', fontSize: winWidth * 0.1, fontWeight: '600'}}>
          Hi Mariam
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.03,
            fontWeight: '500',
          }}>
          Taks are pending
        </Text>
      </View>
      {/**first container */}
      <View
        style={{
          width: winWidth * 0.85,
          height: winWidth * 0.32,
          justifyContent: 'center',
          paddingHorizontal: winWidth * 0.05,
          marginTop: winWidth * 0.1,
          backgroundColor: '#5451D6',
          alignSelf: 'center',
          borderRadius: winWidth * 0.03,
          padding: winWidth * 0.05,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.04,
            fontWeight: '600',
            marginTop: winWidth * 0.03,
          }}>
          Mobile App Designs
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.02,
            fontWeight: '400',
          }}>
          {' '}
          Consultants of Project
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: winWidth * 0.7,
            height: winWidth * 0.15,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../assets/images/pImage.jpg')}
              style={{
                width: winWidth * 0.1,
                height: winWidth * 0.1,
                resizeMode: 'cover',
                borderRadius: winWidth * 0.05,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
            <Image
              source={require('../assets/images/pImage.jpg')}
              style={{
                width: winWidth * 0.1,
                height: winWidth * 0.1,
                resizeMode: 'cover',
                borderRadius: winWidth * 0.05,
                position: 'absolute',
                left: winWidth * 0.05,
                borderWidth: 2,
                borderColor: 'white',
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.03,
                fontWeight: '400',
              }}>
              23/03
            </Text>
          </View>
        </View>
      </View>
      {/**title */}
      <View
        style={{
          flexDirection: 'row',
          width: winWidth * 0.85,
          height: winWidth * 0.1,
          justifyContent: 'space-between',
          marginTop: winWidth * 0.1,
          alignSelf: 'center',
          borderRadius: winWidth * 0.03,
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: winWidth * 0.04,
            fontWeight: '600',
            marginTop: winWidth * 0.03,
          }}>
          {' '}
          Monthly Review
        </Text>
      {/**button in second page */}
        <View
          style={{
            width: winWidth * 0.06,
            height: winWidth * 0.06,
            borderRadius: winWidth * 0.06,
            justifyContent: 'center',
            backgroundColor: '#22CFFC',
            alignItems: 'center',
            padding: winWidth * 0.05,
          }}>
          <Image
            tintColor={'white'}
            source={require('../assets/images/home.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      {/** calendar container */}
      <View>
        <View
          style={{
            flexDirection: 'row',
            width: winWidth * 0.85,
            justifyContent: 'space-between',
            marginTop: winWidth * 0.1,
            alignSelf: 'center',
            borderRadius: winWidth * 0.03,

            alignItems: 'flex-start',
          }}>
          {/**calendar item */}
          <View
            style={{
              height: winWidth * 0.3,
              width: winWidth * 0.4,
              backgroundColor: '#5451D6',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: winWidth * 0.03,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.05,
                fontWeight: '600',
              }}>
              22
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.03,
                fontWeight: '500',
                marginTop: winWidth * 0.03,
              }}>
              {' '}
              Done
            </Text>
          </View>
          <View
            style={{
              height: winWidth * 0.2,
              width: winWidth * 0.4,
              backgroundColor: '#5451D6',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: winWidth * 0.03,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.05,
                fontWeight: '600',
              }}>
              7
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.03,
                fontWeight: '500',
                marginTop: winWidth * 0.02,
              }}>
              {' '}
              in Progress
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: winWidth * 0.85,
            justifyContent: 'space-between',
            marginTop: 0,
            alignSelf: 'center',
            borderRadius: winWidth * 0.03,

            alignItems: 'flex-end',
          }}>
          {/**calendar item */}

          <View
            style={{
              height: winWidth * 0.2,
              width: winWidth * 0.4,
              backgroundColor: '#5451D6',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: winWidth * 0.03,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.05,
                fontWeight: '600',
              }}>
              7
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.03,
                fontWeight: '500',
                marginTop: winWidth * 0.02,
              }}>
              {' '}
              in Progress
            </Text>
          </View>
          <View
            style={{
              height: winWidth * 0.3,
              width: winWidth * 0.4,
              backgroundColor: '#5451D6',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: winWidth * 0.03,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.05,
                fontWeight: '600',
              }}>
              22
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: winWidth * 0.03,
                fontWeight: '500',
                marginTop: winWidth * 0.03,
              }}>
              {' '}
              Done
            </Text>
          </View>
        </View>
      </View>

      {/** bottpm tab */}
      <View
        style={{
          height: winHeight * 0.1,
          //  backgroundColor: 'yellow',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: winWidth * 0.05,
          position: 'absolute',
          bottom: 0,
          width: winWidth,
        }}>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            tintColor={'white'}
            source={require('../assets/images/home.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
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
            tintColor={'white'}
            source={require('../assets/images/home.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
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
            tintColor={'white'}
            source={require('../assets/images/home.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
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
            tintColor={'white'}
            source={require('../assets/images/home.png')}
            style={{
              width: winWidth * 0.05,
              height: winWidth * 0.05,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({});
