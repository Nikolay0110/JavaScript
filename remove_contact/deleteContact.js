export const deleteContact = function (contacts, field, value) {
  // Ищем индекс контакта по полю и значению
  const indexToDelete = contacts.findIndex(contact => contact[field] === value);

  // Если контакт найден, удаляем его
  if (indexToDelete !== -1) {
    contacts.splice(indexToDelete, 1);
  }
};
