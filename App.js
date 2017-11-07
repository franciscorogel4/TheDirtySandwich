import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNav, InitialStackNavigator } from './customComponents/router';


export default class App extends React.Component {
  render() {
    return (
      <TabNav/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
