import axios from "axios";

axios.defaults.baseURL = "http://localhost:7070";
const BASE_URL = "http://localhost:7070";

export const getContactsApi = () => {
  return axios
    .get("/contacts")
    .then(({ data }) => data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

export const addContactApi = (contact) => {
  return axios
    .post("/contacts", contact)
    .then(({ data }) => data)
    .catch((err) => console.log(err));
};

export const deleteContactsApi = (contactId) => {
  return (
    axios
      .delete(`contacts/${contactId}`)
      .then(({ data }) => data)
      // .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  );
};
