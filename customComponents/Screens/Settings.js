import React, {Component} from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import {Octicons } from '@expo/vector-icons';

import firebase from '../Fire';

export default class Settings extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: ""
    }
  }

  onResetButtonPressed = () => {
    this.props.navigation.navigate('ResetPassword');
    console.log("Reset Password Button Pressed");
    //Alert.alert("An email with instructions to reset your password has been sent");
  };

  onSignInButtonPressed = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('SignIn');
    console.log("SignIn Pressed");
  };

  onDeleteAccountPressed = () => {
    var user = firebase.auth().currentUser;

    this.props.navigation.navigate('DeleteAccountPage');
    console.log("Oh No!!! Delete account pressed");
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
      <View style={styles.container}>
        <Text style={{
          color: "white",
          fontSize: 40,
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 10 }}>
          Settings
         </Text>

         <Button
          style={styles.Button}
          style={{ marginTop: 15 }}
          backgroundColor="white"
          color= "grey"
          title="Reset Password"
          onPress={() => this.onResetButtonPressed()}
         />

         <Button
          style={styles.Button}
          style={{ marginTop: 15 }}
          backgroundColor="white"
          color= "grey"
          title="Delete account"
          onPress={() => this.onDeleteAccountPressed()}
         />

         <Button
          style={styles.Button}
          style={{ marginTop: 15 }}
          backgroundColor="white"
          color= "grey"
          title="Logout"
          onPress={() => this.onSignInButtonPressed()}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4783B0'
  },
  Button: {
    backgroundColor: 'white',
    height:50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
},
});
