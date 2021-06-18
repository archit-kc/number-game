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
import Gameover from './components/Gameover';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      selected : undefined,
      guessround : 0
    }
  }

  newgamehandler(){
    this.setState({guessround : 0});
    this.setState({selected : null});
  }

  startscreenhandler(number){
    console.log(number);
    this.setState({selected : number}); 
  }
  

  renderScreen(){
    if(this.state.selected && this.state.guessround <= 0){
      const component = <GameScreen userchoice={this.state.selected} onOver={(rounds) => {
        this.setState({guessround : rounds});
      }}></GameScreen>
      return component;
    }
    else if(this.state.guessround > 0){
      const component = <Gameover rounds={this.state.guessround} usernumber={this.state.selected} onRestart={this.newgamehandler.bind(this)}></Gameover>;
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
