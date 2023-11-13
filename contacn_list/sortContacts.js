export const sortContacts = function (contacts) {
    return contacts.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
};