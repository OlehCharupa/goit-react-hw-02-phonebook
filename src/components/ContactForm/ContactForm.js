import React from 'react';
import "./ContactForm.css"


const ContactForm = ({ addContact }) => {
    return (
        <form className="contactForm">
            <label className="labelName"> Name
                <input name="name" className="inputName" />
            </label>
            <label className="labelNumber"> Number
                <input name="number" className="inputNumber" />
            </label>

            <button type="submit" className="btnForm" onSubmit={(() => addContact())}>Add contact</button>
        </form>
    );
};

export default ContactForm;