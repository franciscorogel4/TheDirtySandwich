import React from 'react';
import { Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import TabContents from './customComponents/TabContents';

class BookTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Books'
  };
  render(){
    return(
      <TabContents item='book'/>
    );
  }
}

class TutorTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Tutoring'
  };
  render(){
    return(
      <TabContents item='tutor'/>
    );
  }
}

class FurnitureTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Furniture'
  };
  render(){
    return(
      <TabContents item='furniture'/>
    );
  }
}

class RoommateTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Roommate'
  };
  render(){
    return(
      <TabContents item='roommate'/>
    );
  }
}

class CarpoolTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Carpool'
  };
  render(){
    return(
      <TabContents item='carpool'/>
    );
  }
}
const TabNav = TabNavigator({
  Books:{
    screen: BookTab
  },
  Tutors:{
    screen: TutorTab
  },
  Furniture:{
    screen: FurnitureTab
  },
  Roommate:{
    screen: RoommateTab
  },
  Carpool:{
    screen: CarpoolTab
  }},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    initialRouteName: 'Books'
});

export default TabNav;
