import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

/*
import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyDBXjNByBcC2K5fBgK-hTrqNhhjOR3fKgw",                             // Auth / General Use
  authDomain: "novaemporium-5b87b.firebaseapp.com",         // Auth with popup/redirect
  databaseURL: "https://novaemporium-5b87b.firebaseio.com", // Realtime Database
  storageBucket: "novaemporium-5b87b.appspot.com",          // Storage
  });*/

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#101349"//#03A9F4
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  </View>
);
