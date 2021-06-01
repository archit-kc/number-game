import React , { Component } from 'react';

import { View , Text , StyleSheet} from 'react-native';

class Header extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.headertitle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        width : '100%',
        height : 80,
        alignItems : 'center',
        justifyContent : 'center',
        backgroundColor : '#f1679a'
    },
    headertitle : {
        fontSize : 24,
        color : 'black'
    }
})

export default Header;