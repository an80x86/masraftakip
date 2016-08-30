'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var Forgot = require('./forgot.js');
var Register = require('./register.js');
var Main = require('./main.js');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        password: ''
    };
  }
  
  _onPressButton(event){
    /*Alert.alert(
      'Alert Title',
      this.state.username + '\n' + this.state.password
    );*/
    this.props.navigator.push({
        title: '',
		component: Main
	});
  }
  
  _onPressButton2(event) {
    this.props.navigator.push({
        title: 'Forgot',
		component: Forgot
	});
  }
  
  _onPressButton3(event) {
    this.props.navigator.push({
        title: 'Sign Up',
		component: Register
	});
  }
  
  render() {
    return (
        <View style={styles.container}>
            <Image style={styles.bg} 
              source={require('./img/login1_bg.png')}
            />
            <View style={styles.header}>
                <Image style={styles.mark} 
                  source={require('./img/login1_mark.png')}
                />
            </View>
            <View style={styles.inputs}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputUsername} 
                      source={require('./img/login1_person.png')}
                    />
                    <TextInput 
                        editable = {true}
                        maxLength = {40}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Username"
                        placeholderTextColor="#FFF"
                        onChangeText={(text) => this.setState({username:text})}
                        value={this.state.username}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputPassword} 
                      source={require('./img/login1_lock.png')}
                    />
                    <TextInput
                        editable = {true}
                        password={true}
                        style={[styles.input, styles.whiteFont]}
                        placeholder="Pasword"
                        placeholderTextColor="#FFF"
                        onChangeText={(text2) => this.setState({password:text2})}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.forgotContainer}>
                  <TouchableHighlight onPress={this._onPressButton2.bind(this)}>
                    <Text style={styles.greyFont}>Forgot Password</Text>
                  </TouchableHighlight>
                </View>
            </View>
            <TouchableHighlight onPress={this._onPressButton.bind(this)}>
              <View style={styles.signin}>                 
                    <Text style={styles.whiteFont}>Sign In</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this._onPressButton3.bind(this)}>
              <View style={styles.signup}>
                  <Text 
                      style={styles.greyFont}>Don't have an account?
                          <Text style={styles.whiteFont}>  Sign Up</Text>
                  </Text>
              </View>
            </TouchableHighlight>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: 'transparent'
    },
    bg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: windowSize.width,
        height: windowSize.height
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: .5,
        backgroundColor: 'transparent'
    },
    mark: {
        width: 150,
        height: 150
    },
    signin: {
        backgroundColor: '#FF3366',
        padding: 20,
        alignItems: 'center'
    },
    signup: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: .15
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
      marginLeft: 15,
      width: 20,
      height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
      alignItems: 'flex-end',
      padding: 15,
    },
    greyFont: {
      color: '#D8D8D8'
    },
    whiteFont: {
      color: '#FFF'
    }
});

module.exports = Login;