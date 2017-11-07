import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { BookTab, FurnitureTab, TutorTab, CarpoolTab, RoommateTab } from './ListingTabs';
import CreateListing from './CreateListing';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';

class Screen1 extends React.Component{
  render(){
    return(
      <View>
        <Text>Screen 1</Text>
        <TouchableOpacity onPress={() => {
          console.log('to screen 2');
          this.props.navigation.navigate('Screen2');
        }}>
          <View style={{backgroundColor: 'red'}}>
            <Text>{'Go to screen 2'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          console.log('to book tab');
          this.props.navigation.navigate('BookTab');
        }}>
          <View style={{backgroundColor: 'blue'}}>
            <Text>Go to listings</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

class Screen2 extends React.Component{
  render(){
    return(
      <View>
        <Text>Screen 2</Text>
        <TouchableOpacity onPress={() => {
          console.log('go back');
          console.log(this.props.navigation.navigate());
          this.props.navigation.goBack();
        }}>
          <View style={{backgroundColor: 'red'}}>
            <Text>{'Go back to screen 1'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export const InitialStackNavigator = StackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  },
  ForgotPassword: {
    screen: ForgotPassword
  },
  BookTab: {
    screen: BookTab,
  },
  CreateListing: {
    screen: CreateListing
  },
  Profile: {
    screen: Profile
  }},
  {
    initialRouteName: 'SignIn'
  });

export const TutorStackNav = StackNavigator({
  TutorTab: {
    screen: TutorTab
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const FurnitureStackNav = StackNavigator({
  FurnitureTab: {
    screen: FurnitureTab
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const RoommateStackNav = StackNavigator({
  RoommateTab: {
    screen: RoommateTab
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const CarpoolStackNav = StackNavigator({
  CarpoolTab: {
    screen: CarpoolTab
  },
  CreateListing: {
    screen: CreateListing
  }
});

class InitialStackNavView extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => ({

  });
  render(){
    return(
      <InitialStackNavigator/>
    );
  }
}

export const TabNav = TabNavigator({
  Initial: {
    screen: InitialStackNavView
  },
  TutorStackNav: {
    screen: TutorStackNav
  },
  FurnitureStackNav: {
    screen: FurnitureStackNav
  },
  RoommateStackNav: {
    screen: RoommateStackNav
  },
  CarpoolStackNav: {
    screen: CarpoolStackNav
  }},
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
    }
  });
