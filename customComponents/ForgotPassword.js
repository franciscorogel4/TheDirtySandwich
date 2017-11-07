import React, {Component} from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "./auth";
import fire from './Fire';

export default class ForgotPassword extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: ""
    }
  }

  onRequestEmailPressed = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user){
    }).catch(function(e){
      alert(e);
      })
    this.props.navigation.navigate('SignIn', this);
    Alert.alert("An email with instructions to reset your password has been sent");
  };

  render() {
    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Forgot Password?</FormLabel>
          <FormInput
            placeholder="Enter your email address"
            onChangeText={(email) => this.setState({email})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Request Email"
            onPress={() => this.onRequestEmailPressed()}
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
