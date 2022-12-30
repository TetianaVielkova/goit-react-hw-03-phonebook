import PropTypes from 'prop-types';
import {List, Item, DeleteBtn} from './ContactList.styled'


export const ContactList = ({contacts, onDeleteContact}) => {
    
    return(
        <List>
            {contacts.map(({id, name, number}) => (
                <Item key={id}>{name}: {number}
                <DeleteBtn
                    type='button' onClick={() => {onDeleteContact(id)}}>Delete
                </DeleteBtn>
                </Item>
            ))}
        </List>
    )
}

ContactList.protoType = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.number,
        })
    ),
    onDeleteContact: PropTypes.func,
};