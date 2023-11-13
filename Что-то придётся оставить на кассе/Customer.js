export class Customer {
  #pocket = 0;
  #cart = [];

  constructor(name, money) {
    this.name = name;
    this.#pocket = money;
  }

  addOrder(order) {
    this.#cart.push(order);
  }

  removeOrder(order) {
    const orderIndex = this.#cart.findIndex(function (ord) {
      return ord === order;
    });

    if (orderIndex > -1) {
      this.#cart.splice(orderIndex, 1);
    }
  }

  getWhichCanBeSkipped() {
    const result = [];

    this.#cart.forEach((order) => {
      const list = [];
      let totalSumm = this.#cart.reduce(function (summ, ord) {
        summ += ord.price;

        return summ;
      }, 0);

      if (totalSumm <= this.#pocket) {
        return;
      }

      let orderIndex = 0;

      totalSumm -= order.price;
      list.push(order);

      while (orderIndex < this.#cart.length && totalSumm > this.#pocket) {
        const ord = this.#cart[orderIndex];

        if (ord !== order) {
          list.push(ord);
          totalSumm -= ord.price;
        }

        orderIndex++;
      }

      const listSumm = list.reduce(function (summ, ord) {
        summ += ord.price;

        return summ;
      }, 0);

      const theSame = result.find(function (set) {
        return listSumm === set.reduce(function (summ, ord) {
            summ += ord.price;

            return summ;
        }, 0);
      });

      if (!theSame) {
        result.push(list);
      }
    });

    return result;
  }
}