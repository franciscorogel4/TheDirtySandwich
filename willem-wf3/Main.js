import React from 'react';
import { Text } from 'react-native';
import { TabNavigator, TabBarBottom, NavigationActions } from 'react-navigation';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import TabContents from '../customComponents/TabContents';

class BookTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Books',
    tabBarIcon: () => (
      <Entypo name='book' size={24}/>
    )
  };
  render(){
    return(
      <TabContents item='book'/>
    );
  }
}

class TutorTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Tutoring',
    tabBarIcon: () => (
      <Entypo name='graduation-cap' size={24}/>
    )
  };
  render(){
    return(
      <TabContents item='tutor'/>
    );
  }
}

class FurnitureTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Furniture',
    tabBarIcon: () => (
      <MaterialCommunityIcons name='lamp' size={24}/>
    )
  };
  render(){
    return(
      <TabContents item='furniture'/>
    );
  }
}

class RoommateTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Roommate',
    tabBarIcon: () => (
      <Ionicons name='md-person' size={24}/>
    )
  };
  render(){
    return(
      <TabContents item='roommate'/>
    );
  }
}

class CarpoolTab extends React.Component{
  static navigationOptions = {
    tabBarLabel: 'Carpool',
    tabBarIcon: () => (
      <FontAwesome name='car' size={24}/>
    )
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
    initialRouteName: 'Books',
    tabBarOptions: {
      activeTintColor: '#e91e63',
    }
});

export default TabNav;
