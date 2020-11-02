import React from 'react';
import "./ContactForm.css"


const ContactForm = () => {
    return (
        <form className="contactForm">
            <label className="labelName"> Name
                <input name="name" className="inputName" />
            </label>
            <button type="submit" className="btnForm">Add contact</button>
        </form>
    );
};

export default ContactForm;