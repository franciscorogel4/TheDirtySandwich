import React, { Component } from 'react';
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDBXjNByBcC2K5fBgK-hTrqNhhjOR3fKgw",
  authDomain: "novaemporium-5b87b.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://novaemporium-5b87b.firebaseio.com/", // Realtime Database
  storageBucket: "novaemporium-5b87b.appspot.com",          // Storage
  messagingSenderId: "123456789"                  // Cloud Messaging
});

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
      <StatusBar
      barStyle = "light-content"
      />
      <TextInput
      placeholder = "Villanova email"
      placeholderTextColor = '#cccccc'
      returnKeyType="next"
      keyboardType = "email-address"
      autoCorrect = {false}
      autoCapitalize = "none"
      onSubmitEditing = {()=> this.passwordInput.focus()}
      style = {styles.input}>
      </TextInput>

      <TextInput
      placeholder ="Password"
      placeholderTextColor ='#cccccc'
      secureTextEntry
      returnKeyType="go"
      ref = {(input)=>this.passwordInput = input}
      style = {styles.input}>
      </TextInput>

      <TouchableOpacity style = {styles.buttonContainer}>
      <Text style ={styles.loginbutton}>LOGIN</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding :20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0077DA'
  },
  input:{
    minWidth:300,
    flexWrap:'wrap',
    height : 40,
    backgroundColor: '#7DBAFF',
    paddingHorizontal : 10,
    marginBottom : 10,
    borderRadius: 2
  },
  buttonContainer:{
    backgroundColor: "#81C2F8",
    paddingVertical:10,
    marginTop:15,
    marginBottom:20,
    paddingHorizontal: 50,
    borderRadius: 2
  },
  loginbutton:{
    color: '#ffffff',
    textAlign:'center',
    fontWeight:'700'
  }
});
