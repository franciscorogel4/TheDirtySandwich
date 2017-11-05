import React from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { FormInput, FormLabel, CheckBox, Card } from 'react-native-elements';
import fire from '../customComponents/Fire';


export default class CreateListing extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.statusBarPadding}/>
        <FlatList data={[{key: 'a'}]}renderItem={({item}) => {return(<Form/>);}}/>
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
      canSubmit: false,
      title: '',
      price: '',
      description: '',
      altEmail: '',
      altPhone: ''
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Type of Listing'>
          <View style={styles.warningMessageView}>
            <Text style={styles.warningMessage}>
              {'A listing type is required.'}
            </Text>
          </View>
          <View  style={styles.buttonGroup}>
            <CheckBox title='Book' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[0]} onPress={ () => {
                this.setState({listingTypeArray: [!this.state.listingTypeArray[0], false, false, false, false]},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <CheckBox title='Tutor' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[1]} onPress={ () => {
                this.setState({listingTypeArray: [false, !this.state.listingTypeArray[1], false, false, false]},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <CheckBox title='Furniture' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[2]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, !this.state.listingTypeArray[2], false, false]},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <CheckBox title='Roommate' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[3]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, false, !this.state.listingTypeArray[3], false]},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <CheckBox title='Carpool' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
              containerStyle={styles.checkBoxContainer}
              checked={this.state.listingTypeArray[4]} onPress={ () => {
                this.setState({listingTypeArray: [false, false, false, false, !this.state.listingTypeArray[4]]},
                () => {this.setState({canSubmit: this.canSubmit()});});
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
            <View style={styles.warningMessageView}>
              <Text style={styles.warningMessage}>
                {'This field is required.'}
              </Text>
            </View>
            <FormInput maxLength={40} inputStyle={{width: 270}} placeholder={'Enter title'}
              onChangeText={(text) => {this.setState({title: text},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <FormLabel>Price</FormLabel>
            <View style={styles.warningMessageView}>
              <Text style={styles.warningMessage}>
                {'This field is required.'}
              </Text>
            </View>
            <FormInput maxLength={20} inputStyle={{width: 270}} placeholder={'Enter price'}
              onChangeText={(text) => {this.setState({price: text},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <FormLabel>Description</FormLabel>
            <FormInput placeholder={'Enter description'} inputStyle={{width: 270, height: 150}} maxLength={750} multiline={true}
              onChangeText={(text) => {this.setState({description: text});}}
            />
          </View>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Listing Images'>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Contact Information'>
          <View style={styles.warningMessageView}>
            <Text style={styles.warningMessage}>
              {'At least one method of contact is required.'}
            </Text>
          </View>
          <View style={styles.formInputSection}>
            <FormLabel>Saved contact info to display</FormLabel>
            <View style={styles.buttonGroup}>
              <CheckBox title='Email' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
                containerStyle={styles.checkBoxContainer}
                checked={this.state.contactInfoUsingArray[0]} onPress={ () => {
                  this.setState({contactInfoUsingArray: [!this.state.contactInfoUsingArray[0], this.state.contactInfoUsingArray[1]]},
                    () => {this.setState({canSubmit: this.canSubmit()});});
                }}
              />
              <CheckBox title='Phone' checkedIcon='check-circle-o' uncheckedIcon='circle-o'
                containerStyle={styles.checkBoxContainer}
                checked={this.state.contactInfoUsingArray[1]} onPress={ () => {
                  this.setState({contactInfoUsingArray: [this.state.contactInfoUsingArray[0], !this.state.contactInfoUsingArray[1]]},
                    () => {this.setState({canSubmit: this.canSubmit()});});
                }}
              />
            </View>
            <FormLabel>Alternate Email</FormLabel>
            <FormInput keyboardType={'email-address'} maxLength={50} placeholder={'Enter alternate email address'}
              onChangeText={(text) => {this.setState({altEmail: text},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
            <FormLabel>Alternate Phone #</FormLabel>
            <FormInput keyboardType={'numeric'} placeholder={'Enter alternate phone #'}
              onChangeText={(text) => {this.setState({altPhone: text},
                () => {this.setState({canSubmit: this.canSubmit()});});
              }}
            />
          </View>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <TouchableOpacity activeOpacity={(this.state.canSubmit) ? 0.5 : 1}>
          <Card>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: (this.state.canSubmit) ? 'black' : '#DFDFDF'}}>Submit</Text>
            </View>
          </Card>
        </TouchableOpacity>
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

  canSubmit(){

    var hasListingType = false;
    var usingSavedContactInfo = false;

    for(var i of this.state.listingTypeArray){
      if(i){
        hasListingType = true;
        break;
      }
    }

    for(var i of this.state.contactInfoUsingArray){
      if(i){
        usingSavedContactInfo = true;
      }
    }

    if((hasListingType && (this.state.title != '' && this.state.price != '')) &&
       (usingSavedContactInfo || (this.state.altEmail != '' || this.state.altPhone != ''))){
      return true;
    }

    return false;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center',
  },
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: 'steelblue'
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
  divider: {
    flex: 0.1,
    backgroundColor: 'steelblue'
  },
  submitButton: {
    backgroundColor: 'orange',
    color: 'black'
  },
  warningMessageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  warningMessage: {
    color: 'red'
  }
});
