import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper'; // 1.5.4
import Blue from './TabContents';
import ScreenColor from '../../ScreenColor';

const bgColor = ScreenColor.color0;

export default class SwipeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgUri: ''
    }
  }

  render() {
    console.log('this dot props dot img');
    console.log(this.state.imgUri);
    return (
      <Swiper height={450} style={styles.wrapper}>
        <View style={styles.slide}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
        <View style={styles.slide}>
          <Image source={require('../sliderImages/professor_pencil.jpg')}/>
        </View>
      </Swiper>
    );
  }

  componentWillMount(){
    this.setState({imgUri: this.props.img});
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    flex: 1,
    backgroundColor: 'transparent'
  }
});
