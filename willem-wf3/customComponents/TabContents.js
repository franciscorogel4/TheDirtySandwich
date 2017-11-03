import React from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import fire from './Fire';

export default class TabContents extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      masterCellArray: [],
      filteredCellArray: [],
      viewedCellArray: [],
      refreshing: false,
      cellsShown: 0
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <View style={styles.statusBarPadding}/>
        <View style={styles.topBar}>
            <SearchBar containerStyle={{flex: 1, borderTopWidth: 0, borderBottomWidth: 0}}
              selectTextOnFocus={true} placeholder='Search' placeholderTextColor={'#8086939e'}
              onChangeText={(searchText) => {this.searchTextChanged(searchText);}}
            />
            <View style={styles.profileButton}>
              <FontAwesome name='user' size={32} color='white'/>
            </View>
        </View>
          <FlatList style={{flex: 1}} data={this.state.viewedCellArray} extraData={this.state}
            refreshing={this.state.refreshing} onRefresh={this.refreshListings.bind(this)}
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
    this.setState({filteredCellArray: this.createFilteredArray(newText.toLowerCase(), this.state.masterCellArray), cellsShown: 0}, () => {
      this.setState({viewedCellArray: this.createViewedCellArray()});
    });
  }

  createViewedCellArray(){
    var viewingArray = [];
    for(var i=this.state.cellsShown; i<this.state.filteredCellArray.length&&i<20; i++){
      viewingArray.push(this.state.filteredCellArray[i]);
    }
    this.setState({cellsShown: this.state.cellsShown+i});
    return viewingArray;
  }



  componentWillMount(){
    this.refreshListings();
  }

  refreshListings(){
    this.setState({refreshing: true});
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
        this.setState({masterCellArray: dbListings, filteredCellArray: dbListings, cellsShown: 0}, () => {
          this.setState({viewedCellArray: this.createViewedCellArray()}, () => {
            this.setState({refreshing: false});
            console.log(this.state.masterCellArray);
            console.log(this.state.filteredCellArray);
            console.log(this.state.viewedCellArray);
          });
        });
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
  },
  statusBarPadding: {
    height: 20,
    backgroundColor: '#393E42'
  }
});
