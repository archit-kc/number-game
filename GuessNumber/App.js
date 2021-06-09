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
import GameScreen from './components/GameScreen';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      selected : undefined
    }
  }

  startscreenhandler(number){
    this.setState({selected : number}); 
  }
  

  renderScreen(){
    if(this.state.selected){
      const component = <GameScreen userchoice={this.state.selected}></GameScreen>
      return component;
    }
    else{
      const component = <StartScreen onStart={this.startscreenhandler.bind(this)}/>
      return component;
    }
  }

  render(){
    return(
      <View style={styles.screen}>
        <Header title="Guess a number"/>
        {this.renderScreen()}
        
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
