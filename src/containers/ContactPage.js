import React, { Component } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { addCurrentUrltoGA } from '../utils/GAutil';

class ContactPage extends Component {
    componentDidMount() {
        addCurrentUrltoGA();
    }

    render() {
        return (
            <div>
            <h1>Contact!</h1>
            <ContactForm />
            <hr/>
            <ContactList />
            </div>);
    }
}

export default ContactPage;
