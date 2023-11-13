import { phoneBook } from "./phoneBook.js"
import { searchContacts } from "./searchContacts.js";

let result = searchContacts(phoneBook, "сан");

console.log(result); // Ожидаем получить 4 контакта (Сантехник, Саня, Санта (Дед Мороз), и Санаторий)

result = searchContacts(phoneBook, "л"); // Ожидаем получить 7 контактов
console.log(result);

result = searchContacts(phoneBook, "Глеб");
console.log(result); // Ожидаем получить 0 контактов
