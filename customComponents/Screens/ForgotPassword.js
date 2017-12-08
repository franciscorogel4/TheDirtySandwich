import React, {Component} from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
//import firebase from '../Fire';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';


export default class ForgotPassword extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: ""
    }
  }

  onRequestEmailPressed = () => {
    let that = this;

    firebase.auth().sendPasswordResetEmail(this.state.email).then(function(user){
      Alert.alert("An email with instructions to reset your password has been sent");
      that.props.navigation.navigate('SignIn');
    }).catch(function(e){
      alert(e);
      })
  };

  render() {
    return (
      <View style={styles.container}>
        <Card title="Forgot Password">
        <MaterialCommunityIcons
          style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}
          name='email-secure'
          size={100}
          />
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="Enter your email address"
            onChangeText={(email) => this.setState({email: email})}
          />

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#5DBF6C"
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
