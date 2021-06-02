import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class Input extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <TextInput {...this.props} style={{...styles.input, ...this.props.style}}></TextInput>
        )
    }
}

const styles = StyleSheet.create({
    input : {
        height : 40,
        borderBottomWidth : 1,
        borderBottomColor : 'grey',
        marginVertical : 10
    }
})

export default Input;