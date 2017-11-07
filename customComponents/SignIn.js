import React, {Component} from "react";
import { Alert, StyleSheet, View, Image } from "react-native";
import { Card, Button, FormLabel, FormInput, Text } from "react-native-elements";
import { StackNavigator, TabNavigator } from "react-navigation";
import { onSignIn } from "./auth";
//import ForgotPassword from "./ForgotPassword";

//import TabNav from "../Main";

import firebase from 'firebase';

/*firebase.initializeApp({
  apiKey: "AIzaSyDBXjNByBcC2K5fBgK-hTrqNhhjOR3fKgw",        // Auth / General Use
  authDomain: "novaemporium-5b87b.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://novaemporium-5b87b.firebaseio.com", // Realtime Database
  storageBucket: "novaemporium-5b87b.appspot.com",          // Storage
  });*/


export default class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      forgotPasswordEmail: '',
      promptVisible: false
    }
    this.onForgetPassword = this.onForgetPassword.bind(this);
    this.onSignUpButtonPressed = this.onSignUpButtonPressed.bind(this);
    this.onSignInPressed = this.onSignInPressed.bind(this);

  }

  onSignInPressed = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      Alert.alert("you have been signed in");
    }).catch(function(e){
        alert(e);
      })
    this.props.navigation.navigate('BookTab');
  };

  onForgetPassword = () => {
    this.props.navigation.navigate('ForgotPassword', this);
    console.log("ForgotPassword Pressed");
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp', this);
    console.log("SignUp Pressed");
  };
  
  render(){
    return(
      <View style={styles.container}>
        <View style={{paddingTop: 10}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 125,
              width: 370,
            }}
            source={require("../images/NovaEmporium.png")}
          />
        </View>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Email address..."
            onChangeText={(email) => this.setState({email})}
          />

          <FormLabel>Password</FormLabel>
          <FormInput secureTextEntry placeholder="Password..."
            onChangeText={(password) => this.setState({password})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#5DBF6C"//#03A9F4
            title="SIGN IN"
            onPress={() => this.onSignInPressed()}

          />
          <Button
            style={{ marginTop: 15 }}
            backgroundColor="transparent"
            title= 'Forgot Password?'
            color="#00AEFF"
            onPress={() => this.onForgetPassword()}
          />
        </Card>
        <Button
          style={{ marginTop: 100 }}
          backgroundColor="transparent"
          title= "Don't have an account? Sign Up"
          color="#F0F0F0"
          onPress={() => this.onSignUpButtonPressed()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4783B0',
    paddingVertical: 5
  }
});
