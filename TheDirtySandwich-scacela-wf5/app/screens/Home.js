import React from "react";
import { ScrollView, Text, Linking, View } from "react-native";
import { Card, Button } from "react-native-elements";

/*
import SwipeableParallaxCarousel from 'react-native-swipeable-parallax-carousel';

const datacarousel = [
  {
      "id": 339964,
      "title": "Valerian and the City of a Thousand Planets",
      "imagePath": "https://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
  },
  {
      "id": 315635,
      "imagePath": "https://image.tmdb.org/t/p/w780/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg",
  }];

  <SwipeableParallaxCarousel
    data={datacarousel}
  />
*/









const images = [
  {
    key: 1,
    name: "scacela",
    image: require("../images/1.jpg")
  },

  {
    key: 2,
    name: "scacela",
    image: require("../images/2.jpg")
  }
];


const item_info = [
{
  key: 3,
  title: "Discrete Mathematics with Ducks",
  name: "scacela",
  desc: "This book teaches you Discrete Math using ducks. "
    + "Great book; 5/5. Mint condition.",
  price: "$39.95",
  email: "scacela@example.com",
  phone: "(555) 555-5555",
  loc: "Villanova, PA"
}
];


export default () => (
  <View style={{ flex: 1, backgroundColor: "#101349"}}>


    <ScrollView contentContainerStyle={{ paddingVertical: 20 }} >

      {images.map(({ name, image, key }) => (
        <Card title={`Photo ${key}`} image={image} key={key}></Card>
      ))}

      {item_info.map(({ key, title, name, desc, price, email, phone, loc}) => (
        <Card>

          <Text style={{ marginBottom: 10 }}>
            {title} by {name + "\n\n"}
            Description: {"\n\n" + desc + "\n\n"}
            Price: {price + "\n"}
            Email: {email + "\n"}
            Phone: {phone + "\n"}
            Location: {loc}
            </Text>

        </Card>

      ))}

    </ScrollView>
  </View>

);
