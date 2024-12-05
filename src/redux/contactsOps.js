import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactAxiosInstance } from "./api/contactAxios";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async ( thunkAPI) => {
        try{
            const response = await contactAxiosInstance.get(`/contacts`)
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e?.message || "An error occurred while fetching contacts")
        }
    },
  )                                                            

  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try{
            const response = await contactAxiosInstance.delete(`/contacts/${contactId}`)
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e?.message || "An error occurred while deleting the contact")
        }
    },
  )
  export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, thunkAPI) => {
        try{
            const response = await contactAxiosInstance.post('/contacts',contact);
            return response.data;
        }catch(e){
            return thunkAPI.rejectWithValue(e?.message || "An error occurred while adding the contact");
        }
    },
  )