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
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1,width: 150, height: 20}}>
                    <Text style={[styles.text, styles.whiteFont]}>Toplam Masraf</Text>
                  </View>
                  <View style={{flex: 1,width: 100, height: 20, alignItems:'flex-end', paddingRight:10}}>
                    <Text style={styles.greyFont}>0.00 TL</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1,width: 150, height: 20}}>
                    <Text style={[styles.text, styles.whiteFont]}>Toplam Odeme</Text>
                  </View>
                  <View style={{flex: 1,width: 100, height: 20, alignItems:'flex-end', paddingRight:10}}>
                    <Text style={styles.greyFont}>0.00 TL</Text>
                  </View>
                </View>              
              
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1,width: 150, height: 20}}>
                    <Text style={[styles.text, styles.whiteFont]}>Kalan Masraf</Text>
                  </View>
                  <View style={{flex: 1,width: 100, height: 20, alignItems:'flex-end', paddingRight:10}}>
                    <Text style={styles.greyFont}>0.00 TL</Text>
                  </View>
                </View>  
              
                <Text style={styles.ust}></Text>
                
                <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                  <View style={styles.signin}>                 
                        <Text style={styles.whiteFont}>Masra Girisi</Text>
                  </View>
                </TouchableHighlight>
                
                <Text></Text>
                
                <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                  <View style={styles.signin}>                 
                        <Text style={styles.whiteFont}>Odeme Girisi</Text>
                  </View>
                </TouchableHighlight>              

                <Text></Text>
              
                <TouchableHighlight onPress={this._onPressButton.bind(this)}>
                  <View style={styles.signin}>                 
                        <Text style={styles.whiteFont}>Rapor</Text>
                  </View>
                </TouchableHighlight>
              
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
    ust: {
      marginTop: 100,
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
      marginLeft: 50,
      marginRight: 50,
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
      color: 'yellow',
    },
    whiteFont: {
      color: '#FFF'
    }
});

module.exports = Main;