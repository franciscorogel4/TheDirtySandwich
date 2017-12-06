import React, {Component} from "react";
import { Alert, Image, StyleSheet, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import fire from '../Fire';
import 'firebase/database';
import DB_CONFIG from '../config'
import { FontAwesome } from '@expo/vector-icons';
import ScreenColor from '../../ScreenColor';

const scrColor = ScreenColor.color0;
const buttonColor = ScreenColor.color2;

export default class SignUp extends Component{

  constructor(props){
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      location: "",
      cellPhoneNumber: "",
      favorites: ""
    }
  }

  onSignUpPressed = () => {
    var fname = this.state.firstName;
    var lname = this.state.lastName;
    var email = this.state.email;
    var location = this.state.location;
    var cellPhoneNumber = this.state.cellPhoneNumber;
    var favorites = this.state.favorites;

    let that = this;

    if(this.state.password.trim() === this.state.confirmPassword.trim()){
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(){
      that.props.navigation.navigate('BookTab');

      var user = fire.auth().currentUser;

      fire.database().ref('empUsers/' + user.uid).set({
        FirstName: fname,
        LastName: lname,
        Email: email,
        Location: location,
        CellPhoneNumber: cellPhoneNumber,
        Favorites: favorites
      });

      }).catch(function(e){
        alert(e);
      })
    } else {
      console.log("pass and confirm pass are NOT the same ");
      Alert.alert("Passwords do not match. Please try again")
    }
  };

  render(){
    /*<View>
      <Image
        style={{
          alignSelf: 'user',
          height: 50,
          width: 370,
        }}
        source={require("../../images/NovaEmporium.png")}
      />
    </View>*/
    return(
      <View style={styles.container}>
        <Card>

          <FormLabel>First Name</FormLabel>
          <FormInput
            placeholder="First Name..."
            onChangeText={(firstName) => this.setState({firstName})}
            />

          <FormLabel>Last Name</FormLabel>
          <FormInput
            placeholder="Last Name..."
            onChangeText={(lastName) => this.setState({lastName})}
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
           placeholder="Location...(Wayne, Devon, etc...)"
            onChangeText={(location) => this.setState({location})}
            />

          <FormLabel>Cell Phone Number</FormLabel>
          <FormInput
            placeholder="Cell Phone Number..."
            onChangeText={(cellPhoneNumber) => this.setState({cellPhoneNumber})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
              backgroundColor={buttonColor}
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
    backgroundColor: scrColor
  }
});
