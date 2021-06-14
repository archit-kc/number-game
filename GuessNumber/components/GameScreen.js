import React, { Component , createRef} from 'react';
import {View , StyleSheet ,Text , Button, Alert, FlatList} from 'react-native';

import Card from './Card';
import NumberCard from './NumberCard';

class GameScreen extends Component{

    constructor(props){
        super(props);
        this.low = createRef();
        this.high = createRef();
        this.low.current = 9;
        this.high.current = 99;
        this.state = {
            currentguess : this.generateRandom(9,99,this.props.userchoice),
            gamerounds : 0,
            pastguesses : []
        }
    }

    generateRandom(min,max,selected){
        const num = Math.floor((Math.random() * (max-min)) + min);
        if(num === selected || num === null || num === undefined){
          return this.generateRandom(min,max,selected);
        }
        else{
          return num;
        }
      }

    gameHandler(guess){
        if ((guess === 'lower' && this.state.currentguess < this.props.userchoice) || (guess === 'greater' && this.state.currentguess > this.props.userchoice)){
            console.log("yes");
            Alert.alert('Donot lie','You know this answer is incorrect',[{text : 'Sorry', style : 'cancel'}])
            return;
        }
        else if(this.state.currentguess === this.props.userchoice){
            this.props.onOver(this.state.gamerounds);
        }
        else{
            if(guess === 'lower' && this.state.currentguess > this.props.userchoice){
                this.high.current = this.state.currentguess;
            }
            else{
                this.low.current = this.state.currentguess;
            }
            console.log(this.low.current);
            console.log(this.high.current);
            const number = this.generateRandom(this.low.current,this.high.current,this.state.currentguess);
            this.setState({currentguess : number});
            this.setState({gamerounds : this.state.gamerounds + 1});
            this.setState({pastguesses : [number,...this.state.pastguesses]})
        }
    }
    
    render(){
        return(
            <View style={styles.screen}>
                <Text>You have to guess whether your number is greater or lower.</Text>
                <Text style={styles.title}>Opponent's Number :</Text>
                <NumberCard>{this.state.currentguess}</NumberCard>
                <Card style={styles.butcard}>
                    <Button title="Lower" onPress={this.gameHandler.bind(this,'lower')}></Button>
                    <Button title="Greater" onPress={this.gameHandler.bind(this,'greater')}></Button>
                </Card>
                <View style={styles.list}>
                <FlatList keyExtractor={(item)=> item} 
                data={this.state.pastguesses}
                renderItem={(itemdata) => <View style={styles.listview}>
                            <Text>#{this.state.pastguesses.length - itemdata.index}</Text>
                            <Text>{itemdata.item}</Text>
                        </View>} />
                </View>
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
    },
    list : {
        width : '80%',
        flex : 1
    },
    listview : {
        flexDirection : 'row',
        borderColor : 'grey',
        borderWidth : 1,
        backgroundColor : 'white',
        justifyContent : 'space-between',
        padding : 10,
        marginVertical: 15
    }
})

export default GameScreen;