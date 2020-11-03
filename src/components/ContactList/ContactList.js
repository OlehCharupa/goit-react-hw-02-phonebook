import React from 'react';
import "./ContactList.css"

const ContactList = ({ name, number, id, deleteContact }) => {
    const deleteItem = () => {
        deleteContact(id)
    }
    return (
        <ul className="contactList">
            <li className="contactItem">
                <p className="contactName">{name}</p>
                <p className="contactNumber">{number}</p>
                <button type="button" className="del_Btn" onClick={deleteItem}></button>
            </li>
        </ul>


    );
};

export default ContactList;