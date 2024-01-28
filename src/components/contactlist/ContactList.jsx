import { useSelector } from 'react-redux';
import ContactListItem from '../contactlistitem/ContactListItem';
import styled from 'styled-components';

const ItemList = styled.ul`
 list-style: none;
 color: darkblue;
`;

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state.contacts);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  return (
    <ItemList>
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ItemList>
  );
};


export default ContactList;