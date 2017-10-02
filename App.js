import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './TheDirtySandwich-willem-wf3/Main';
import LogIn from './TheDirtySandwich-scacela-wf5/InitialScreen';

export default class App extends React.Component {
  render() {
    return (
      <LogIn/>
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
