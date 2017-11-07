import React from 'react';
import { Text } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Entypo, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { BookTab, FurnitureTab, TutorTab, CarpoolTab, RoommateTab } from '../customComponents/ListingTabs';
import InitialStackNavigator from '../customComponents/InitialStackNavigator';

export default class ListingsNav extends React.Component{
  render(){
    return(
      <TabNav/>
    );
  }
}

const TabNav = TabNavigator({
  Books:{
    screen: InitialStackNavigator
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
