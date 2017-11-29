import React, {Component} from "react";
import { View, Text } from "react-native";
import { Card, Button, FormInput, FormLabel } from "react-native-elements";
import { TextField } from 'react-native-material-textfield';
import {Octicons } from '@expo/vector-icons';
import ScreenColor from '../../ScreenColor';

import firebase from '../Fire';

const scrColor = ScreenColor.color0;

export default class Profile extends Component {

constructor(props){
  super(props);
  this.state = {
    Name: 'should change',
    Loc: 'Location',
    PhoneNumber: 'Cell Phone Number ',
    Email: 'Preferred Email Adress',
    Initials: "Initials"
  };
}

  componentWillMount(){

    var user = firebase.auth().currentUser;
    var UserFirstName;
    var UserLastName;
    var UserCellPhoneNumber;
    var UserEmail;
    var UserLocation;

    var that = this;
    firebase.database().ref('/empUsers/' + user.uid).on("value", function (snap) {
      console.log("The userID: " + user.uid);
      UserFirstName = snap.child("FirstName").val();
      UserLastName = snap.child("LastName").val();
      UserEmail = snap.child("Email").val();
      UserCellPhoneNumber = snap.child("CellPhoneNumber").val();
      UserLocation = snap.child("Location").val();

      that.setState({Name : (UserFirstName+" "+UserLastName)});
      that.setState({Loc : UserLocation});
      that.setState({PhoneNumber : UserCellPhoneNumber});
      that.setState({Email : UserEmail});

      that.setState({Initials : (UserFirstName.charAt(0) + UserLastName.charAt(0))});
    });
  }

  onPressGear = () => {
    this.props.navigation.navigate('Settings');
    console.log("Settings Gear Pressed");
  };

  // will delete soon. This was for testing. If not deleted, you can remove it
  onPressButton = () =>{
    var user = firebase.auth().currentUser;

    if (user) {
      // User is signed in.
      console.log("User is signed in: " + user.email + user.uid);
    } else {
      // No user is signed in.
      console.log("User is not sighed in ");
    }
  }

  render() {
    return (
      <View style={{ flex: 1, paddingVertical: 5, backgroundColor: "#4783B0"}}>
        <Card title="My Account Info">
        <Octicons
          style={{ color: "grey", marginLeft: 275 }}
          name='gear'
          size={24}
          //onPress={() => this.onPressButton()}
          onPress={() => this.onPressGear()}
          />

          <View
            style={{
              backgroundColor: "#4783B0",
              alignItems: "center",
              justifyContent: "center",
              width: 125,
              height: 125,
              borderRadius: 80,
              alignSelf: "center",
              marginBottom: 0
            }}
          >
          <Text style={{ color: "white", fontSize: 50 }}>{this.state.Initials}</Text>
        </View>
        <View style={{paddingVertical: 0}}>
          <FormLabel>Name</FormLabel>
          <FormInput
            placeholder= { this.state.Name }
            label='Name'
            onChangeText={ (newName) => {this.setState({Name: newName});}}
          />

          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder= { this.state.Email }
            label='Email'
            onChangeText={ (newEmail) => {this.setState({ Email: newEmail });}}
          />

          <FormLabel>Phone number</FormLabel>
          <FormInput
            placeholder= {this.state.PhoneNumber}
            label='Location'
            onChangeText={ (newLoc) => {this.setState({Loc: newLoc});}}
          />

          <FormLabel>Location</FormLabel>
          <FormInput
            placeholder= {this.state.Loc}
            label='Phone Number'
            onChangeText={ (newPhoneNumber) => {this.setState({ PhoneNumber: newPhoneNumber });}}
          />

        </View>
      </Card>
        <View style= {{flex: 2, paddingVertical: 15, flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            style={{width: 125, height: 50}}
            backgroundColor="#5DBF6C"
            title="Favorites"
          />
          <Button
            style={{width: 125, height: 50}}
            backgroundColor="#5DBF6C"
            title="Listings"
          />
        </View>
      </View>
    );
  }
}
