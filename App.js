import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './willem-wf3/Main';
import CreateListing from './willem-wfCreateListing/CreateListing';
import InitialScreen from './scacela-wf5/InitialScreen';


export default class App extends React.Component {
  render() {
    return (
      <CreateListing/>
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
