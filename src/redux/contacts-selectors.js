const getAllContacts = (state) => state.contacts.enteties;
const getFilter = (state) => state.contacts.filter;
const getloading = (state) => state.contacts.isLoading;
const getFiltredContacts = (state) => {
  const AllContacts = getAllContacts(state);
  const Filter = getFilter(state).toLowerCase();

  const res = AllContacts.filter((item) =>
    item.name.toLowerCase().includes(Filter)
  );
  return res;
};

export default {
  getAllContacts,
  getFilter,
  getFiltredContacts,
  getloading,
};
