import React from 'react';
import { View, Text, CameraRoll, Image, StyleSheet, FlatList, Platform,
  TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';

export default class CameraRollView extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      shownImages: [],
      isImageSelected: [],
      numSelected: 0
    }
  }

  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'steelblue'}}>
          <Text style={styles.numSelectedStyle}>{this.state.numSelected + '/5 Selected'}</Text>
        </View>
        <FlatList data={this.state.shownImages} contentContainerStyle={styles.imageGrid} extraData={this.state}
          renderItem={(image) =>{
            return(
              <TouchableOpacity onPress={() => {this.selectImage(image.item.uri);}}>
                <Image style={styles.image} source={{uri: image.item.uri}}>
                  <View>
                  {
                    (this.state.isImageSelected[image.item.uri]) ?
                             <FontAwesome style={styles.imageIconSelcted} name='check-circle-o' size={32} color='royalblue'/> :
                             <FontAwesome style={styles.imageIconUnselcted} name='circle-o' size={32} color='gray'/>
                  }
                  </View>
                </Image>
              </TouchableOpacity>
            );
          }}
        />
        <View>
          <Text>{''}</Text>
        </View>
        <View style={{backgroundColor: 'steelblue'}}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.state.params.setListingImages(this.getSelectedImages());
            this.props.navigation.goBack();
          }}>
            <Card style={styles.submitButtonContainer}>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white'}}>Select</Text>
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  componentWillMount(){
    //this.requestCameraPermission();
    const cameraRollFetchParams = {first: 20};
    CameraRoll.getPhotos(cameraRollFetchParams).then((data) => {
      this.getImageData(data);
    }).catch((error) => {
      console.log(error);
    });
  }

  selectImage(imageUri){
    var newSelection = this.state.isImageSelected;

    if(newSelection[imageUri]){
      newSelection[imageUri] = false;
      this.setState({numSelected: this.state.numSelected-1});
    }else if(this.state.numSelected < 5){
      newSelection[imageUri] = true;
      this.setState({numSelected: this.state.numSelected+1});
    }
  }

  getSelectedImages(){
    var selectedUris = [];
    var charKey = 0;
    this.state.shownImages.forEach((item) => {
      if(this.state.isImageSelected[item.uri]){
        selectedUris.push({key: String.fromCharCode('a'.charCodeAt() + charKey), uri: {uri: item.uri}});
        charKey++;
      }
    });
    while(selectedUris.length < 5){
      selectedUris.push({key: String.fromCharCode('a'.charCodeAt() + charKey), uri: require('../../images/noImage.png')});
      charKey++;
    }
    return selectedUris;
  }

  getImageData(data){
    var isSelected = [];
    const images = data.edges.map((asset) => {
      asset.node.image['key'] = asset.node.image.uri;
      isSelected[asset.node.image.uri] = false;
      return asset.node.image
    });
    this.setState({shownImages: images, isImageSelected: isSelected});
  }

  async requestCameraPermission(){
    try{
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.REAC_EXTERNAL_STORAGE,
        {
          title: 'Requesting Read access',
          message: 'We want your photos'
        }
      );
      if(granted === PermissionsAndroid.RESULTS.GRANTED){
        console.log('granted');
      } else{
        console.log('denied');
      }
    }catch(error){
      console.warn(error);
    }
  }
}

const styles = StyleSheet.create({
  imageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 3
  },
  image: {
    width: 88,
    height: 89,
    margin: 2
  },
  imageIconUnselcted: {
    textAlign: 'left',
    backgroundColor: 'transparent',
    margin: 3,
    opacity: 0.8
  },
  imageIconSelcted: {
    textAlign: 'left',
    backgroundColor: 'transparent',
    margin: 3,
    opacity: 1
  },
  submitButtonContainer: {
    backgroundColor: '#5DBF6C',
    margin: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numSelectedStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    margin: 5
  }
});
