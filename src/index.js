import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsSlice';
import App from './components/App';
import './index.css';
import { fetchContacts } from './redux/contactsOperations';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// Load the contacts from the backend when the store is created.
store.dispatch(fetchContacts());

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);