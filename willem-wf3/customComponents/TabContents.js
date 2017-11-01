import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import fire from './Fire';

export default class TabContents extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      filteredCellArray: [],
      masterCellArray: []
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.topBar}>
            <SearchBar containerStyle={{flex: 1}}
              selectTextOnFocus={true} placeholder='Search' placeholderTextColor={'#8086939e'}
              onChangeText={(searchText) => {this.searchTextChanged(searchText);}}
            />
            <View style={styles.profileButton}>
              <FontAwesome name='user' size={32} color='white'/>
            </View>
        </View>
          <FlatList style={{flex: 1}} data={this.state.filteredCellArray} extraData={this.state}
            renderItem={
              ({item}) => {
                return(
                  <Card image={{uri: item.uri}} title={item.title}/>
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

  componentDidUpdate(){
    console.log('component DID update!');
  }

  componentWillMount(){
    fire.database().ref('listings/' + this.props.item).once('value').then(
      (data) => {
        var dbListings = [];
        data.forEach((node) => {
          dbListings.push(node.val());
          /* this is for getting the download url
          fire.storage().ref().child(node.val().uri).getDownloadURL().then((url) => {
            console.log('Retrieved url: ' + url);
          }).catch((error) => {
            console.log(error.code);
          });
          */
        });
        this.setState({masterCellArray: dbListings, filteredCellArray: dbListings});
      },
      (error) => {
        console.log('there was an error: ');
        console.log(error.code);
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
  topBar: {
    flex: 0.1,
    flexDirection: 'row',
    height: 60
  },
  profileButton: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393E42'
  }
});
