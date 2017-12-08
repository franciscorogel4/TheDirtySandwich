import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper'; // 1.5.4
import Blue from './TabContents';
import ScreenColor from '../../ScreenColor';

const bgColor = ScreenColor.color0;

export default class SwipeScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log('this dot props dot img');
    console.log(this.props.img);
    return (
      <Swiper height={450} style={styles.wrapper} showsButtons>
        <View style={styles.slide1}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
        <View style={styles.slide2}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
        <View style={styles.slide3}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
