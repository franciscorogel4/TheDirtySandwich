import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import ListingCell from './ListingCell';
import fire from './Fire';

export default class TabContents extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      filteredCellArray: [],
      masterCellArray: []
    };
  }
  /* use for 'renderItem'
  <ListingCell key={item.key} title={item.title} description={item.description} source={item.source}/>
  */

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <SearchBar
          selectTextOnFocus={true} placeholder='Search'placeholderTextColor={'#8086939e'}
          onChangeText={(searchText) => {this.searchTextChanged(searchText);}}
        />
        <FlatList data={this.state.filteredCellArray} extraData={this.state}
          renderItem={
            ({item}) => {
              return(
                <Card image={{uri: item.uri}} title={item.title}>
                  <Text>{item.description}</Text>
                </Card>
              );
            }
          }
        />
      </View>
    );
  }

  searchTextChanged(newText){
    this.setState({filteredCellArray: this.createFilteredArray(newText.toLowerCase(), this.state.masterCellArray)});
  }

  componentWillMount(){
    fire.database().ref('listings/' + this.props.item).once('value').then(
      (data) => {
        var dbListings = [];
        data.forEach((node) => {
          dbListings.push(node.val());
        });
        this.setState({masterCellArray: dbListings, filteredCellArray: dbListings});
      },
      (error) => {
        console.log('there was an error: ');
        console.log(error);
      }
    );
  }

  writeUserData(){
    /* use for posting to database
    console.log('writing data...');
    fire.database().ref('listings/test').set({
      description: 'Hello',
      key: 'b',
      source: pic,
      title: 'Testing'
    }).then((value) => {
      console.log('data wrote. push key: ' + value);
    },(reason) => {
        console.log('failed. error: ' + reason)
    });
    */
  }

  createFilteredArray(filterText, rawArray){
    var filteredArray = [];
    var filterTextRegEx = new RegExp(filterText, 'i');
    var regExArray = [filterTextRegEx];

    if(filterText == ''){
      return rawArray;
    }

    for(var cellData of rawArray){
      if(cellData.title.toLowerCase().match(filterTextRegEx) || cellData.description.toLowerCase().match(filterTextRegEx)){
        filteredArray.push(cellData);
      }
    }
    return filteredArray;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'steelblue'
  },
  image:{
    height: 100,
    width: 100
  }
});
