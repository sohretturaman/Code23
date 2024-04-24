import {
    Dimensions,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import React from 'react';
import Title from '../component/calendarComps/Title';
import WeekDayItem from '../component/calendarComps/WeekDayItem';
  
  const winWidth = Dimensions.get('window').width;
  const winHeight = Dimensions.get('window').height;
  //create ann object instance for other components
  const CalendarPage = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
    const daysOfMonth = Array.from({length: 34}, (_, index) =>
      index > 2 ? index - 2 : null,
    );
    //const days= Array.from(daysOfWeek, (index) => index+index);
    daysOfMonth.push(null); // added one more empty item
    const days = Array.from(daysOfWeek, (_, index) => index);
  
    console.log('days', daysOfMonth);
  
    return (
      <ScrollView
        style={{
          height: winHeight,
          width: winWidth,
          backgroundColor: '#f6f6f6',
          paddingBottom: winWidth * 0.3,
        }}>
        {/* title */}
         <Title />
        {/* week days */}
        <View
          style={{
            flexDirection: 'row',
            width: winWidth * 0.9,
            height: winWidth * 0.12,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          {daysOfWeek.map((day, index) => (
           <WeekDayItem key={index} day={day}/>
          ))}
        </View>
        {/* calendar days */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: winWidth * 0.9,
            marginTop: winWidth * 0.02,
            alignSelf: 'center',
            justifyContent: 'space-between',
  
            height: winWidth * 0.6,
            width: winWidth * 0.9,
          }}>
          {daysOfMonth.map((day, index) => (
            <View
              key={index}
              style={{
                width: winWidth * 0.12,
                height: winWidth * 0.12,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: day == 17 ? '#5451D6' : 'transparent',
                borderRadius: winWidth * 0.12,
              }}>
              {
                <Text
                  style={{
                    fontSize: winWidth * 0.035,
                    color: day==17 ? 'white' : 'black',
                    fontWeight: '500',
                  }}>
                  {day}
                </Text>
              }
            </View>
          ))}
        </View>
  
        <View
          style={{
            width: winWidth * 0.85,
            height: winWidth * 0.1,
            justifyContent: 'space-between',
            marginTop: winWidth * 0.1,
            alignSelf: 'center',
            alignItems: 'flex-start',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: winWidth * 0.05,
              fontWeight: '600',
              marginTop: winWidth * 0.03,
            }}>
            Ongoing
          </Text>
        </View>
        {/**time and event container */}
        <View
          style={{
            flexDirection: 'row',
            height: winWidth * 0.3,
            width: winWidth * 0.9,
            marginTop: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: winWidth * 0.15,
              height: winWidth * 0.3,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidth * 0.03,
                fontWeight: '600',
              }}>
              09 am
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: winWidth * 0.03,
                fontWeight: '600',
              }}>
              10 am
            </Text>
          </View>
          {/**container */}
          <View
            style={{
              width: winWidth * 0.75,
              height: winWidth * 0.3,
              justifyContent: 'center',
              paddingHorizontal: winWidth * 0.05,
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
        </View>
        {/**line between events */}
  
        <View
          style={{
            width: winWidth * 0.9,
            height: winWidth * 0.05,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'center',
            marginTop: winWidth * 0.1,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: winWidth * 0.03,
              fontWeight: '600',
            }}>
            7 am
          </Text>
  
          <View
            style={{
              width: winWidth * 0.7,
              height: winWidth * 0.005,
              backgroundColor: '#442FB3',
              alignSelf: 'center',
              borderRadius: winWidth * 0.03,
            }}
          />
        </View>
  
        {/**time and event container */}
        <View
          style={{
            flexDirection: 'row',
            height: winWidth * 0.3,
            width: winWidth * 0.9,
            marginTop: winWidth * 0.1,
            alignItems: 'center',
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: winWidth * 0.15,
              height: winWidth * 0.3,
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: winWidth * 0.03,
                fontWeight: '600',
              }}>
              09 am
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: winWidth * 0.03,
                fontWeight: '600',
              }}>
              10 am
            </Text>
          </View>
          {/**container */}
          <View
            style={{
              width: winWidth * 0.75,
              height: winWidth * 0.3,
              justifyContent: 'center',
              paddingHorizontal: winWidth * 0.05,
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
        </View>
      </ScrollView>
    );
  };
  
  export default CalendarPage;
  
  const styles = StyleSheet.create({});
  