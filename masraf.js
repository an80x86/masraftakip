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
import Button from 'react-native-button';
import DropDown from 'react-native-dropdown';

var Dimensions = require('Dimensions');
var windowSize = Dimensions.get('window');

class Masraf extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        username: '',
        pressStatus: false
    };
  }
  
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }
  
  _onPressButton1(event){
      this.props.navigator.push({
        title: 'Masraf Girisi',
		component: Masraf
      });
  }
  
  _onPressButton2(event){
      this.props.navigator.push({
        title: 'Odeme Girisi',
		component: Odeme
      });
  }
  
  _onPressButton3(event){
      this.props.navigator.push({
        title: 'Rapor',
		component: Rapor
      });
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
                    <Text style={[styles.text, styles.whiteFont]}>Masraf Turu</Text>
                  </View>
                  <View style={{flex: 1,width: 100, height: 10, alignItems:'flex-end', paddingRight:10}}>
                    <Button
                      style={{fontSize: 14, color: 'white'}}
                      styleDisabled={{color: 'red'}}>
                      Ekle
                    </Button>
                  </View>
                </View>
              
                <Text style={styles.ust}>sdfsfs</Text>
              
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
        flex: .04,
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
    button: {
      borderColor: '#000066',
      borderWidth: 1,
      borderRadius: 10,
    },
    buttonPress: {
      borderColor: '#000066',
      backgroundColor: '#000066',
      borderWidth: 1,
      borderRadius: 10,
  },
    btn1: {
      height:20,
      marginTop: -2,
      //marginLeft: 50,
      //marginRight: 50,
      backgroundColor: 'transparent',
      //padding: 20,
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

module.exports = Masraf;