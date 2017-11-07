import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { BookTab } from '../willem-wf3/Main';
import { StackNavigator } from 'react-navigation';

export default class InitialStackNavigator extends React.Component{
  render(){
    return(
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
}



const StackNav = StackNavigator({
  Screen1: {
    screen: Screen1
  },
  Screen2: {
    screen: Screen2
  },
  BookTab: {
    screen: BookTab
  }
});
