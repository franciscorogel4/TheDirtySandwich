import React, {Component} from "react";
import { Alert, View, ParentView, StyleSheet, Text, TextInput } from "react-native";
import { Card, Button, FormInput, FormLabel } from "react-native-elements";
import { TextField } from 'react-native-material-textfield';
import { MaterialIcons } from '@expo/vector-icons';

import firebase from 'firebase';

export default class DeleteAccountPage extends Component {

constructor(props){
  super(props);
  this.state = {
    Name: 'Name',
    Loc: 'Location',
    PhoneNumber: 'Cell Phone Number ',
    Email: 'Preferred Email Adress',
    Password: "",
  };
}

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

  onPressCancel = () => {
    this.props.navigation.navigate('Profile');
    console.log("Cancel button Pressed. Thank God!!!");
  }

  onDeleteMyAccountButtonPressed = () => {
    var user = firebase.auth().currentUser;
    var userEmail = user.email;

    var cred = firebase.auth.EmailAuthProvider.credential(
    userEmail,
    this.state.Password
    );

    let that = this; // this is contextual (that is the standard)
                     // kinda like a local variable that is passed into every contexxt

    user.reauthenticateWithCredential(cred).then(function() {
      // User re-authenticated.
      console.log("User has been reauthenticateWithCredentials ")
      user.delete().then(() => {
        console.log(".then for user.delete");
        that.props.navigation.navigate('SignIn');
      });
    }).catch(function(error) {
      console.log("User probably typed wrong password or no password");
      Alert.alert("The Passwor you entered for " + userEmail + " is incorrect");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Card title="Delete Account">
          <Text style={{ color: "black", fontSize: 14, textAlign: 'center', verticalAlign: 'middle' }}>Are you sure you want to delete your account? Once you delete your account, all information will be lost. </Text>
            <MaterialIcons
              style={styles.DeleteButton}
              name='delete-forever'
              size={150}
            />
            <Text style={{ color: "black", fontSize: 14, textAlign: 'center', verticalAlign: 'middle' }}>To delete your account, confirm your password in the text field below and press Delete My Account</Text>
          </Card>
        <Card>
          <TextInput
            style={{textAlign: 'center', color: 'red'}}
            secureTextEntry
            placeholder="Your Password"
            onChangeText={(Password) => this.setState({Password: Password})}
          />
        </Card>
        </View>
        <View style={styles.DeleteAndCancel}>
          <Button
            style={{width: 275, height: 50}}
            backgroundColor="red"
            title="Delete My Account"
            onPress={() => this.onDeleteMyAccountButtonPressed()}
          />
          <Button
            style={{width: 275, paddingVertical: 10, height: 50}}
            backgroundColor="#5DBF6C"
            title="Cancel"
            onPress={() => this.onPressCancel()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4783B0'
  },
  DeleteButton: {
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  card: {
    flex: 4
  },
  DeleteAndCancel: {
    flex: 1
  }
});
