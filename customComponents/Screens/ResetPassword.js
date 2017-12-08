import React, {Component} from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import firebase from 'firebase';


export default class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      promptVisible: false
    }
  }

  onPressChangePasswordButton = () =>{
    var user = firebase.auth().currentUser;
    var userEmail = user.email;

    var userOldPassword = this.state.oldPassword;
    var newPassword = this.state.newPassword;
    var confirmPassword = this.state.confirmPassword;

    let that = this;

    console.log("New password:           " + this.state.newPassword);
    console.log("New confirmed password: " + this.state.confirmPassword);


    var credential = firebase.auth.EmailAuthProvider.credential(userEmail, userOldPassword);

    user.reauthenticateWithCredential(credential).then(function() {
      // User re-authenticated.
      console.log("User has been reauthenticateWithCredentials ")
      if(newPassword.trim() === confirmPassword.trim()){
        user.updatePassword(newPassword).then(function(){
        that.props.navigation.navigate('Settings');
        Alert.alert("Password successfully changed")
      }).catch(function(e){
        alert(e);
        console.log("Inside the catch function");
      })
      } else {
        Alert.alert("You seem to have entered new passwords that do not match. Please try again")
      }
    }).catch(function(error) {
        Alert.alert("The old Password you entered for " + userEmail + " is incorrect");
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Card title="Change Password">
        <SimpleLineIcons
          style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}
          name='lock'
          size={100}
          />
          <FormLabel>Old Password</FormLabel>
          <FormInput
            secureTextEntry placeholder="Old Password..."
            onChangeText={(oldPassword) => this.setState({oldPassword: oldPassword})}
          />

          <FormLabel>New Password</FormLabel>
          <FormInput secureTextEntry placeholder="New Password..."
            onChangeText={(newPassword) => this.setState({newPassword: newPassword})}
          />

          <FormLabel>Confirm New Password</FormLabel>
          <FormInput secureTextEntry placeholder="Confirm Password..."
            onChangeText={(confirmPassword) => this.setState({confirmPassword: confirmPassword})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#5DBF6C"
            title="CHANGE PASSWORD"
            onPress={() => this.onPressChangePasswordButton()}

          />
        </Card>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4783B0'
  }
});
