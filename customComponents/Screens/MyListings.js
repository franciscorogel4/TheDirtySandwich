import React from 'react';
import { Alert, Platform, TouchableOpacity, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import fire from '../Fire';
import ScreenColor from '../../ScreenColor';

export default class MyListings extends React.Component{

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

  onProfileButtonPressed = () => {
    var user = fire.auth().currentUser;

    if (user) {
      this.props.navigation.navigate('Profile');
      console.log("user is signed in under: " + user.email);

    } else {
      console.log("User is not signed in ");
      Alert.alert(
        'No profile found',
        'You must have an account to have a profile',
        [
          {text: 'Sign Up', onPress: () => this.props.navigation.navigate('SignUp')},
          {text: 'Sign In', onPress: () => this.props.navigation.navigate('SignIn')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )
    }
  };

  onNewListingButtonPressed = () => {
    var user = fire.auth().currentUser;

    if (user) {
      console.log("User is signed in: " + user.email);
      this.props.navigation.navigate('CreateListing');

    } else {
      console.log("User is not signed in ");
      Alert.alert("To create a listing you must create an account");
    }
  };

  onSeeMorePressed = () => {
    this.props.navigation.navigate('Listing');
    console.log("listing Button Pressed");
  };


  render() {
    return (
      <View style={styles.container}>
         <View style={styles.statusBarPadding}/>
        <FlatList data={this.state.filteredCellArray} extraData={this.state}
          refreshing={this.state.refreshing} onRefresh={this.refreshListings.bind(this)}
          renderItem={
            ({item}) => {
              return(
                <TouchableOpacity styleName="flexible" onPress={() => this.props.navigation.navigate('ListingInfo', {itemKey : item}) }>
                <Card image={{uri: item.uri}} title={item.title}>
                  <Text>{item.description}</Text>
                  <View style={styles.favoriteButton}>
                    <FontAwesome
                      name='star-o'
                      size={32}
                      color= {ScreenColor.color3}
                      onPress={() => fire.database().ref('empUsers/Paco/favorites').push({item})}
                      />
                  </View>
                </Card>
                </TouchableOpacity>
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

  componentWillMount(){
    this.refreshListings();
  }

  createViewedCellArray(){
    var viewingArray = [];
    for(var i=this.state.cellsShown; i<this.state.filteredCellArray.length&&i<20; i++){
      viewingArray.push(this.state.filteredCellArray[i]);
    }
    this.setState({cellsShown: this.state.cellsShown+i});
    return viewingArray;
  }

  refreshListings(){
    var user = fire.auth().currentUser;

    this.setState({refreshing: true});
    fire.database().ref('empUsers/' + user.uid + '/myListings').once('value').then(
      (data) => {
        var dbListings = [];
        data.forEach((node) => {
          dbListings.push(node.val());
        });
        this.setState({masterCellArray: dbListings, filteredCellArray: dbListings, cellsShown: 0}, () => {
          this.setState({viewedCellArray: this.createViewedCellArray()}, () => {
            this.setState({refreshing: false});
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
    backgroundColor: ScreenColor.color0

  },
  topBar: {
    flexDirection: 'row',
    height: 50,
  },
  profileButton: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ScreenColor.color3
  },
  newListingButton: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ScreenColor.color3
  },
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: '#EFEDF1'
  }
});
