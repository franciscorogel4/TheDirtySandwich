import React from 'react';
import { View, Text, CameraRoll, Image, StyleSheet, FlatList } from 'react-native';

export default class CameraRollView extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      shownImages: []
    }
  }

  render(){
    return(
      <FlatList data={this.state.shownImages}
        renderItem={(item) => {
          return(
            <View>
              <Image source={{uri: item.uri}}/>
            </View>
          );
        }}
      />
    );
  }

  componentWillMount(){
    const cameraRollFetchParams = {first: 20};
    CameraRoll.getPhotos(cameraRollFetchParams,
      (data) => {this.getImageData(data);},
      (error) => {this.imageError(error);}
    );
  }

  getImageData(data){
    const imageArray = data.edges;
    const images = imageArray.map(asset => asset.node.image);
    this.setState({shownImages: images});
  }

  imageError(error){
    console.log(error);
  }
}
