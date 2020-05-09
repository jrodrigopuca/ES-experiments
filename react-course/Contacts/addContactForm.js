import React from 'react';
import {TextInput, View, Button, StyleSheet, KeyboardAvoidingView} from 'react-native';
import PropTypes from 'prop-types';
import Constants from 'expo-constants';

export default class AddContactForm extends React.Component{
    static propTypes ={
        onSubmit: PropTypes.func
    }

    state = {name:'', phone:'', isFormValid:false}

    /** función que toma un key + su valor y lo guarda en state */
    getHandler = key => val => {
        this.setState({[key]:val}, this.validateForm)
    }
    
    handleNameChange = this.getHandler('name');

    //handleNameChange = name => {this.setState({name}, this.validateForm)}
    handlePhoneChange = phone => {
        if (+phone >=0 && phone.length <=10){this.setState({phone}, this.validateForm)}
    }

    validateForm = () =>{
        const names = this.state.name.split(' ');
        const valid= (+this.state.phone >=0 && this.state.phone.length ===10 && this.state.name.length>3 && names.length>=2 && names[0] && names[1]);
        this.setState({isFormValid:valid})
    }

    /*
    //Forma para validar sin usar el callback
    componentDidUpdate(prevProps, prevState){
        if (this.state.name !== prevState.name || this.state.phone!== prevState.phone){
            this.validateForm()
        }
    }*/

    handleSubmit = () => {
        this.props.onSubmit({...this.state});
    }

    render(){
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <TextInput style={styles.input} value={this.state.name} onChangeText={this.handleNameChange} placeholder="Name"/>
                <TextInput style={styles.input} value={this.state.phone} onChangeText={this.handlePhoneChange} keyboardType="numeric" placeholder="Phone"/>
                <Button style={styles.input} title="Add Contact" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    input:{
        paddingHorizontal:10,
        paddingVertical:5,
        marginTop:20,
        marginHorizontal: 20,
        borderRadius:3,
        borderColor: 'black',
        borderWidth:1,
        justifyContent: 'center'
    },
    container:{
        paddingTop: Constants.statusBarHeight,
        flex:1,
        justifyContent:'center'
    }
})