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
const App = () => {
  const HeadlineItem = () => {
    return (
      <View
        style={{
          width: winWidth * 0.55,
          height: winWidth * 0.65,
          backgroundColor: '#DEDCDCF6',
          borderRadius: winWidth * 0.02,
          alignItems: 'center',
          marginHorizontal: winWidth * 0.02,
        }}>
        <View
          style={{
            width: winWidth * 0.5,
            height: winWidth * 0.15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('./images/pImage.jpg')}
            style={{
              width: winWidth * 0.12,
              height: winWidth * 0.12,
              borderRadius: winHeight * 0.1,
            }}
          />
          <View
            style={{
              height: winWidth * 0.1,
              width: winWidth * 0.3,
              marginLeft: winWidth * 0.02,
            }}>
            <Text style={{fontWeight: '500', fontSize: winWidth * 0.04}}>
              Amelia Nelson
            </Text>
            <Text style={{fontWeight: '500', fontSize: winWidth * 0.03}}>
              Actress
            </Text>
          </View>
        </View>
        <View>
          <Image
            source={require('./images/product.png')}
            style={{
              width: winWidth * 0.5,
              height: winWidth * 0.5,
              borderRadius: winHeight * 0.01,
              resizeMode: 'cover',
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('./images/bg.png')}
        style={{
          width: winWidth,
          height: winHeight * 0.25,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: winWidth * 0.08,
          borderTopLeftRadius: winWidth * 0.08,
          width: winWidth,
          height: winHeight * 0.05,
          position: 'absolute',
          top: winHeight * 0.22,
          alignSelf: 'center',
        }}
      />

      {/**body */}
      <ScrollView style={{height: winHeight * 0.65, backgroundColor: 'red'}}>
        <View style={{alignItems: 'center'}}>
          {/**scroll horizontal */}
          <View
            style={{
              width: winWidth,
              paddingTop: winWidth * 0.08,
              backgroundColor: 'white',
              alignItems: 'center',
              elevation: 2,
            }}>
            <View style={{width: winWidth, alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: winWidth * 0.05,
                  paddingHorizontal: winWidth * 0.02,
                  paddingVertical: winWidth * 0.02,
                  color: 'black',
                }}>
                Featured Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                width: winWidth,
                height: winWidth * 0.7,
                alignContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: winWidth * 0.7,
                  flexDirection: 'row',
                }}>
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
              </View>
            </ScrollView>
          </View>

          {/**body horizontal */}

          <View
            style={{
              width: winWidth,
              paddingTop: winWidth * 0.08,
              backgroundColor: 'white',
              alignItems: 'center',
              elevation: 2,
            }}>
            <View style={{width: winWidth, alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: winWidth * 0.05,
                  paddingHorizontal: winWidth * 0.02,
                  paddingVertical: winWidth * 0.02,
                  color: 'black',
                }}>
                Popular Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                width: winWidth,
                height: winWidth * 0.7,
                alignContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: winWidth * 0.7,
                  flexDirection: 'row',
                }}>
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
              </View>
            </ScrollView>
          </View>

          {/**body horizontal */}

          <View
            style={{
              width: winWidth,
              paddingTop: winWidth * 0.08,
              backgroundColor: 'white',
              alignItems: 'center',
              elevation: 2,
            }}>
            <View style={{width: winWidth, alignItems: 'flex-start'}}>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: winWidth * 0.05,
                  paddingHorizontal: winWidth * 0.02,
                  paddingVertical: winWidth * 0.02,
                  color: 'black',
                }}>
                Popular Products
              </Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                flexDirection: 'row',
                width: winWidth,
                height: winWidth * 0.7,
                alignContent: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                  height: winWidth * 0.7,
                  flexDirection: 'row',
                }}>
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
                <HeadlineItem />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>

      {/** bottpm tab */}
      <View
        style={{
          height: winHeight * 0.1,
        //  backgroundColor: 'yellow',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingBottom: winWidth * 0.05,
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
            source={require('./images/home.png')}
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
            source={require('./images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
        {/**center + icon*/}
        <View
          style={{
            height: winWidth * 0.15,
            width: winWidth * 0.15,
            borderRadius: winWidth * 0.12,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FF8A00',
            marginBottom:winWidth*0.15,

          }}>
          <Text style={{fontSize: winWidth * 0.08, color:'white', alignItems:'center', justifyContent:'center'}}>+</Text>
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
            source={require('./images/home.png')}
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
            source={require('./images/home.png')}
            style={{
              width: winWidth * 0.07,
              height: winWidth * 0.07,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
