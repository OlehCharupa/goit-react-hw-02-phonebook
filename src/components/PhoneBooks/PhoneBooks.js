import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"



class PhoneBooks extends Component {
    state = {
        contacts: [],
        name: ''
    }
    addContact = () => {
        this.setState((prev) => ({
            contacts: prev.contacts
        }))
    }

    render() {
        return (
            <>
                <h1 className="title">Phonebook</h1>
                <ContactForm />
                <h2 className="subTitle">Contacts</h2>
                {/* <Filter /> */}
                <ul className="contactList">
                    <ContactList />
                </ul>
            </>
        );
    }
}

export default PhoneBooks;