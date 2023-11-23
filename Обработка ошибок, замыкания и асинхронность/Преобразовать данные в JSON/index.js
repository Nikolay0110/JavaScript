import { validData, corruptedData } from "./data.js";
import { parseToJSON } from "./parseToJSON.js";

let data = parseToJSON(corruptedData);

console.log(data) // Ожидаем { }
console.log(data.products?.length) // Ожидаем undefined

data = parseToJSON(validData);

console.log(data) // Ожидаем объект с не пустым свойством users
console.log(data.users?.length) // Ожидаем 30