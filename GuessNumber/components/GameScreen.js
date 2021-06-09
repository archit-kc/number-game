import React, { Component } from 'react';
import {View , StyleSheet ,Text , Button} from 'react-native';

import Card from './Card';
import NumberCard from './NumberCard';

class GameScreen extends Component{

    constructor(props){
        super(props);
    }

    generateRandom(min,max,selected){
        let num = Math.floor(Math.random() * (max-min)) + min;
        if(num == selected){
          this.generateRandom(min,max,selected);
        }
        else{
          console.log(num);
          return num;
        }
      }

    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.title}>Opponent's Number :</Text>
                <NumberCard style={styles.number}>{this.generateRandom(10,99,this.props.userchoice)}</NumberCard>
                <Card style={styles.butcard}>
                    <Button title="Lower"></Button>
                    <Button title="Greater"></Button>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : 'center'
    },
    title : {
        textAlign : 'center',
        fontSize : 18,
        fontWeight : 'bold',
        marginVertical : 15
    },
    butcard : {
        flexDirection : 'row',
        justifyContent : 'space-around',
        width : 300,
        maxWidth : '80%',
        marginVertical : 15
    }
})

export default GameScreen;