import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from "react-navigation";
import { BookTab, FurnitureTab, TutorTab, CarpoolTab, RoommateTab } from './Screens/ListingTabs';
import CreateListing from './Screens/CreateListing';
import CameraRollView from './Screens/CameraRollView';
import MyListings from './Screens/MyListings';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Profile from './Screens/Profile';
import ResetPassword from './Screens/ResetPassword';
import ForgotPassword from './Screens/ForgotPassword';
import Favorites from './Screens/Favorites';
import Settings from './Screens/Settings';
import DeleteAccountPage from './Screens/DeleteAccountPage';

import ListingInfo from './Screens/ListingInfo';
import SwipeScreen from './Screens/SwipeScreen';

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
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  ListingInfo: {
    screen: ListingInfo,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  SwipeScreen: {
    screen: SwipeScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  ResetPassword: {
    screen: ResetPassword,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  MyListings: {
    screen: MyListings,
    navigationOptions: {
    tabBarVisible: false
    }
  },
  DeleteAccountPage: {
    screen: DeleteAccountPage,
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
