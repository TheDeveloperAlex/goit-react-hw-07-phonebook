import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import { combineReducers } from "redux";
import { fetchContacts, addContact, deleteContact } from "./contacts-operation";

// import * as operations from "./contacts-operation";

// const initialContactsState = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// const contactsReducer = createReducer(initialContactsState, {
//   [actions.createContact]: (state, action) => [...state, action.payload],
//   [actions.removeContact]: (state, action) =>
//     state.filter((contact) => contact.id !== action.payload),
// });

// const filterReducer = createReducer("", {
//   [actions.setFilter]: (state, { payload }) => payload,
// });

// export default combineReducers({
//   items: contactsReducer,
//   filter: filterReducer,
// });

const enteties = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  // [addContact.pending]: () => true,
  // [addContact.fulfilled]: () => false,
  // [addContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,

  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
});

const filterReducer = createReducer("", {
  [actions.setFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  enteties,
  isLoading: isLoading,
  error: error,
  filter: filterReducer,
});
