import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const winWidht = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
const ThirdDesign = () => {
  const DotsButton = () => {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'black',
              height: 5,
              width: 5,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <View
            style={{
              backgroundColor: 'black',
              height: 5,
              width: 5,
              borderRadius: 10,
              margin: 3,
            }}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'black',
              height: 5,
              width: 5,
              borderRadius: 10,
              margin: 3,
            }}
          />
          <View
            style={{
              backgroundColor: 'black',
              height: 5,
              width: 5,
              borderRadius: 10,
              margin: 3,
            }}
          />
        </View>
      </View>
    );
  };
  const Title = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            color: '#3C44A8',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: winHeight * 0.025,
          }}>
          {' '}
          X{' '}
        </Text>
        <Text
          style={{
            color: '#A0DBF5',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: winHeight * 0.025,
          }}>
          {' '}
          E{' '}
        </Text>
      </View>
    );
  };
  const CategoryHeadline = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            elevation: 1,
            width: winWidht * 0.3,
            height: winWidht * 0.1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
          }}>
          <Image
            source={require('./images/shoes.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>Shoes</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            elevation: 1,
            width: winWidht * 0.3,
            height: winWidht * 0.1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
          }}>
          <Image
            source={require('./images/watch.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>watch</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            elevation: 1,
            width: winWidht * 0.3,
            height: winWidht * 0.1,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginHorizontal: 5,
          }}>
          <Image
            source={require('./images/hat.png')}
            style={{height: 30, width: 30}}
          />
          <Text style={{fontWeight: 'bold', fontSize: 14}}>Backpack</Text>
        </View>
      </View>
    );
  };
  const Stars = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          width:winWidht*0.3,
          height: winWidht * 0.04,
       
        }}>
        <Image
          source={require('./images/star.png')}
          style={{
            height: 15,
            width: 15,
            paddingHorizontal: 2,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('./images/star.png')}
          style={{
            height: 15,
            width: 15,
            paddingHorizontal: 2,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('./images/star.png')}
          style={{
            height: 15,
            width: 15,
            paddingHorizontal: 2,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('./images/star.png')}
          style={{
            height: 15,
            width: 15,
            paddingHorizontal: 2,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('./images/starOutline.png')}
          style={{height: 14, width: 14, resizeMode: 'contain'}}
        />
      </View>
    );
  };

  const Product = () => {
    return (
      <View
        style={{
          elevation: 2,
          width: winWidht * 0.45,
          height: winWidht * 0.6,
          alignItems: 'center',
          borderRadius: 20,
          padding: 10,
          backgroundColor: 'white',
          marginHorizontal: 10,
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            height: 20,
            marginTop: 10,
            paddingHorizontal: 10,
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
           
          }}>
          <View
            style={{
              backgroundColor: '#A1DCF5',
              width: winWidht * 0.1,
              height: winWidht * 0.05,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: 'black',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: winWidht * 0.035,
              }}>
              %30
            </Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: 'red',
              borderRadius: winWidht * 0.06,
              width: winWidht * 0.06,
              height: winWidht * 0.06,
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
        <View
          style={{
            width: winWidht * 0.4,
            height: winWidht * 0.5,
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#FDDFCE',
              padding: 10,
              borderRadius: 100,
              height: winWidht * 0.25,
              width: winWidht * 0.25,
            }}>
            <Image
              source={require('./images/shoes.png')}
              style={{
                height: winWidht * 0.22,
                width: winWidht * 0.22,
                position: 'absolute',
                alignSelf: 'flex-end',
                bottom: 2,
                right: -10,
              }}
            />
          </View>
        </View>
        {/*text */}
        <View
          style={{
            width: winWidht * 0.4,
            alignItems: 'center',
            marginVertical: winWidht * 0.05,
           
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: '#343BA5',
              fontSize: winWidht * 0.04,
            }}>
            {' '}
            Nike Ait Max 20
          </Text>
          <Text style={{fontWeight: 'bold', color: '#343BA5', fontSize: winWidht * 0.05}}>
            {' '}
            240.00
          </Text>
        </View>
        <Stars />
      </View>
    );
  };

  return (
    <ScrollView style={{height: winHeight*1, width: winWidht*1}} >
      <View
        style={{
          backgroundColor: '#F5F5F5',
          flex: 1,
          alignItems: 'center',
          height: winHeight * 1,
        }}>
        {/** title */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
            alignItems: 'center',
            paddingHorizontal: 15,
            width: '100%',
            paddingHorizontal: 20,
            height: winHeight * 0.05,
          }}>
          <DotsButton />
          <Title />
          <Image
            source={require('./images/rectangle.png')}
            style={{height: winWidht * 0.05, width: winWidht * 0.05}}
          />
        </View>
        <View
          style={{
            padding: 10,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 15,
            width: winWidht,
            height: winHeight * 0.07,
          }}>
          <Text
            style={{
              fontWeight: '800',
              fontSize: winHeight * 0.025,
              color: 'black',
            }}>
            Our Products
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: winHeight * 0.02,
            }}>
            <Text>Short by</Text>
            <Image
              source={require('./images/chevron.png')}
              style={{
                height: 15,
                width: 15,
                marginLeft: 5,
                alignSelf: 'flex-end',
              }}
            />
          </View>
        </View>
        {/**category titles */}
        <View style={{height: winWidht * 0.1}}>
          <CategoryHeadline />
        </View>
        {/**products */}
        <View style={{height: winHeight * 0.7, width: winWidht}}>
          {/** first item */}
          <View
            style={{
              flexDirection: 'row',
              marginTop: winWidht * 0.02,
              alignItems: 'center',
             
              height: winHeight * 0.35,
            }}>
            <Product />
            <Product />
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: winWidht * 0.02,
              alignItems: 'center',
              height: winHeight * 0.35,
            }}>
            <Product />
            <Product />
          </View>
        </View>
        {/** bottom tab  */}
        <View
          style={{
            marginTop: winWidht * 0.02,
            flexDirection: 'row',
            width: winWidht,
            justifyContent: 'space-between',
            height: winHeight * 0.08,
            alignItems: 'center',
            paddingHorizontal: winWidht * 0.05,
            paddingVertical: winWidht * 0.03,
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'white',
          }}>
          <View style={{height: winWidht * 0.1}}>
            <Image
              source={require('./images/mail.png')}
              style={{height: winWidht * 0.075, width: winWidht * 0.075}}
            />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Image
              source={require('./images/heartGray.png')}
              style={{height: winWidht * 0.075, width: winWidht * 0.075}}
            />
          </View>
          {/**center item */}
          <View
            style={{
              backgroundColor: '#343BA5',
              width: winWidht * 0.15,
              height: winWidht * 0.15,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 2,
              borderRadius: winWidht * 0.15,
              marginBottom: winHeight * 0.08,
            }}>
            <Image
              source={require('./images/store.png')}
              style={{height: winWidht * 0.075, width: winWidht * 0.075}}
            />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Image
              source={require('./images/heartGray.png')}
              style={{height: winWidht * 0.075, width: winWidht * 0.075}}
            />
          </View>
          <View style={{backgroundColor: 'white'}}>
            <Image
              source={require('./images/heartGray.png')}
              style={{height: winWidht * 0.075, width: winWidht * 0.075}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ThirdDesign;

const styles = StyleSheet.create({});
