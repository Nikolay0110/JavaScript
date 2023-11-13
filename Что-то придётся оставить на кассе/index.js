import { Customer } from "./Customer.js";

const customer = new Customer("Клим", 570);
const orders = [
  {
    name: "Хлеб",
    price: 36,
  },
  {
    name: "Хлеб",
    price: 36,
  },
  {
    name: "Сметана",
    price: 89,
  },
  {
    name: "Сметана",
    price: 89,
  },
  {
    name: "Йогурт клубничный",
    price: 113,
  },
  {
    name: "Кофе молотый",
    price: 329,
  },
  {
    name: "Батончик",
    price: 17,
  },
];

orders.forEach(function (order) {
  customer.addOrder(order);
});

let whichCanBeSkipped = customer.getWhichCanBeSkipped();

console.log(whichCanBeSkipped);

const theMostCost = whichCanBeSkipped.sort(function(first, second) {
    const firstSumm = first.reduce(function (summ, order) {
        summ += order.price;

        return summ;
    }, 0);
    const secondSumm = second.reduce(function (summ, order) {
        summ += order.price;

        return summ;
    }, 0);

    return firstSumm - secondSumm;
}).pop();

theMostCost.forEach(function(order) {
    customer.removeOrder(order);
});

whichCanBeSkipped = customer.getWhichCanBeSkipped();
console.log(whichCanBeSkipped);
