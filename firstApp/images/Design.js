import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Design = () => {
  const widht = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const MultiView = () => {
    return (
      <View style={{height: 10, width: 10, backgroundColor: 'red'}}>
        <Text>t</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={{justifyContent: 'center', marginTop: 10}}>
        <Image
          source={require('./study.jpg')}
          style={{
            height: widht * 0.9,
            width: widht * 0.8,
            borderRadius: 10,
            borderTopLeftRadius: 150,
            borderTopRightRadius: 150,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: widht * 0.01,
              width: widht * 0.08,
              backgroundColor: '#F56D7C',
              margin: 10,
            }}
          />
          <View
            style={{
              height: widht * 0.01,
              width: widht * 0.08,
              backgroundColor: '#424242',
              margin: 10,
            }}
          />
          <View
            style={{
              height: widht * 0.01,
              width: widht * 0.08,
              backgroundColor: '#424242',
              margin: 10,
            }}
          />
        </View>
      </View>

      {/**body */}
      <View style={{marginTop: 20}}>
        <View style={{width: widht * 0.8, marginTop: 10}}>
          <Text style={{fontSize: 25, color: 'black', fontWeight: '700'}}>
            Living Room{' '}
          </Text>
          <Text style={{color: 'gray', fontSize: 15, fontWeight: 'bold'}}>
            Design your home with your own
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          {/** boxes first line  */}
          <View
            style={{
              flexDirection: 'row',

              width: widht * 0.8,
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 10,
            }}>
            <View
              style={{
                backgroundColor: '#F56D7C',
                paddingHorizontal: 10,
                padding: 5,
                borderRadius: 10,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
              }}>
              <Image
                source={require('./wifi.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                  marginVertical: 2,
                }}
              />
              <Text style={{color: '#f6f6f6', width: '100%', marginTop: 5}}>
                Open Wifi to
              </Text>
            </View>
            {/**white box 1 */}
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 1,
              }}>
              <Image
                source={require('./mop.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                }}
              />
              <Text
                style={{color: '#424242', marginBottom: 8, marginVertical: 5}}>
                Open Wifi
              </Text>
              <View
                style={{
                  backgroundColor: '#959292',
                  width: widht * 0.11,
                  height: widht * 0.05,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#959292',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: widht * 0.05,
                    height: widht * 0.05,
                    alignSelf: 'flex-start',
                    borderRadius: 10,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
                height: widht * 0.2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 1,
              }}>
              <Image
                source={require('./mop.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                }}
              />
              <Text
                style={{color: '#424242', marginBottom: 8, marginVertical: 5}}>
                Open Wifi
              </Text>
              <View
                style={{
                  backgroundColor: '#959292',
                  width: widht * 0.11,
                  height: widht * 0.05,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#959292',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: widht * 0.05,
                    height: widht * 0.05,
                    alignSelf: 'flex-start',
                    borderRadius: 10,
                  }}></View>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',

              width: widht * 0.8,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
                height: widht * 0.2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 1,
              }}>
              <Image
                source={require('./mop.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                }}
              />
              <Text
                style={{color: '#424242', marginBottom: 8, marginVertical: 5}}>
                Open Wifi
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  width: widht * 0.11,
                  height: widht * 0.05,
                  borderRadius: 30,
                  alignItems: 'center',
                  paddingRight: 2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: widht * 0.04,
                    height: widht * 0.04,
                    alignSelf: 'flex-end',
                    borderRadius: 10,
                  }}></View>
              </View>
            </View>
            {/**white box 1 */}
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 1,
              }}>
              <Image
                source={require('./mop.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                }}
              />
              <Text
                style={{color: '#424242', marginBottom: 8, marginVertical: 5}}>
                Open
              </Text>
              <View
                style={{
                  backgroundColor: '#959292',
                  width: widht * 0.11,
                  height: widht * 0.05,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#959292',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: widht * 0.05,
                    height: widht * 0.05,
                    alignSelf: 'flex-start',
                    borderRadius: 10,
                  }}></View>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#ffffff',
                padding: 5,
                borderRadius: 5,
                marginHorizontal: 10,
                marginVertical: 5,
                width: widht * 0.2,
                height: widht * 0.2,
                shadowOffset: {
                  height: 2,
                  width: 2,
                },
                elevation: 1,
              }}>
              <Image
                source={require('./mop.png')}
                style={{
                  height: widht * 0.05,
                  width: widht * 0.05,
                }}
              />
              <Text
                style={{color: '#424242', marginBottom: 8, marginVertical: 5}}>
                open mu
              </Text>
              <View
                style={{
                  backgroundColor: 'green',
                  width: widht * 0.11,
                  height: widht * 0.05,
                  borderRadius: 30,
                  alignItems: 'center',
                  paddingRight: 2,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 10,
                    width: widht * 0.04,
                    height: widht * 0.04,
                    alignSelf: 'flex-end',
                    borderRadius: 10,
                  }}></View>
              </View>
            </View>
          </View>
        </View>
      </View>

   
    </View>
  );
};

export default Design;

const styles = StyleSheet.create({});
