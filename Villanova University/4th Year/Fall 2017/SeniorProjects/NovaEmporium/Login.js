import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
} from 'react-native';

import Register from './Register';
import Forgot from './Forgot';

import { TabNavigator, StackNavigator } from 'react-navigation';

export default class Login extends Component{

  render(){
  const stackNavigator = StackNavigator({
     Login: {screen: Login},
     Register: { screen: Register },
     Forgot: {screen: Forgot },
  }, {
     headerMode: 'none'
  });

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Login
        </Text>

        <TouchableHighlight onPress={() => this.bind.StackNavigator('Register')} >
          <View style={styles.box}>
            <Text style={styles.innards}>
              Register
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight >
          <View style={styles.box}>
            <Text style={styles.innards}>
              Forgot password
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  innards: {
    color: "white",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "500"
  },
  box: {
    height: 45,
    width: 300,
    backgroundColor: "red",
    justifyContent: "center",
    marginTop: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
