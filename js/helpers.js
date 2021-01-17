const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

let newProductsList = [];
let recommendedProductsList = [];
let saleProductsList = [];

const randomNumber = (max) => Math.floor(Math.random() * (max + 1));

const checkCurrencyOfProduct = () => {
  ITEMS.forEach((product) => {
    if (product.currency !== CURRENCY && product.hasOwnProperty("price")) {
      product.price = Math.floor(+product.price * CURRENCY_EXCHANGE[product.currency]) + "";
      if (product.hasOwnProperty("oldPrice")) {
        product.oldPrice = Math.floor(+product.oldPrice * CURRENCY_EXCHANGE[product.currency]) + "";
      }
      product.currency = CURRENCY;
    }
  })
};

const filterProductsLists = () => {
  newProductsList = ITEMS.filter(({type}) => type === "new")
    .sort((product1, product2) => new Date(product2.date) - new Date(product1.date));

  recommendedProductsList = ITEMS.filter(({type}) => type === "recommended")
    .sort((product1, product2) => +product1.price - +product2.price);

  saleProductsList = ITEMS.filter(({type}) => type === "sale")
    .sort((product1, product2) => {
      return (+product1.price - (+product1.oldPrice || 0)) - (+product2.price - (+product2.oldPrice || 0));
    });
}