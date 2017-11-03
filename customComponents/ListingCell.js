import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class ListingCell extends React.Component{

  constructor(props){
    super(props);
  }

  render() {
    return(
      <View style={styles.listingCell}>
        <View style={{backgroundColor: 'lightblue'}}>
          <Text style={styles.listingCellTitle}>{this.props.title}</Text>
        </View>
        <Image style={styles.listingCellImage} source={this.props.source}/>
        <View style={{backgroundColor: 'lightblue'}}>
          <Text style={styles.listingCellTitle}>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listingCell: {
    backgroundColor: 'lightblue',
    borderColor: 'steelblue',
    borderWidth: 0.5,
    height: 285,
    margin: 15
  },
  listingCellTitle: {
    fontSize: 40,
    //fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  listingCellImage: {
    flex: 1,
    width: 506,
    alignSelf: 'center',
  },
  listingCellDescription: {

  }
});
