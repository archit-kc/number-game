import React , { Component } from 'react';

import { View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';

class StartScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.screen}>
                <Text style={styles.screentitle}>Start new game</Text>
                <View style={styles.inputcontainer}>
                    <Text style={styles.inputtitle}>Select a number</Text>
                    <TextInput placeholder="Enter a number"></TextInput>
                    <View style={styles.buttoncontainer}>
                        <TouchableOpacity style={styles.resetbutton}>
                            <Text style={styles.buttontext}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmbutton}>
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
    }
})

export default StartScreen;