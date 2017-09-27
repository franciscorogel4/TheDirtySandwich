import React, { Component } from 'react';
import Login from './src/components/login/Login';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class RNT extends Component {
  render() {
    return (
      <Login/>
    );
  }
}
AppRegistry.registerComponent('RNT', () => RNT
