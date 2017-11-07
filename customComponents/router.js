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
    screen: SignIn,
    navigationOptions: {
      tabBarVisible: false,
      header: null
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  BookTab: {
    screen: BookTab,
    navigationOptions: {
      header: null
    }
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
    screen: TutorTab,
    navigationOptions: {
      header: null
    }
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const FurnitureStackNav = StackNavigator({
  FurnitureTab: {
    screen: FurnitureTab,
    navigationOptions: {
      header: null
    }
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const RoommateStackNav = StackNavigator({
  RoommateTab: {
    screen: RoommateTab,
    navigationOptions: {
      header: null
    }
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const CarpoolStackNav = StackNavigator({
  CarpoolTab: {
    screen: CarpoolTab,
    navigationOptions: {
      header: null
    }
  },
  CreateListing: {
    screen: CreateListing
  }
});

export const TabNav = TabNavigator({
  Initial: {
    screen: InitialStackNavigator
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
