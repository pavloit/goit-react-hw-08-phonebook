import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/contactsSlice';
import { addContact, fetchContacts } from '../redux/contactsOperations';
import ContactForm from './contactform/ContactForm';
import ContactList from './contactlist/ContactList';
import Filter from './filter/Filter';
import { Box } from '@chakra-ui/react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RegisterFormPage from '../pages/RegisterFormPage';
import LoginFormPage from '../pages/LoginFormPage';
import Navigation from './Navigation/Navigation';
import UserMenu from './UserMenu/UserMenu';
import PrivateRoute from '../route/PrivateRoute'; 
import { ChakraProvider } from "@chakra-ui/react";



const App = () => {
  const dispatch = useDispatch();
  const { contacts, filter } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); 

  const handleAddContact = newContact => {
    const doesExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (doesExist) {
      alert(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  const handleFilterChange = event => dispatch(actions.setFilter(event.target.value));

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ChakraProvider>
      <Router>
        <Navigation />
        <UserMenu />
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
          <Routes>
            <Route path="/register" element={<RegisterFormPage />} />
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/contacts" element={
              <PrivateRoute>
                <>
                <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Phonebook</h1>
                  <ContactForm onAdd={handleAddContact} />
                <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Contacts</h2>
                  <Filter value={filter} onChange={handleFilterChange} />
                  <ContactList contacts={filteredContacts} onDelete={actions.deleteContact} />
                </>
              </PrivateRoute>
            } />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
};

export default App;












// const CenteredContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// `;

// const App = () => {
 
//   const dispatch = useDispatch();
  
//   const { contacts, filter } = useSelector(state => state.contacts);
  
//   const deleteContact = id => dispatch(actions.deleteContact(id));
  
//   const handleFilterChange = event => dispatch(actions.setFilter(event.target.value));
  
//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   return (
//     <CenteredContainer>
//       <h1>Phonebook</h1>
//       <ContactForm  />
//       <h2>Contacts</h2>
//       <Filter value={filter} onChange={handleFilterChange} />
//       <ContactList contacts={filteredContacts} onDelete={deleteContact} />
//     </CenteredContainer>
//   );
// };

// export default App;