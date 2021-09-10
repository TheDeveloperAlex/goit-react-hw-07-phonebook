import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";
import { combineReducers } from "redux";
import { fetchContacts, addContact, deleteContact } from "./contacts-operation";

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
