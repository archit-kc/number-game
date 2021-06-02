import React , { Component } from 'react';

import { View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';

import Input from "./Input";
class StartScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            enteredvalue : '',
            selectedvalue : undefined,
            confirmstatus : true
        }
    }

    inputtextHandler(enteredtext){
        const changevalue = enteredtext.replace(/[^0-9]/g,'');
        this.setState({enteredvalue : changevalue});
        this.setState({confirmstatus:false});
    }

    resetHandler(){
        this.setState({enteredvalue : ''});
        this.setState({confirmstatus:true});
    }

    confirmHandler(){
        const chosenvalue = parseInt(this.state.enteredvalue);
        console.log(chosenvalue);
        if (chosenvalue >= 99 || chosenvalue <= 9 || chosenvalue === NaN){
            return;
        }
        this.setState({selectedvalue : chosenvalue});
        this.setState({enteredvalue : ''});
        this.setState({confirmstatus:true});
        console.log(chosenvalue);
    }

    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.screentitle}>Start new game</Text>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputtitle}>Select a number</Text>
                    <Input style={styles.input}
                    autoCapitalize='none'
                    blurOnSubmit
                    keyboardType='number-pad'
                    maxLength={2}
                    value = {this.state.enteredvalue}
                    onChangeText={this.inputtextHandler.bind(this)}/>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.resetbutton} onPress={this.resetHandler.bind(this)}>
                            <Text style={styles.buttontext}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmbutton} disabled={this.state.confirmstatus} onPress={this.confirmHandler.bind(this)}>
                            <Text style={styles.buttontext}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 15,
        alignItems:'center'
    },
    screentitle : {
        fontSize : 20,
        fontWeight : '300',
        marginVertical : 10
    },
    inputcontainer : {
        width : '80%',
        marginVertical : 20,
        elevation : 7,
        backgroundColor : 'white',
        borderRadius : 10,
        alignItems : 'center',
        padding : 15
    },
    inputtitle : {
        fontSize : 18,
        fontWeight : '200'
    },
    buttoncontainer : {
        flexDirection : 'row',
        width:'100%',
        justifyContent:'space-between',
        marginVertical : 13,
        paddingHorizontal : 20
    },
    resetbutton : {
        borderRadius : 50,
        paddingHorizontal : 25,
        paddingVertical : 5,
        backgroundColor : '#e01631b8'
    },
    confirmbutton : {
        borderRadius : 50,
        paddingHorizontal : 20,
        paddingVertical : 5,
        backgroundColor : '#f1679aa3'
    },
    buttontext : {
        fontSize : 16
    },
    input:{
        width : 50,
        textAlign : 'center'
    }
})

export default StartScreen;