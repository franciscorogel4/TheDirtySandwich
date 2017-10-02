import React from 'react'
import { StyleSheet, TextInput, View} from 'react-native'

export default class SearchBar extends React.Component{

  constructor(props){
    super(props);

    this.searchTextChanged = this.searchTextChanged.bind(this);

    this.state = {
      searchText: ''
    };
  }

  render(){
    return(
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar}
          placeholder={'Search'} returnKeyType='search' selectTextOnFocus={true}
          onChangeText={(searchText) => {this.searchTextChanged(searchText)}} onSubmitEditing={test}
          underlineColorAndroid={'transparent'}
        />
      </View>
    );
  }

  searchTextChanged(newText){

    console.log(newText);
    this.setState(() => {
      return {newText};
    });
  }
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: 'lightgray',
    height: 55
  },
  searchBar: {
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 10,
    fontSize: 15,
    borderColor: 'transparent',
    backgroundColor: 'white',
    textAlign: 'left'
  }
});
