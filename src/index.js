import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contactsSlice';
import authReducer from './redux/authSlice'; 
import { fetchContacts } from './redux/contactsOperations';
import App from './components/App';
import './index.css';


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer, 
  },
});

store.dispatch(fetchContacts());

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);