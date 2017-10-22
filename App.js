import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './willem-wf3/Main';
import TabBar from './willem-wf3/TabBar';
import InitialScreen from './scacela-wf5/InitialScreen';

export default class App extends React.Component {
  render() {
    return (
      <TabBar/>
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
