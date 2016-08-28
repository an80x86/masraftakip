'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var Login = require('./login.js');

class Start extends Component {
render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '',
          component: Login,
        }}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  } 
});

module.exports = Start;