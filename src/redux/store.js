import { configureStore } from "@reduxjs/toolkit";
import reducer from "./contacts-reducer";

const store = configureStore({
  reducer: {
    // contacts: reducer,
    contacts: reducer,
    // isLoading: false,
  },
  devTools: process.env.NODE_ENV === "development",
});

export default store;
