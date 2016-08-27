/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'

var Start = require('./start.js');

class Project extends Component {
  render() {
    return (
      <Start />
    );
  }
}

AppRegistry.registerComponent('Project', () => Project);
