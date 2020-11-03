import React, { Component } from 'react';
import "./ContactForm.css"
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component {
    formInitialState = {
        name: "",
        number: "",
    }

    state = {
        name: "",
        number: "",
    }
    inputHandler = ({ target }) => {
        const { name, value } = target
        this.setState(() => ({
            [name]: value
        }))
    }
    submitHendler = (e) => {
        const { name, number } = this.state
        e.preventDefault();
        const singleContact = {
            name,
            number,
            id: uuidv4()

        }
        this.props.addContact(singleContact)

        this.setState({
            ...this.formInitialState
        })
    }



    render() {
        const { name, number } = this.state
        return (
            <form className="contactForm" onSubmit={this.submitHendler}>
                <label className="labelName"> Name
                <input
                        type="text"
                        name="name"
                        className="inputName"
                        value={name}
                        onChange={this.inputHandler}
                    />
                </label>
                <label className="labelNumber"> Number
                <input
                        type="text"
                        name="number"
                        className="inputNumber"
                        value={number}
                        onChange={this.inputHandler}
                    />
                </label>

                <button type="submit"
                    className="btnForm"
                >
                    Add contact
                    </button>
            </form>
        );
    };
}

export default ContactForm;