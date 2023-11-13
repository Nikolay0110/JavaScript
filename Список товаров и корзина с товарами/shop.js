class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
        new Good(this.id, this.name, this.description, this.sizes, this.price, this.available);
    }

    setAvailable(available) {
        this.available = available;
    }
}

class GoodsList {
    #goods = [];


// Скрытое свойство для хранения товаров типа Good
    #filter = null; // Свойство для хранения регулярного выражения для фильтрации по имени
    #sortPrice = false; // По умолчанию не сортируем по цене
    #sortDir = true; // По умолчанию сортируем по возрастанию



    get list() {
        // Фильтрация по доступности и имени, а затем сортировка, если требуется
        let filteredList = this.#goods.filter(good => good.available);
        if (this.#filter) {
            const regex = new RegExp(this.#filter, 'i'); // Создаем регулярное выражение
            filteredList = filter(good => regex.test(good.name));
        }

        if (this.#sortPrice) {
            if (this.#sortDir) {
                filteredList.sort((a, b) => a.price - b.price); // Сортировка по возрастанию цены
            } else {
                filteredList.sort((a, b) => b.price - a.price); // Сортировка по убыванию цены
            }
        }
        return filteredList; // Возвращаем отфильтрованный и отсортированный список товаров
    }
    }

    add(good) {
        const existingGood = this.#goods.find(g => g.id === good.id);
        if (!existingGood) {
            this.#goods.push(good);
        }
    }

    remove(goodId) {


this.#goods = this.#goods.filter(good => good.id !== goodId);
    }

    set filter(regex) {
        this.#filter = regex;
    }

    set sortPrice(sort) {
        this.#sortPrice = sort;
    }

    set sortDir(dir) {
        this.#sortDir = dir;
    }
}

/*
 * Необходимо описать класс Товар в Корзине. Данный класс должен содержать
 * такие же свойства, как и у класса Good. Поэтому класс BasketGood должен
 * наследоваться от Good (быть дочерним). Также данный класс должен описывать
 * дополнительное свойство amount (количество). При инициализации экземпляра
 * класса BasketGood через ключевое слово new в конструктор (в качестве
 * параметров) необходимо передать:
 * - good - экземпляр (объект) типа Good
 * - amount - количество товаров типа number
 */
class BasketGood {}

class Basket {
  /*
   * Необходимо описать класс Корзина. При инициализации нового
   * объекта Корзина через ключевое слово new в коструктор ничего
   * не передавать. Объект типа Basket должен содержать в себе:
   * - goods - свойство, которое будет содержать все товары типа
   *   BasketGood.
   * - totalAmount - "геттер", который должен возвращать общее
   *   количество всех товаров в корзине.
   * - totalSumm - "геттер", который должен возвращать общую
   *   стоимость всех товаров в корзине.
   * - add - метод, который добавляет новый товар типа BasketGood
   *   в корзину, если такого товара еще нет в корзине, иначе
   *   увеличивает количество существующего товара в корзине.
   *   В качестве параметров метод принимает товар типа Good и
   *   количество типа number. В качестве результата метод ничего
   *   не возвращает.
   * - remove - метод, который удаляет товар типа BasketGood из корзины,
   *   если значение amount больше или равно количеству товаров в корзине.
   *   В противном случае метод уменьшает количество товаров в корзине.
   *   В качестве параметров метод принимает товар типа Good и количество
   *   типа number. В качестве результата метод ничего не возвращает.
   * - clear - метод, который удаляет все товары из корзины. В качестве
   *   параметров метод ничего не принимает. В качестве результата метод
   *   ничего не возвращает.
   * - removeUnavailable - метод, который удаляет недоступные товары.
   *   В качестве параметров метод ничего не принимает. В качестве
   *   результата метод ничего не возвращает.
   */
}

export { Good, GoodsList, BasketGood, Basket };