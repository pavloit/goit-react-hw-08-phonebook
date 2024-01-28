import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://65b406d0770d43aba47ad797.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
    const response = await axios.get('');
    return response.data;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contact) => {
    const { data } = await axios.post('', contact)
    return data;
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id) => {
    await axios.delete(`/${id}`);
    return id;
});
