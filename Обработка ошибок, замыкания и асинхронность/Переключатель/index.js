import { toogle } from "./toogle.js";

let enabled = toogle();

console.log(enabled); // Ожидаем true

enabled = toogle();

console.log(enabled); // Ожидаем false

enabled = toogle();

console.log(enabled); // Ожидаем true