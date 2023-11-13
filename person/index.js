import { createPerson } from "./createPerson.js";

let person = createPerson("Родион", 27, "муж", "somebox@mail.ru");

person.sayHi();

person = createPerson("Анастасия", 21, "жен", "cutebox@ya.ru");
person.sayHi();

console.log(person);