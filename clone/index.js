import { createPerson } from "./createPerson.js";
import { clone } from "./clone.js";

const person = createPerson("Радион", 33, "муж", "mymail@example.com");
const enother = clone(person);

enother["e-mail"] = "employee@company.org";

if (enother !== person && enother["e-mail"] !== person["e-mail"]) {
    console.log("Да. Действительно. Мы успешно произвели клонирование.");
} else {
    console.log("Всё таки клонирование не получилось.");
}