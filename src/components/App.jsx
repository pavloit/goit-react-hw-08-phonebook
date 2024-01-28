import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/contactsSlice'; 
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
 
  const dispatch = useDispatch();
  
  const { contacts, filter } = useSelector(state => state.contacts);
  
  const deleteContact = id => dispatch(actions.deleteContact(id));
  
  const handleFilterChange = event => dispatch(actions.setFilter(event.target.value));
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <CenteredContainer>
      <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </CenteredContainer>
  );
};

export default App;