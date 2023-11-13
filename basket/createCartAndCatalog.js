const createCatalog = function() {
  return {
      goods: [],
      addGood: function (id, name, description, sizes, price, available) {
          this.goods.push({
              id,
              name,
              description,
              sizes,
              price,
              available,
          });
      },
      getGood: function (id) {
        for (let i = 0; i < this.goods.length; i++) {
            const good = this.goods[i];

            if (good.id === id) {
                return good;
            }
        }
        return null;
    },
  };
};

const createCart = function() {
  return {
    orders: [],
    addGood: function (order) {
      this.orders.push(order);
    },
    removeGood: function (id) {
      for (let i = 0; i < this.orders.length; i++) {
        const order = this.orders[i];
        if (order.good.id === id) {
          this.orders.splice(i, 1);
          break;
        }
      }
    },
    clearCart: function() {
      this.orders = [];
    },
    getTotalAmountAndTotalSumm: function () {
      let totalAmount = 0;
      let totalSumm = 0;

      for (let i = 0; i < this.orders.length; i++) {
        const order = this.orders[i];

        totalAmount += order.amount;
        totalSumm += order.amount * order.good.price;
      }

      return {
        totalAmount,
        totalSumm,
      };
    },
  };
};

export { createCatalog, createCart };
