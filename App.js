import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './willem-wf3/Main';
import TabContents from './willem-wf3/customComponents/TabContents';
import InitialScreen from './scacela-wf5/InitialScreen';


export default class App extends React.Component {
  render() {
    return (
      <TabContents/>
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
