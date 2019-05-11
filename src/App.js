/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { SwitchNavigator } from 'react-navigation'
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
//import config from './src/common/constants.js';


const App = SwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Home
  },
  {
    initialRouteName: 'Loading'
  }
)


export default App