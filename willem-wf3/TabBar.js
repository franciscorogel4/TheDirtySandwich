import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class TabBar extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Hello. This is Me.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C2185B'
  }
});
