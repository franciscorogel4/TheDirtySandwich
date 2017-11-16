import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { BookTab, FurnitureTab, TutorTab, CarpoolTab, RoommateTab } from './Screens/ListingTabs';
import CreateListing from './Screens/CreateListing';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';
import ForgotPassword from './Screens/ForgotPassword';
import CameraRollView from './Screens/CameraRollView';

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
    screen: CreateListing,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  CameraRoll: {
    screen: CameraRollView,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: false
    }
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
    screen: CreateListing,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: false
    }
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
    screen: CreateListing,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: false
    }
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
    screen: CreateListing,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: false
    }
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
    screen: CreateListing,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: false
    }
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

export default class MasterTabNav extends React.Component{
  render(){
    return(
        <TabNav/>
    );
  }
}

const styles = StyleSheet.create({
  statusBarPadding: {
    height: (Platform.OS === 'ios') ? 20: 24,
    backgroundColor: 'steelblue'
  }
});
