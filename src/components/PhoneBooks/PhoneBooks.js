import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from "../ContactList/ContactList"
import Filter from "../Filter/Filter"


class PhoneBooks extends Component {
    state = {
        contacts: [],
        filter: ''
    }

    addContact = (objContact) => {
        this.setState((prev) => ({
            // contacts: [...prev.contacts, objContact]
            contacts: this.state.contacts.every(contact => contact.name !== objContact.name) ? [...prev.contacts, objContact] : alert("Контакт с таким Именем уже существует!")
        }));
    }
    deleteContact = id => {
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== id)
        })
    }
    filterName = () => {
        return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))

    }
    stateFilter = (obj) => {
        this.setState({ filter: obj })
    }


    render() {
        const { contacts } = this.state
        return (
            <>
                <h1 className="title">Phonebook</h1>
                <ContactForm
                    addContact={this.addContact} />
                <h2 className="subTitle">Contacts</h2>
                <Filter stateFilter={this.stateFilter} />
                {this.filterName().map(contact => <ContactList
                    key={contact.id}
                    {...contact}
                    deleteContact={this.deleteContact} />)}
            </>
        );
    }
}

export default PhoneBooks;