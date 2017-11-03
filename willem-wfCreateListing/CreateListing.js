import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { FormInput, FormLabel, CheckBox } from 'react-native-elements';
import fire from '../customComponents/Fire';


export default class CreateListing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      checkedArray: [false, false, false, false, false]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBarPadding}/>
        <FormLabel>{'Type of Listing:'}</FormLabel>
        <View style={styles.buttonGroup}>
          <CheckBox title='Book' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
            checked={this.state.checkedArray[0]} onPress={ () => {
              this.setState({checkedArray: [!this.state.checkedArray[0], false, false, false, false]});
            }}
          />
          <CheckBox title='Tutor' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
            checked={this.state.checkedArray[1]} onPress={ () => {
              this.setState({checkedArray: [false, !this.state.checkedArray[1], false, false, false]});
            }}
          />
          <CheckBox title='Furniture' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
            checked={this.state.checkedArray[2]} onPress={ () => {
              this.setState({checkedArray: [false, false, !this.state.checkedArray[2], false, false]});
            }}
          />
          <CheckBox title='Roommate' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
            checked={this.state.checkedArray[3]} onPress={ () => {
              this.setState({checkedArray: [false, false, false, !this.state.checkedArray[3], false]});
            }}
          />
          <CheckBox title='Carpool' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
            checked={this.state.checkedArray[4]} onPress={ () => {
              this.setState({checkedArray: [false, false, false, false, !this.state.checkedArray[4]]});
            }}
          />
        </View>
        <View style={styles.formInputSection}>
          <FormInput placeholder={'Enter Name'}/>
        </View>
      </View>
    );
  }

  writeUserData(){
    // use for posting to database
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBarPadding: {
    height: 20,
    backgroundColor: 'white'
  },
  buttonGroup: {
    flex: 0.4,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'red'
  },
  formInputSection: {
    flex: 1,
    backgroundColor: 'blue'
  }
});
