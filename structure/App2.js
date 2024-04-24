import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const App2 = () => {
  const TotalSentItem = () => {
    return (
      <View
        style={{
          height: winWidth * 0.2,
          width: winWidth * 0.9,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignSelf: 'center',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: winWidth * 0.04,
          marginBottom: winWidth * 0.02,
          elevation: 1,
        }}>
        <View
          style={{
            height: winWidth * 0.16,
            width: winWidth * 0.65,
            paddingHorizontal: winWidth * 0.02,
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: winWidth * 0.02,
          }}>
          <Image
            source={require('./src/assets/images/pImage.jpg')}
            style={{
              width: winWidth * 0.15,
              height: winWidth * 0.15,
              borderRadius: winWidth * 0.02,
            }}
          />
          <View
            style={{
              height: winWidth * 0.12,
              paddingHorizontal: winWidth * 0.02,
              justifyContent: 'space-between',
              flexDirection: 'column',
              marginLeft: winWidth * 0.02,
            }}>
            <Text
              style={{
                fontSize: winWidth * 0.04,
                color: 'black',
                fontWeight: '500',
              }}>
              Max William
            </Text>
            <Text
              style={{
                fontSize: winWidth * 0.03,
                color: 'gray',
                fontWeight: '500',
              }}>
              03 August 2020
            </Text>
          </View>
        </View>
        <View
          style={{
            height: winWidth * 0.16,
            width: winWidth * 0.24,
            paddingHorizontal: winWidth * 0.02,
            justifyContent: 'center',
            marginTop: winWidth * 0.02,
          }}>
          <Text
            style={{
              fontSize: winWidth * 0.032,
              color: 'black',
              fontWeight: '500',
            }}>
            $ 458.00 USD
          </Text>
        </View>
      </View>
    );
  };
  return (
    <ScrollView
      style={{
        width: winWidth,
        height: winHeight,
        backgroundColor: '#f6f6f6f6',
      }}>
      {/**top section*/}
      <View
        style={{
          height: winWidth * 0.9,
          width: winWidth,
          marginTop: winWidth * 0.05,
          //backgroundColor:'yellow'
        }}>
        <View
          style={{
            height: winWidth * 0.2,
            width: winWidth,
            paddingHorizontal: winWidth * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: winWidth * 0.1,
              width: winWidth,
              paddingHorizontal: winWidth * 0.02,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: winWidth * 0.02,
            }}>
            <Text
              style={{
                fontSize: winWidth * 0.065,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Statics
            </Text>
          </View>
          <View
            style={{
              height: winWidth * 0.12,
              width: winWidth * 0.6,
              alignSelf: 'center',
              borderRadius: winWidth * 0.04,
              justifyContent: 'space-between',
              backgroundColor: 'white',
              alignItems: 'center',
              flexDirection: 'row',
              borderWidth: winWidth * 0.003,
              borderColor: 'gray',
              marginTop: winWidth * 0.02,
            }}>
            <View
              style={{
                height: winWidth * 0.12,
                width: winWidth * 0.3,
                paddingHorizontal: winWidth * 0.02,
                justifyContent: 'center',
                backgroundColor: '#42154E',
                alignItems: 'center',
                borderRadius: winWidth * 0.04,
                borderColor: '#42154E',
                borderWidth: winWidth * 0.005,
              }}>
              <Text
                style={{
                  fontSize: winWidth * 0.05,
                  color: 'white',
                  fontWeight: '500',
                }}>
                Savings
              </Text>
            </View>
            <View
              style={{
                height: winWidth * 0.12,
                width: winWidth * 0.3,
                paddingHorizontal: winWidth * 0.02,
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: winWidth * 0.05,
                  color: 'gray',
                  fontWeight: '500',
                }}>
                Expense
              </Text>
            </View>
          </View>
        </View>
        {/**image container */}
        <View
          style={{
            height: winWidth * 0.7,
            width: winWidth,
            paddingHorizontal: winWidth * 0.02,
            alignItems: 'center',
            marginVertical: winWidth * 0.02,
           marginTop:winWidth*0.04
            //  backgroundColor:'red'
          }}>
          {/**image header */}
          <View
            style={{
              height: winWidth * 0.15,
              width: winWidth,
              paddingHorizontal: winWidth * 0.02,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: winWidth * 0.04,
                color: 'black',
                fontWeight: '500',
              }}>
              {' '}
              September 2020
            </Text>

            <Text
              style={{
                fontSize: winWidth * 0.04,
                color: '#E47C57',
                fontWeight: '500',
              }}>
              + 890.00 USD
            </Text>
          </View>
          <Image
            source={require('./src/assets/images/graphic.png')}
            style={{
              width: winWidth,
              height: winWidth * 0.55,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>

      {/**target completed */}
      <View
        style={{
          height: winWidth * 0.15,
          width: winWidth,
          marginTop: winWidth * 0.08,
        }}>
        <View
          style={{
            height: winWidth * 0.1,
            width: winWidth,
            paddingHorizontal: winWidth * 0.02,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: winWidth * 0.08,
              width: winWidth * 0.6,
              paddingHorizontal: winWidth * 0.02,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: winWidth * 0.03,
                color: 'gray',
                fontWeight: '500',
              }}>
              Target Completed %90
            </Text>
          </View>
          <View
            style={{
              height: winWidth * 0.08,
              width: winWidth * 0.2,
              justifyContent: 'center',
              backgroundColor: '#E47C57',
              borderRadius: winWidth * 0.02,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: winWidth * 0.04,
                color: 'white',
                fontWeight: '500',
              }}>
              View
            </Text>
          </View>
        </View>
      </View>

      {/**total sent */}
      <View style={{width: winWidth}}>
        <View
          style={{
            height: winWidth * 0.15,
            width: winWidth,
            paddingHorizontal: winWidth * 0.02,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: winWidth * 0.045,
              color: 'black',
              fontWeight: '500',
              paddingLeft: winWidth * 0.02,
            }}>
            Total Sent
          </Text>
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
          bottom: 0,
          width: winWidth,
          backgroundColor: 'white',
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

export default App2;

const styles = StyleSheet.create({});
