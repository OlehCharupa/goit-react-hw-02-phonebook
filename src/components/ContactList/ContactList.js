import React from 'react';
import "./ContactList.css"

const ContactList = ({ contacts }) => {
    return (
        <ul className="contactList">
            {contacts.map(({ id, name, number }) =>
                <li className="contactItem" key={id}>
                    <p className="contactName">{name}</p>
                    <p className="contactNumber">{number}</p>
                    <button type="button" className="del_Btn"></button>
                </li>)}
        </ul>


    );
};

export default ContactList;