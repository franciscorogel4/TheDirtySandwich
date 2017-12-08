import React from 'react';
import { Alert, TouchableOpacity, Platform, StyleSheet, Text, View, FlatList, Button, Image, ActivityIndicator } from 'react-native';
import { FormInput, FormLabel, CheckBox, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import RNFetchBlob from 'react-native-fetch-blob';
import fire from '../Fire';


export default class CreateListing extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList data={[{key: 'a'}]}renderItem={({item}) => {return(<Form navigation={this.props.navigation}/>);}}/>
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
      altPhone: '',
      getUrisFromCameraRollView: (uriArray) => {
        this.setState({getUrisFromCameraRollView: uriArray});
      },
      animating: false
    };
  }

  render(){
    const imageUris = [{'key': 'a', uri: require('../../images/noImage.png')}, {'key': 'b', uri: require('../../images/noImage.png')},
                {'key': 'c', uri: require('../../images/noImage.png')}, {'key': 'd', uri: require('../../images/noImage.png')},
                {'key': 'e', uri: require('../../images/noImage.png')}]
    return(
      <View style={styles.container}>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Type of Listing'>
          <View style={styles.warningMessageView}>
            <Text style={styles.warningMessage}>
              {(!this.hasListingType()) ? 'A listing type is required.' : ' '}
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
                {(this.state.title == '') ? 'This field is required.' : ' '}
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
                {(this.state.price == '') ? 'This field is required.' : ' '}
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
          <View style={{height: 110, backgroundColor: 'white'}}>
            <FlatList horizontal={true} extraData={this.state.getUrisFromCameraRollView}
              data={(Array.isArray(this.state.getUrisFromCameraRollView)) ? this.state.getUrisFromCameraRollView : imageUris}
              renderItem={(asset) => {
                return(
                  <Image style={styles.chosenImage} source={asset.item.uri}/>
                );
              }}
            />
          </View>
          <Button title='Select Images' onPress={() => {
            this.setState({getUrisFromCameraRollView: (uriArray) => {
              this.setState({getUrisFromCameraRollView: uriArray});
            }}, () => {
              this.props.navigation.navigate('CameraRoll', {setListingImages: this.state.getUrisFromCameraRollView});
            });
          }}/>
        </Card>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
        <Card title='Contact Information'>
          <View style={styles.warningMessageView}>
            <Text style={styles.warningMessage}>
              {(!(this.hasSavedContactInfo() || this.hasAltContactInfo())) ? 'At least one method of contact is required.' : ' '}
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
        <TouchableOpacity activeOpacity={(this.state.canSubmit) ? 0.5 : 1}
          onPress={() => {
            this.sendUserData();
          }}>
          <Card>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <ActivityIndicator style={{marginRight: 10}} animating={this.state.animating} size='small'/>
              <Text style={{color: (this.state.canSubmit || this.state.animating) ? 'black' : '#DFDFDF', textAlign: 'center'}}>
                {(this.state.animating) ? 'Uploading...' : 'Submit'}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
        <View style={styles.divider}>
          <Text>{''}</Text>
        </View>
      </View>
    );
  }

  sendUserData(){
    if(this.state.canSubmit){
      this.setState({animating: true});
      this.setState({canSubmit: false});

      //Setting JSON node info
      var updateData = {};
      var urisToUpload = [];
      var listingType = this.hasListingType();
      var listingKey = fire.database().ref('listings/' + listingType).push().key;
      var listingData = {
        description: this.state.description,
        email: (this.hasSavedContactInfo()) ? '' : this.state.altEmail,
        key: listingKey,
        location: '',
        phone: (this.hasSavedContactInfo()) ? '' : this.state.altPhone,
        price: this.state.price,
        title: this.state.title,
        uri: ''
      };
      if(!(typeof this.state.getUrisFromCameraRollView === 'function')){
        urisToUpload = this.state.getUrisFromCameraRollView.map((item) => {
            return item.uri.uri;
        });
      }

      var imageDownloadUriArray = [];

      const BLOB = RNFetchBlob.polyfill.Blob;
      const FS = RNFetchBlob.fs;
      window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
      window.Blob = BLOB;

      var imageRef;
      var uploadBlob;

      //function to recursively upload images
      var uploadImage = (index) => {
        if((index == urisToUpload.length) || (urisToUpload[index] === undefined)){

          if(urisToUpload.length == 0){
            listingData.uri = 'https://firebasestorage.googleapis.com/v0/b/novaemporium-5b87b.appspot.com/o/images%2FnoImage.png?alt=media&token=53dd823d-402b-4080-8d56-227ba4fb2353';
          }
          //Uploading listing data to JSON node when all images have been uploaded
          updateData['listings/' + this.hasListingType() + '/' + listingKey] = listingData;
          fire.database().ref().update(updateData).then((acceptValue) => {
            Alert.alert('Listing created successfully', '',
              [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
              { cancelable: false });
          }, (rejectReason) => {
            Alert.alert('Listing creation failed', 'Please try again',
              [{text: 'OK', onPress: () => this.props.navigation.goBack()}],
              { cancelable: false });
          }).catch((error) => {
            console.log('ERROR---------------------------------------------------ERROR');
            conosle.log(error.code);
          });
          this.setState({animating: false});
          return -1;
        }

        imageRef = fire.storage().ref().child('images/' + listingType + '/' + listingKey + '/' + index);
        imageRef.getDownloadURL().then((url) => {
          console.log(url);
        });
        uploadBlob = null;
        FS.readFile(urisToUpload[index], 'base64').then((data) => {
          return BLOB.build(data, {type: '${image/jpg};BASE64'});
        }).then((blob) => {
          uploadBlob = blob;
          imageRef.put(blob, {contentType: 'image/jpg'}).then(() => {
            imageRef.getDownloadURL().then((url) => {
              imageDownloadUriArray.push(url);
            });
            uploadBlob.close();
            uploadImage(index+1);
          });
        }).catch((err) => {
          console.log('ERROR---------------------------------------------------ERROR');
          console.log(err);
        });
      };
      uploadImage(0);
    }
  }

  canSubmit(){
    if((this.hasListingType() && (this.state.title != '' && this.state.price != '')) &&
       (this.hasSavedContactInfo() || this.hasAltContactInfo())) {
      return true;
    }
    return false;
  }

  hasListingType(){
    var i = 0;
    for(var i2 of this.state.listingTypeArray){
      if(i2){
        switch(i){
          case 0: return 'book';
          case 1: return 'tutor';
          case 2: return 'furniture';
          case 3: return 'roommate';
          case 4: return 'carpool';
        }
      }
      i++;
    }
    return undefined;
  }

  hasSavedContactInfo(){
    for(var i of this.state.contactInfoUsingArray){
      if(i){
        return true;
      }
    }
    return false;
  }

  hasAltContactInfo(){
    if(this.state.altEmail != '' || this.state.altPhone != ''){
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
  warningMessageView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  warningMessage: {
    color: 'red'
  },
  chosenImage: {
    height: 100,
    width: 100,
    margin: 5
  }
});
