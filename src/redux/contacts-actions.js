import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("contacts/setFilter");

export default {
  setFilter,
};
