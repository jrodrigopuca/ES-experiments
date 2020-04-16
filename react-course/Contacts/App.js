import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Constants from 'expo-constants';
import contacts, {compareNames} from './contacts';
import ContactList from './ContactList';
import AddContactForm from './addContactForm'

export default class App extends React.Component{
  state ={
    showContacts: false, 
    showForm: false,
    contacts: contacts
  }

  addContact = newContact => {
    this.setState(prev=>({contacts:[...prev.contacts, newContact], showForm:false}))
  }

  toggleContacts = () =>{
    this.setState(prev => ({showContacts:!prev.showContacts}))
  }

  toggleForm = () =>{
    this.setState(prev => ({showForm:!prev.showForm}))
  }


  sort = () =>{
    this.setState(prev =>({contacts: [...prev.contacts].sort(compareNames)}))
    console.log(this.state.contacts)
  }

  render(){
    if (this.state.showForm) return (<AddContactForm onSubmit={this.addContact}/>)
    return (
      <View style={styles.container}>
        <Button title="mostrar contactos" onPress={this.toggleContacts} />
        <Button title="agregar contacto" onPress={this.toggleForm} />
        <Button title="ordenar" onPress={this.sort} />

        {this.state.showContacts && (
          <ContactList contacts={this.state.contacts}/>
        )}


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  scroll:{
    flex:1,
    width:'100%',
  }, 
  contentScroll:{
    alignItems:'center',
  },
});
