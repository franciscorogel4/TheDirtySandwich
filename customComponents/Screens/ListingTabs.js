import React from 'react';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import TabContents from './TabContents';
import ScreenColor from '../../ScreenColor';

const tabColor = ScreenColor.color3;

export class BookTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Books',
    tabBarIcon: () => (
      <Entypo name='book' size={24} color={tabColor}/>
    )
  };
  render(){
    return(
      <TabContents navigation={this.props.navigation} item='book'/>
    );
  }
}

export class TutorTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Tutoring',
    tabBarIcon: () => (
      <Entypo name='graduation-cap' size={24} color={tabColor}/>
    )
  };
  render(){
    return(
      <TabContents navigation={this.props.navigation} item='tutor'/>
    );
  }
}

export class FurnitureTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Furniture',
    tabBarIcon: () => (
      <MaterialCommunityIcons name='lamp' size={24} color={tabColor}/>
    )
  };
  render(){
    return(
      <TabContents navigation={this.props.navigation} item='furniture'/>
    );
  }
}

export class RoommateTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Roommate',
    tabBarIcon: () => (
      <Ionicons name='md-person' size={24} color={tabColor}/>
    )
  };
  render(){
    return(
      <TabContents navigation={this.props.navigation} item='roommate'/>
    );
  }
}

export class CarpoolTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Carpool',
    tabBarIcon: () => (
      <FontAwesome name='car' size={24} color={tabColor}/>
    )
  };
  render(){
    return(
      <TabContents navigation={this.props.navigation} item='carpool'/>
    );
  }
}
