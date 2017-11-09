import React, {Component} from "react";
import { StatusBar, Platform, Alert, StyleSheet, View, Image } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import fire from '../Fire';

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

  onSignInPressed = () => {
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      Alert.alert("you have been signed in");
    }).catch(function(e){
        alert(e);
      })
    this.props.navigation.navigate('BookTab');
  };

  onForgetPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
    console.log("ForgotPassword Pressed");
  };

  onSignUpButtonPressed = () => {
    this.props.navigation.navigate('SignUp');
    console.log("SignUp Pressed");
  };

  render(){
    return(
      <View style={styles.container}>
        <StatusBar hidden={false}/>
        <View style={styles.statusBarPadding}/>
        <View style={{paddingTop: 10}}>
          <Image
            style={{
              alignSelf: 'center',
              height: 125,
              width: 370,
            }}
            source={require("../../images/NovaEmporium.png")}
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
    backgroundColor: '#4783B0'
  },
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: '#EFEDF1'
  }
});
