import React from 'react';
import AddContactForm from '../addContactForm';


class AddContactScreen extends Component {
    /**
     *  llamar al App.addContact para agregar el nuevo contacto
     *  rediregir a ContactList
     */
    handleSubmit = formState =>{
        this.props.screenProps.addContact(formState);
        this.props.navigation.navigate('ContactList')
    }


    render() {
        return (
            <AddContactForm onSubmit={this.handleSubmit}/>
        );
    }
}

export default AddContactScreen;