import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const AppThree = () => {
  const MainItem = () => {
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
              width: winWidth * 0.9,
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

  const HeadlineItem = () => {
    return (
      <View
        style={{
          height: winWidth * 0.3,
          width: winWidth * 0.2,
          backgroundColor: '#FFF',
          alignItems: 'center',
          marginHorizontal: winWidth * 0.02,
        }}>
        <View
          style={{
            backgroundColor: '#FFF9E0',
            height: winWidth * 0.2,
            width: winWidth * 0.2,
            elevation: 2,
            borderRadius: winWidth * 0.02,
            marginHorizontal: winWidth * 0.02,
            alignItems: 'center',
          }}>
          <Image
            source={require('./images/trophy.png')}
            style={{
              width: winWidth * 0.12,
              height: winHeight * 0.1,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            height: winWidth * 0.1,
            width: winWidth * 0.2,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>
            RANK
          </Text>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{height: winHeight, width: winWidth, backgroundColor: '#F6f6f6',paddingBottom:winHeight*0.1}}>
      {/*header  */}
      <View style={{backgroundColor: '#FF8A00', height: winHeight * 0.25}}>
        <View
          style={{
            backgroundColor: '#FF8A00',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: winWidth * 0.05,
            height: winHeight * 0.07,
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
        <View>
          <Image
            source={require('./images/icon.png')}
            style={{
              width: winWidth,
              height: winHeight * 0.165,
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
          top: winHeight * 0.23,
          alignSelf: 'center',
        }}
      />

      {/** BODY */}

      <ScrollView
        style={{
          height: winHeight * 0.5,
          width: winWidth,
         
          
        }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            elevation: 2,
          }}>
          <Text
            style={{
              fontSize: winWidth * 0.05,
              fontWeight: '600',
              marginHorizontal: winWidth * 0.05,
              marginVertical: winWidth * 0.05,
              color: 'black',
              alignSelf: 'flex-start',
            }}>
            Categories
          </Text>

          <ScrollView horizontal={true} style={{height: winWidth * 0.3}}>
            <HeadlineItem />
            <HeadlineItem />
            <HeadlineItem />
            <HeadlineItem />

            <HeadlineItem />
          </ScrollView>
        </View>
        {/**skin types */}
        <View
          style={{
            alignItems: 'center',
            marginTop: winWidth * 0.05,
            backgroundColor: 'white',
            marginTop: winWidth * 0.06,
            elevation: 2,
          }}>
          <Text
            style={{
              fontSize: winWidth * 0.05,
              fontWeight: '600',
              marginHorizontal: winWidth * 0.05,
              marginVertical: winWidth * 0.05,
              color: 'black',
              alignSelf: 'flex-start',
            }}>
            Skin Types
          </Text>

          <ScrollView
            horizontal={true}
            style={{backgroundColor: 'white', height: winWidth * 0.3}}>
            <HeadlineItem />
            <HeadlineItem />
            <HeadlineItem />
            <HeadlineItem />

            <HeadlineItem />
          </ScrollView>
        </View>

        <MainItem />
        <MainItem />
        <MainItem />
        <MainItem />
      </ScrollView>

      {/** bottpm tab */}
      <View
        style={{
          height: winHeight * 0.1,
          backgroundColor: 'white',
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

export default AppThree;

const styles = StyleSheet.create({});
