import React, {Component} from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import fire from '../Fire';

//export default ({ navigation }) => (

export default class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: ""
    }
  }

  onSignUpPressed = () => {
    if(this.state.password.trim() === this.state.confirmPassword.trim()){
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      }).catch(function(e){
        alert(e);
      })
      this.props.navigation.navigate('BookTab');

    } else {
      console.log("pass and confirm pass are NOT the same ");
      Alert.alert("Passwords do not match. Please try again")
    }
  };

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Image
            style={{
              alignSelf: 'center',
              height: 50,
              width: 370,
            }}
            source={require("../../images/NovaEmporium.png")}
          />
        </View>
        <Card>

          <FormLabel>Name</FormLabel>
          <FormInput
            secureTextEntry placeholder="Name..."
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            />

          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Email address..."
            onChangeText={(email) => this.setState({email})}
            />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry placeholder="Password..."
            onChangeText={(password) => this.setState({password})}
            />

          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            secureTextEntry placeholder="Confirm Password..."
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
            />

          <FormLabel>Location</FormLabel>
          <FormInput
            secureTextEntry placeholder="Location...(Wayne, Devon, etc...)"
            onChangeText={(password) => this.setState({password})}
            />

          <FormLabel>Cell Phone Number</FormLabel>
          <FormInput
            secureTextEntry placeholder="Cell Phone Number..."
            onChangeText={(confirmPassword) => this.setState({confirmPassword})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="SIGN UP"
              onPress={() => this.onSignUpPressed()}
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
