import { permit } from "./permit.js";

let permission = permit(13);

console.log(permission); // ожидается false

permission = permit(18);
console.log(permission); // ожидается true

permission = permit(27);
console.log(permission); // ожидается true