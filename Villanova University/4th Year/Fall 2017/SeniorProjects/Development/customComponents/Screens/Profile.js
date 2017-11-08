import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default ({ navigation }) => (
  <View style={{ flex: 1, paddingVertical: 20, backgroundColor: "#101349"}}>
    <Card title="Sam Cacela">
      <View
        style={{
          backgroundColor: "#101349", // #bcbec1
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>SC</Text>
      </View>
      <Button
        backgroundColor="#101349" // #03A9F4
        title="SIGN OUT"
        onPress={() => onSignOut().then(() => navigation.navigate("SignedOut"))}
      />
    </Card>
  </View>
);
