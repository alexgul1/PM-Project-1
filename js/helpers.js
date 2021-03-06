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
    .sort((product1, product2) => (+product1.price || Infinity) - (+product2.price || Infinity));

  saleProductsList = ITEMS.filter(({type}) => type === "sale")
    .sort((product1, product2) => {
      return (+product1.price - (+product1.oldPrice || 0)) - (+product2.price - (+product2.oldPrice || 0));
    });
}

const checkProductsCount = () => {
  const screenWidth = window.innerWidth;

  const temp = numberOfDisplayedGoods;

  if (screenWidth < 750) {
    numberOfDisplayedGoods = 1;
  } else if (screenWidth < 980) {
    numberOfDisplayedGoods = 3;
  } else {
    numberOfDisplayedGoods = 4;
  }

  if (temp === numberOfDisplayedGoods) return;

  if(newBlock) {
    changeArrowsVisibility(newBlock, newProducts);
    slideToggle({target: "#" + newProducts.id}, numberOfDisplayedGoods);
  }

  if (topBlock) {
    changeArrowsVisibility(topBlock, topProducts);
    slideToggle({target: "#" + topProducts.id}, numberOfDisplayedGoods);
  }

  if (saleBlock) {
    changeArrowsVisibility(saleBlock, saleProducts);
    slideToggle({target: "#" + saleProducts.id}, numberOfDisplayedGoods);
  }

  if(offerBlock) {
    changeArrowsVisibility(offerBlock, offers);
    slideToggle({target: "#" + offers.id}, numberOfDisplayedGoods);
  }
}

const changeArrowsVisibility = (block, productsList) => {
  const arrows = block.querySelectorAll(".arrow");
  if (productsList.childElementCount > numberOfDisplayedGoods) {
    for (const arrow of arrows) {
      arrow.style.display = "inline-block";
    }
  } else {
    for (const arrow of arrows) {
      arrow.style.display = "none";
    }
  }
}

const checkBrandsCount = () => {
  const screenWidth = window.innerWidth;

  const temp = numberOfDisplayedBrands;

  if(screenWidth < 980) {
    numberOfDisplayedBrands = 5;
  } else if (screenWidth < 1140){
    numberOfDisplayedBrands = 7;
  } else {
    numberOfDisplayedBrands = 9;
  }

  if(temp === numberOfDisplayedBrands) return;

  slideToggle({target: "#brand-slider"}, numberOfDisplayedBrands);
}

const checkStatsCount = () => {
  const screenWidth = window.innerWidth;

  const temp = numberOfDisplayedStats;

  if(screenWidth < 980) {
    numberOfDisplayedStats = 4;
  } else {
    numberOfDisplayedStats = 6;
  }

  if(temp === numberOfDisplayedStats) return;

  slideToggle({target: "#statistics-slider"}, numberOfDisplayedStats);
}