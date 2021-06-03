import React , { Component } from 'react';

import { View , Text , StyleSheet , TouchableWithoutFeedback , Alert , TouchableOpacity ,Keyboard , Button} from 'react-native';

import Input from "./Input";
import Card from "./Card";
import NumberCard from "./NumberCard";
class StartScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            enteredvalue : '',
            selectedvalue : undefined,
            confirmstatus : false
        }
    }

    inputtextHandler(enteredtext){
        const changevalue = enteredtext.replace(/[^0-9]/g,'');
        this.setState({enteredvalue : changevalue});
    }

    resetHandler(){
        this.setState({enteredvalue : ''});
        this.setState({confirmstatus:false});
    }

    confirmHandler(){
        const chosenvalue = parseInt(this.state.enteredvalue);
        console.log(chosenvalue);
        if (chosenvalue >= 99 || chosenvalue <= 9 || isNaN(chosenvalue)){
            Alert.alert('Invalid number','Please enter a number between 9 to 100',
            [{text : 'Okay', style : 'destructive' , onPress : this.resetHandler()}]);
            Keyboard.dismiss();
            return;
        }
        this.setState({selectedvalue : chosenvalue});
        this.setState({enteredvalue : ''});
        this.setState({confirmstatus:true});
        Keyboard.dismiss();
        console.log(chosenvalue);
    }

    renderElement(){
        if(this.state.confirmstatus){
            let confirmedoutput = <Card style={styles.numbercard}>
                <Text style={styles.buttontext}>You selected : </Text>
                <NumberCard>{this.state.selectedvalue}</NumberCard>
                <Button title='START GAME'></Button>
                </Card>
            return confirmedoutput;
        }
        else{
            return null;
        }
    }

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.screentitle}>Start new game</Text>
                <Card style={styles.inputcontainer}>
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
                        <TouchableOpacity style={styles.confirmbutton} onPress={this.confirmHandler.bind(this)}>
                            <Text style={styles.buttontext}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                <View>{this.renderElement()}</View>
            </View>
            </TouchableWithoutFeedback>
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
        marginVertical : 10
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
        fontSize : 18
    },
    input:{
        width : 50,
        textAlign : 'center'
    },
    numbercard : {
        marginVertical : 20,
        padding : 30
    }
})

export default StartScreen;