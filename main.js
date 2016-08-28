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
  Alert,
} from 'react-native';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

var alertMessage = 'Credibly reintermediate next-generation potentialities after goal-oriented ' +
                   'catalysts for change. Dynamically revolutionize.';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: ''
    };
  }
  
  _onPressButton(event){
    Alert.alert(
      'Alert Title',
      this.state.username
    );
  }
  
  render() {
    return (
       <View style={styles.container}>
            <Image style={styles.bg} 
              source={require('./img/login1_bg.png')}
            />
            <View style={styles.header}>
            </View>
            <View style={styles.inputs}>
              
                <Text style={[styles.text, styles.whiteFont]}>Toplam Masraf <Text style={styles.greyFont}>0.00 TL</Text></Text>
                <Text style={[styles.text, styles.whiteFont]}>Toplam Odeme <Text style={styles.greyFont}>0.00 TL</Text></Text>
                <Text style={[styles.text, styles.whiteFont]}>Kalan Masraf <Text style={styles.greyFont}>0.00 TL</Text></Text>
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
            </View>
        </View>
    );
  }
}

var styles = StyleSheet.create({
    flex1: {
      flex:1,
      flexDirection:'column' 
    },
    text: {
      left:20,
      right: 0,
      height: 20,
      fontSize: 14,
    },
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
        flex: .05,
        backgroundColor: 'transparent'
    },
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
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
      color: 'red',
    },
    whiteFont: {
      color: '#FFF'
    }
});

module.exports = Main;