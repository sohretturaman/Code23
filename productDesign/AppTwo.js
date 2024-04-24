import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const AppTwo = () => {
  const HeadlineItem = () => {
    return (
      <View
        style={{
          width: winWidth * 0.95,
          alignSelf: 'center',
          height: winWidth * 0.65,
          backgroundColor: '#E9E7E7F6',
          borderRadius: winWidth * 0.02,
          alignItems: 'center',
          marginHorizontal: winWidth * 0.02,
          elevation: 2,
          marginTop: winWidth * 0.05,
        }}>
        <View
          style={{
            width: winWidth * 0.9,
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
              width: winWidth * 0.7,
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
            source={require('./images/cream.jpg')}
            style={{
              width: winWidth * 0.90,
              height: winWidth * 0.45,
              borderRadius: winHeight * 0.01,
              resizeMode: 'cover',
              backgroundColor: 'red',
            }}
          />
        </View>
      </View>
    );
  };

  const SecondHeadlineItem = () => {
    return (
      <View
        style={{
          width: winWidth * 0.95,
          alignSelf: 'center',
          height: winWidth * 0.35,
          backgroundColor: '#E9E7E7F6',
          borderRadius: winWidth * 0.02,
          alignItems: 'center',
          marginHorizontal: winWidth * 0.02,
          elevation: 2,
          marginTop: winWidth * 0.05,
        }}>
        <View
          style={{
            width: winWidth * 0.9,
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
              width: winWidth * 0.7,
              marginLeft: winWidth * 0.02,
            }}>
            <Text style={{fontWeight: '500', fontSize: winWidth * 0.04}}>
              Amelia Nelson
            </Text>
            <Text style={{fontWeight: '500', fontSize: winWidth * 0.03}}>
              1 hour ago
            </Text>
          </View>
        </View>
        <View
          style={{
            height: winWidth * 0.2,
            justifyContent: 'center',
            paddingHorizontal: winWidth * 0.02,
          }}>
          <Text
            style={{
              color: 'gray',
              fontWeight: '500',
              fontSize: winWidth * 0.035,
            }}>
            {' '}
            it is a long established fact that a reader will be distracted by
            the readble content of a page when looking at its layout.
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View style={{height: winHeight, backgroundColor: '#E3E0E0'}}>
      {/*header  */}
      <View
        style={{
          backgroundColor: '#FF8A00',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: winWidth * 0.05,
          height: winHeight * 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('./images/famale.png')}
            style={{
              width: winWidth * 0.1,
              height: winHeight * 0.07,
              resizeMode: 'contain',
            }}
            tintColor={'#fff'}
          />
          <Text
            style={{
              fontSize: winWidth * 0.045,
              fontWeight: '600',
              color: '#fff',
            }}>
            KETY
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('./images/search.png')}
            style={{
              width: winWidth * 0.055,
              height: winHeight * 0.055,
              resizeMode: 'contain',
              marginRight: winWidth * 0.03,
            }}
            tintColor={'#fff'}
          />
          <Image
            source={require('./images/store.png')}
            style={{
              width: winWidth * 0.06,
              height: winHeight * 0.06,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopRightRadius: winWidth * 0.1,
          borderTopLeftRadius: winWidth * 0.1,
          width: winWidth,
          height: winWidth * 0.05,
          position: 'absolute',
          top: winHeight * 0.085,
          alignSelf: 'center',
        }}
      />
      {/**body */}
      <ScrollView style={{height: winHeight * 0.7,width:winWidth, backgroundColor:'white'}}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <HeadlineItem />
          <SecondHeadlineItem />
          <HeadlineItem />
          <HeadlineItem />
          <HeadlineItem />
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
            marginBottom: winWidth * 0.15,
          }}>
          <Text
            style={{
              fontSize: winWidth * 0.08,
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            +
          </Text>
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

export default AppTwo;

const styles = StyleSheet.create({});
