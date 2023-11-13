import { distinct } from "./distinct.js";

let arr = [2,2,2,4,4,8,8];
let result = distinct(arr);

console.log(result);

arr = ["z", "a", "b", "a", "foo", "bar", "foo", "z", "a"];
result = distinct(arr);
console.log(result);

arr = [true, true, false, false, false, true, false, true, true];
result = distinct(arr);
console.log(result);