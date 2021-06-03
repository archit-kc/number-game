import React, { Component } from 'react';
import { View , Text ,StyleSheet} from "react-native";

class NumberCard extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style={styles.number}>{this.props.children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
 container : {
     marginVertical : 15,
     borderWidth : 2,
     borderColor : '#f1679aa3',
     borderRadius : 10,
     padding : 15,
     alignItems : 'center'
 },
 number : {
     fontSize : 22,
     textAlign : 'center',
     color : '#e01631b8'
 }
})

export default NumberCard;