export const searchContacts = function (contacts, pattern) {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(pattern.toLowerCase()));
};