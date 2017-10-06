import React from 'react';
import ReactNative from 'react-native';
import * as firebase from 'firebase';
import { StyleSheet, Text, View, FlatList, StatusBar, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createFilteredArray } from './custom_components/SearchFilter';
import ListingCell from './custom_components/ListingCell';

let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};

var cells = [{title: 'A Chair', description: 'B', source: pic, key: 'a'}, {title: 'Three Chairs', description: 'D', source: pic, key: 'b'},
{title: 'Couch', description: 'F', source: pic, key: 'c'}, {title: 'Textbook', description: 'H', source: pic, key: 'd'},
{title: 'Math textbook', description: 'A', source: pic, key: 'e'}, {title: 'physics textbook', description: 'L', source: pic, key: 'f'},
{title: 'HISTORY TEXTBOOK', description: 'N', source: pic, key: 'g'}, {title: 'Lamps', description: 'P', source: pic, key: 'h'},
{title: 'Bed', description: 'A', source: pic, key: 'i'}, {title: 'TV', description: 'T', source: pic, key: 'j'},
{title: 'Toothbrush', description: 'A', source: pic, key: 'k'}];

const firebaseConfig = {
  apiKey: 'AIzaSyDBXjNByBcC2K5fBgK-hTrqNhhjOR3fKgw',
  authDomain: 'novaemporium-5b87b.firebaseapp.com',
  databaseURL: 'https://novaemporium-5b87b.firebaseio.com',
  storageBucket: 'novaemporium-5b87b.appspot.com'
};
firebase.initializeApp(firebaseConfig);

export default class Main extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      filteredCellArray: cells
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <SearchBar
          selectTextOnFocus={true} placeholder='Search'placeholderTextColor={'#8086939e'}
          onChangeText={(searchText) => {this.searchTextChanged(searchText);}}
        />
        <FlatList data={this.state.filteredCellArray} extraData={this.state}
          renderItem={({item}) =>
            <ListingCell key={item.key} title={item.title} description={item.description} source={item.source}/>
          }
        />
      </View>
    );
  }

  searchTextChanged(newText){
    this.setState({filteredCellArray: createFilteredArray(newText.toLowerCase(), cells)});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'steelblue'
  }
});
