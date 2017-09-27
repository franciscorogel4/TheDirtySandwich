{/*import React from 'react';
import {Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';

export default () => (
  <Router>
      <Scene key="login" component={Login} hideNavBar/>
      <Scene key="forgot" component={Forgot} hideNavBar/>
      <Scene key="register" component={Register} hideNavBar/>
  </Router>
);*/}

import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';

const App = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  Forgot: {screen: Forgot}
});
