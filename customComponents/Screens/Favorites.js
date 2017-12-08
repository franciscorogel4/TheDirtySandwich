import React, {Component} from "react";
import { StatusBar, Platform, TouchableOpacity, Alert, StyleSheet, View, Image, Text, FlatList} from "react-native";
import { SearchBar, Card, Button, FormLabel } from "react-native-elements";
import fire from '../Fire';
import ScreenColor from '../../ScreenColor';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class Favorites extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      masterCellArray: [],
      filteredCellArray: [],
      viewedCellArray: [],
      refreshing: false,
      cellsShown: 0,
      liked: []
    };
  }

  onFavoriteButtonPressed = (a) => {

    var temp = this.state.liked;

    if (this.state.liked[a.key] == 'star-o') {
        fire.database().ref('empUsers/' + fire.auth().currentUser.uid + '/Favorites/' + a.key).update(a);
        temp[a.key] = 'star';
      }


    else if (this.state.liked[a.key] == 'star') {
      fire.database().ref('empUsers/' + fire.auth().currentUser.uid + '/Favorites/' + a.key).remove();
      temp[a.key] = 'star-o';
   }
    this.setState({liked: temp});
    console.log('onFavoriteButtonPressed');
  };




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
  this.setState({refreshing: true});
  fire.database().ref('empUsers/' + fire.auth().currentUser.uid + '/Favorites/').once('value').then(
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
        });
      });
    },
    (error) => {
      console.log('there was an error: ');
      console.log(error.code);
    }
  );
}

render() {
  return (
    <View style={styles.container}>
       <View style={styles.topBar}>
          <SearchBar containerStyle={{flex: 1, borderTopWidth: 0, borderBottomWidth: 0}}
             selectTextOnFocus={true} placeholder='Search' placeholderTextColor={'#8086939e'}
             onChangeText={(searchText) => {this.searchTextChanged(searchText);}}
           />
       </View>
      <FlatList data={this.state.filteredCellArray} extraData={this.state}
        refreshing={this.state.refreshing} onRefresh={this.refreshListings.bind(this)}
        renderItem={
          ({item}) => {

            if (!this.state.liked[item.key]) {
                var temp = this.state.liked;
                temp[item.key] = 'star';
                this.setState({liked: temp});
            }

            return(
              <TouchableOpacity styleName="flexible" onPress={() => this.props.navigation.navigate('ListingInfo', {itemKey : item}) }>
              <Card image={{uri: item.uri}} title={item.title}>
                <Text>{item.description}</Text>
                <View style={styles.favoriteButton}>
                  <FontAwesome
                    name={this.state.liked[item.key]}
                    size={32}
                    color= {ScreenColor.color4}
                    onPress={() => this.onFavoriteButtonPressed(item)}
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
  }
});
