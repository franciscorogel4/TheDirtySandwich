import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { FormInput, FormLabel, CheckBox, FormValidationMessage, Card } from 'react-native-elements';
import fire from '../customComponents/Fire';


export default class CreateListing extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.statusBarPadding}/>
        <FlatList data={[{value: 'b', key: 'a'}]}renderItem={
          ({item}) => {
            return(
              <Form/>
            );
          }
        }
        />
      </View>
    );
  }
}

class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      listingTypeArray: [false, false, false, false, false],
      contactInfoUsingArray: [false, false],
      isSubmitDisabled: true,
      hasTitle: false,
      hasPrice: false,
      hasContactInfo: false
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Type of Listing'>
          <View  style={styles.buttonGroup}>
            <CheckBox title='Book' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[0]} onPress={ () => {
                this.setState({listingTypeArray: [!this.state.listingTypeArray[0], false, false, false, false],
                               isSubmitDisabled: this.shouldDisableSubmit()});
                }}
            />
            <CheckBox title='Tutor' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[1]} onPress={ () => {
                this.setState({listingTypeArray: [false, !this.state.listingTypeArray[1], false, false, false],
                               isSubmitDisabled: this.shouldDisableSubmit()});
              }}
            />
            <CheckBox title='Furniture' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[2]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, !this.state.listingTypeArray[2], false, false],
                               isSubmitDisabled: this.shouldDisableSubmit()});
              }}
            />
            <CheckBox title='Roommate' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[3]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, false, !this.state.listingTypeArray[3], false],
                               isSubmitDisabled: this.shouldDisableSubmit()});
              }}
            />
            <CheckBox title='Carpool' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[4]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, false, false, !this.state.listingTypeArray[4]],
                               isSubmitDisabled: this.shouldDisableSubmit()});
              }}
            />
          </View>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Listing Information'>
          <View style={styles.formInputSection}>
            <FormLabel>Listing Title</FormLabel>
            <FormInput placeholder={'Enter title'}/>
            <FormValidationMessage>
              {'This field is required.'}
            </FormValidationMessage>
            <FormLabel>Price</FormLabel>
            <FormInput placeholder={'Enter price'}/>
            <FormValidationMessage>
              {'This field is required.'}
            </FormValidationMessage>
            <FormLabel>Description</FormLabel>
            <FormInput placeholder={'Enter description'} multiline={true}/>
          </View>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Contact Information'>
          <View style={styles.formInputSection}>
            <FormLabel>Saved contact info to display</FormLabel>
            <View style={styles.buttonGroup}>
              <CheckBox title='Email' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
                containerStyle={styles.checkBoxContainer}
                checked={this.state.contactInfoUsingArray[0]} onPress={ () => {
                  this.setState({contactInfoUsingArray: [!this.state.contactInfoUsingArray[0], this.state.contactInfoUsingArray[1]],
                                isSubmitDisabled: this.shouldDisableSubmit()});
                }}
              />
              <CheckBox title='Phone' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
                containerStyle={styles.checkBoxContainer}
                checked={this.state.contactInfoUsingArray[1]} onPress={ () => {
                  this.setState({contactInfoUsingArray: [this.state.contactInfoUsingArray[0], !this.state.contactInfoUsingArray[1]],
                                isSubmitDisabled: this.shouldDisableSubmit()});
                }}
              />
            </View>
            <FormLabel>Alternate Email</FormLabel>
            <FormInput placeholder={'Enter alternate email address'}/>
            <FormLabel>ALternate Phone #</FormLabel>
            <FormInput placeholder={'Enter alternate phone #'}/>
          </View>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Button title='Submit' disabled={this.state.isSubmitDisabled}/>
        <View style={styles.divider}>
          <Text>{''}</Text>
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

  shouldDisableSubmit(){
    var hasListingType = false;

    for(var i of this.state.listingTypeArray){
      if(i){
        hasListingType = true;
        break;
      }
    }
    if(this.state.hasPrice && this.state.hasTitle && this.state.hasContactInfo && hasListingType){
      return false;
    }
    return true;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
  },
  statusBarPadding: {
    height: 20,
    backgroundColor: 'white'
  },
  buttonGroup: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  },
  formInputSection: {
    backgroundColor: 'white'
  },
  checkBoxContainer: {
    height: 35,
    width: 120,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  formInput: {
    width: 100
  },
  divider: {
    flex: 0.1,
    backgroundColor: 'steelblue'
  }
});
