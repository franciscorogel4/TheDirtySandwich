import React, {Component} from "react";
import { View, Text } from "react-native";
import { Card, Button, FormInput } from "react-native-elements";

export default class Profile extends Component {

constructor(props){
  super(props);
  this.state = {
    Name: 'Name',
    Loc: 'Location',
    PhoneNumber: 'Cell Phone Number ',
    Email: 'Preferred Email Adress',
  };
}

  onForgetPassword = () => {
    this.props.navigation.navigate('ForgotPassword', this);
    console.log("ForgotPassword Pressed");
  };

  render() {
    return (
      <View style={{ flex: 1, paddingVertical: 5, backgroundColor: "#4783B0"}}>
        <Card title="Username">
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
          <Text style={{ color: "white", fontSize: 28 }}>User</Text>
        </View>
        <View style={{paddingVertical: 0}}>
          <FormInput
            label='Name'
            onChangeText={ (newName) => {this.setState({Name: newName });}}
          />
          <FormInput
            label='Location'
            onChangeText={ (newLoc) => {this.setState({Loc: newLoc});}}
          />
          <FormInput
            label='Phone Number'
            onChangeText={ (newPhoneNumber) => {this.setState({ PhoneNumber: newPhoneNumber });}}
          />
          <FormInput
            label='Email'
            onChangeText={ (newEmail) => {this.setState({ Email: newEmail });}}
          />
        </View>
      </Card>
        <View style= {{flex: 2, paddingVertical: 20, flexDirection: 'row', justifyContent: 'center'}}>
          <Button
            style={{width: 125, height: 50}}
            backgroundColor="#5DBF6C"
            title="Favorites"
          />
          <Button
            style={{width: 125, height: 50}}
            backgroundColor="#5DBF6C"
            title="Listings"
            onPress={() => this.onForgetPassword()}
          />
        </View>
      </View>
    );
  }
}
