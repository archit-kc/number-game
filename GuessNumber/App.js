/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React , { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from './components/Header';
import StartScreen from './components/StartScreen';

class App extends Component{
  render(){
    return(
      <View style={styles.screen}>
        <Header title="Guess a number"/>
        <StartScreen />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen : {
    flex : 1
  }
});

export default App;
