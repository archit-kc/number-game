import React, { Component } from 'react';
import {View , StyleSheet} from 'react-native';

class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={{...this.props.style,...styles.container}}>{this.props.children}</View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        elevation : 7,
        backgroundColor : 'white',
        borderRadius : 10,
        alignItems : 'center',
        padding : 15
    }
})

export default Card;