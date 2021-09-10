import actions from "./contacts-actions";
import {
  getContactsApi,
  addContactApi,
  deleteContactsApi,
} from "./contacts-api";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const addContact = (contact) => async (dispatch) => {
//   dispatch(actions.postContactsRequest());
//   try {
//     const addContactRes = await addContactApi(contact);
//     dispatch(actions.postContactsSuccess(addContactRes));
//   } catch {
//     dispatch(actions.postContactsError(error));
//   }
// };

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(actions.fetchContactsRequest());
//   try {
//     const contacts = await getContactsApi().then((res) => res);
//     dispatch(actions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(actions.fetchContactsError(error));
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    const contacts = await getContactsApi().then((res) => res);
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    const addContactRes = await addContactApi(contact);
    return addContactRes;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    // console.log(deleteContactsApi(id));
    // console.log(id);
    const deleteContactRes = await deleteContactsApi(id);
    // const res = state.filter((contact) => contact.id !== payload);
    return id;
  }
);
