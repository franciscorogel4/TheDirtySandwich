import React, {Component} from "react";
import { StatusBar, Platform, Alert, StyleSheet, View, Image, Text, FlatList} from "react-native";
import { Card, Button, FormLabel } from "react-native-elements";
import fire from '../Fire';
import SwipeScreen from './SwipeScreen';
import ScreenColor from '../../ScreenColor';


export default class CreateListingInfo extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList data={[{key: 'a'}]}renderItem={({item}) => {return(<ListingInfo navigation={this.props.navigation}/>);}}/>
      </View>
    );
  }
}

export class ListingInfo extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      forgotPasswordEmail: '',
      promptVisible: false
    }
}

  componentWillMount() {
    console.log(this.props.navigation.state.params.itemKey.description);
  }

  render(){
    console.log('img assigned')
    return(
      <View style={[{flex: 1}, {paddingTop: 10}, {paddingBottom: 15}, styles.container]}>
        <SwipeScreen img={this.props.navigation.state.params.itemKey.uri}/>
        <Card>
          <FormLabel>Description</FormLabel>
          <Text style={styles.InfoDisplayView}>{this.props.navigation.state.params.itemKey.description}</Text>

          <FormLabel>Price</FormLabel>
          <Text style={styles.InfoDisplayView}>{this.props.navigation.state.params.itemKey.price}</Text>

          <FormLabel>Location</FormLabel>
          <Text style={styles.InfoDisplayView}>{this.props.navigation.state.params.itemKey.location}</Text>

          <FormLabel>Email</FormLabel>
          <Text style={styles.InfoDisplayView}>{this.props.navigation.state.params.itemKey.email}</Text>

          <FormLabel>Phone Number</FormLabel>
          <Text style={styles.InfoDisplayView}>{this.props.navigation.state.params.itemKey.phone}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ScreenColor.color0
  },
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: '#EFEDF1'
  },
  InfoDisplayView: {
    marginLeft: 30,
    color: ScreenColor.color3
  }
});
