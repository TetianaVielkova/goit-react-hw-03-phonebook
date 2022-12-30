import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {Form, Input, Label, Button} from './ContactForm.styled'


export class ContactForm extends Component {
    state= {
        id: '',
        name: '',
        number: '',
    }

    handleChange = event => {
        const {name, value, id} = event.target;
        this.setState({[name]: value, id});
    }
    

    handelSubmit = event => {
        event.preventDefault();
        const { contacts, addContact } = this.props;
        const { name, number } = this.state;
        const contact = {
            name,
            number,
            id: nanoid(),
        };

        const nameAdded = contacts.find(item => {
        const existingContact = item.name.toLowerCase();
        const newItem = contact.name.toLowerCase();
        return existingContact === newItem;
        });

        (nameAdded) ? alert(`${contact.name} is already in contacts`) : addContact(contact);

        this.setState({name: '', number: '', id:''});
    }

    render(){
    const renderId = nanoid();
    const {name, number} = this.state;

    return(
        <Form onSubmit={this.handelSubmit}>
            <Label>Name
                <Input
                id={renderId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                value={name}
                />
            </Label>
            <Label>Number
            <Input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                value={number}
                />
            </Label>
            <Button  type="submit">Add contact</Button>
        </Form>
    )
}
}


ContactForm.propTypes = {
    addContact: PropTypes.func,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
};