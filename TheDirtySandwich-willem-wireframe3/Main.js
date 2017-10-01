import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Alert } from 'react-native';
import ListingCell from './custom_components/listingCell';
import SearchBar from './custom_components/searchBar';

export default class Main extends React.Component {

  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    let cells = [{title: 'Item', description: 'thing', source: pic, key: 'a'}, {title: 'Item', description: 'thing', source: pic, key: 'b'},
    {title: 'Item', description: 'thing', source: pic, key: 'c'}, {title: 'Item', description: 'thing', source: pic, key: 'd'},
    {title: 'Item', description: 'thing', source: pic, key: 'e'}, {title: 'Item', description: 'thing', source: pic, key: 'f'},
    {title: 'Item', description: 'thing', source: pic, key: 'g'}, {title: 'Item', description: 'thing', source: pic, key: 'h'},
    {title: 'Item', description: 'thing', source: pic, key: 'i'}, {title: 'Item', description: 'thing', source: pic, key: 'j'},
    {title: 'Item', description: 'thing', source: pic, key: 'k'}];

    var listingCellArray = cells.map((item) => {
      return(<ListingCell key={item.key} title={item.title} description={item.description} source={item.source}/>);
    });

    test = () => {
      Alert.alert('Hello');
    }

    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <SearchBar cells={listingCellArray}/>
        <FlatList data={listingCellArray} renderItem={({item}) => <View>{item}</View>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'steelblue'
  }
});
