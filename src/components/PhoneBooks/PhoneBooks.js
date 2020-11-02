import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
// import { v4 as uuidv4 } from 'uuid';



class PhoneBooks extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
        name: '',
        number: ''
    }

    addContact = (e) => {
        const contact = e.target
        this.setState((prev) => ({
            contacts: [...prev.contacts, contact]
        }));
    }

    render() {
        const { contacts, name } = this.state
        return (
            <>
                <h1 className="title">Phonebook</h1>
                <ContactForm addContact={this.addContact} />
                <h2 className="subTitle">Contacts</h2>
                {/* <Filter /> */}
                {contacts.length > 0 ? <ContactList contacts={contacts} name={name} /> : false}
            </>
        );
    }
}

export default PhoneBooks;