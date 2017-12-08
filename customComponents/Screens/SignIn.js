import React, {Component} from "react";
import { StatusBar, Platform, Alert, StyleSheet, View, Image } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import fire from '../Fire';
import ScreenColor from '../../ScreenColor';

const scrColor = ScreenColor.color0;
const buttonColor = ScreenColor.color2;

export default class SignIn extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      forgotPasswordEmail: '',
      promptVisible: false
    }
  }

  // javascript context (look up the word this in javascript)
  onSignInPressed = () => {
    let that = this;

    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      that.props.navigation.navigate('BookTab');
    }).catch(function(e){
        alert(e);
      })
  };

  onForgetPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
    console.log("ForgotPassword Pressed");
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp');
    console.log("SignUp Pressed");
  };

  onContinueAsGuestButtonPressed = () => {
    var user = fire.auth().currentUser;
    if (user){
      fire.auth().signOut();
    }
    this.props.navigation.navigate('BookTab');
    //Alert.alert("Logged in as a Guest. In order to create a listing, you must make an account.");
    console.log("Continue as Guest button pressed");
  }

  // for testing
  onPressButton = () =>{
    var user = fire.auth().currentUser;

    if (user) {
      // User is signed in.
      console.log("User is signed in: " + user.email);
    } else {
      // No user is signed in.
      console.log("User is not sighed in ");
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <View style={styles.statusBarPadding}/>

        <View style={styles.appName}>
          <Image
            style={{
              alignSelf: 'center',
              height: 200,
              width: 160,
            }}
            source={require("../../images/NovaEmporiumLogoCopy.png")}
          />
        </View>

        <View style={styles.card}>
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
              backgroundColor={buttonColor}
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
        </View>

        <View style={styles.bottomButton}>
          <Button
            backgroundColor="transparent"
            title= 'Continue as Guest'
            color="#F0F0F0"
            onPress={() => this.onContinueAsGuestButtonPressed()}
            />
          <Button
            backgroundColor="transparent"
            title= "Don't have an account? Sign Up"
            color="#F0F0F0"
            onPress={() => this.onSignUpButtonPressed()}
            />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: scrColor
  },
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: '#EFEDF1'
  },
  appName: {
    flex: 3,
    marginTop: 35
  },
  card: {
    flex: 4,
    justifyContent: 'center',
    marginBottom: 15
  },
  bottomButton: {
    flex: 1,
    marginBottom: 15
  }
});
