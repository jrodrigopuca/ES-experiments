import React from 'react'
import { StyleSheet, SectionList, Text } from 'react-native'
import Proptypes from 'prop-types'
import Row from './Row';

const renderItem = (obj) => <Row {...(obj.item)} />

const renderSectionHeader = (obj) => <Text style={styles.header}>{obj.section.title}</Text>;

const ContactList = (props) => {
    const contactByLetter = props.contacts.reduce((obj,contact)=>{
        const firstL = contact.name[0].toUpperCase();
        // mantiene todas las claves anteriores, 
        return {
            ...obj,
            [firstL]:[...(obj[firstL] || []), contact]
        }
    },{})

    const sections = Object.keys(contactByLetter).sort().map(letter=>({
        title: letter, data: contactByLetter[letter] 
    }))

    return (<SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />)
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30
    }
})



export default ContactList;

ContactList.propTypes = {
    contacts: Proptypes.array,
}