import React from 'react';
import {TextInput, View, Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

export default class AddContactForm extends React.Component{
    static propTypes ={
        addContact: PropTypes.func
    }

    state = {name:'', phone:''}

    handleNameChange = name => {this.setState({name})}
    handlePhoneChange = phone => {this.setState({phone})}

    render(){
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.name} onChangeText={this.handleNameChange}/>
                <TextInput style={styles.input} value={this.state.phone} onChangeText={this.handlePhoneChange} keyboardType="numeric"/>
                <Button title="Add Contact"/>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    input:{
        padding:5, 
        borderColor: 'black',
        borderWidth:1,
    },
    container:{
        paddingTop: Constants.statusBarHeight,
    }
})