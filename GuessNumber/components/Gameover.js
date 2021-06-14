import React , { Component } from 'react';
import {View , Text , StyleSheet, Button} from 'react-native';

class Gameover extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.title}>The Game is over !!!</Text>
                <Text style={styles.rounds}>The number of rounds : {this.props.rounds}</Text>
                <Text style={styles.number}>The user number is : {this.props.usernumber}</Text>
                <Button title='New Game' onPress={this.props.onRestart}></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center'
    },
    rounds : {
        fontSize : 16,
        fontWeight : 'bold',
        marginVertical : 15
    },
    number : {
        fontSize : 16,
        fontWeight : 'bold',
        marginBottom : 15
    }
})

export default Gameover;