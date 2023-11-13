import { phoneBook } from "./phoneBook.js";
import { sortContacts } from "./sortContacts.js";

console.log("Телефонная книга до сортировки:");
console.log(phoneBook); // Ожидаем, что список контактов представлен в том же порядке как и в файле phoneBook.js

sortContacts(phoneBook);

console.log("Телефонная книга отсортирована:");
console.log(phoneBook); // Ожидаем, что список контактов отсортирован (Анастасия, Английский...Танцы, Школа Арта)