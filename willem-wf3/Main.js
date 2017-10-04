import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { createFilteredArray } from './custom_components/SearchFilter';
import ListingCell from './custom_components/ListingCell';

let pic = {
  uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
};

var cells = [{title: 'A', description: 'B', source: pic, key: 'a'}, {title: 'A', description: 'D', source: pic, key: 'b'},
{title: 'E', description: 'F', source: pic, key: 'c'}, {title: 'G', description: 'H', source: pic, key: 'd'},
{title: 'I', description: 'A', source: pic, key: 'e'}, {title: 'A', description: 'L', source: pic, key: 'f'},
{title: 'M', description: 'N', source: pic, key: 'g'}, {title: 'O', description: 'P', source: pic, key: 'h'},
{title: 'Q', description: 'A', source: pic, key: 'i'}, {title: 'A', description: 'T', source: pic, key: 'j'},
{title: 'U', description: 'A', source: pic, key: 'k'}];

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
