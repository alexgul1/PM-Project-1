let newBlock = document.querySelector('#new-block');
let topBlock = document.querySelector('#top-block');
let saleBlock = document.querySelector('#sale-block');
const newProducts = document.querySelector("#new-products");
const topProducts = document.querySelector('#top-products');
const saleProducts = document.querySelector("#sale-products");

const renderOneProduct = (productObj, label) => {
  let priceButtonPlace = "";

  if (productObj.hasOwnProperty('price')) {
    priceButtonPlace = `<div class="one-good__price-wrap">
                            <p class="one-good__price">Цена: <span>${productObj.price} ${productObj.currency}</span></p>
                            ${productObj.hasOwnProperty("oldPrice") ? `<div class="one-good__discount">${productObj.oldPrice}</div>` : ""}
                          </div>
                          <div class="one-good__actions">
                            <button class="btn basket-btn" data-price="${productObj.price}">Купити</button>
                            <p class="one-good__about"><a href="${productObj.url}">Подробнее</a></p>
                          </div>`
  } else {
    priceButtonPlace = `<div class="one-good__price-wrap">
                            <p class="one-good__price"><span>Товар временно недоступен</span></p>
                          </div>`
  }

  return `<div class="one-good ${label}">
                <div class="one-good__image-wrap">
                  <a href="${productObj.url}">
                    <img src="${productObj.img}" alt="${productObj.description}" onerror="this.src='images/no-img-icon.png'">
                  </a>
                </div>
                <h4 class="one-good__name"><a href="${productObj.url}">${productObj.description}</a></h4>
                ${priceButtonPlace}
            </div>`;
}

const renderNewProducts = () => {
  if (!newProductsList.length) {
    newBlock.remove();
    newBlock = null;
    return;
  }

  if (newProductsList.length > 12) {
    newProductsList.splice(12);
  }

  newProducts.innerHTML = newProductsList.reduce((accum, product) => accum + renderOneProduct(product, "new-label"), "");
}

const renderTopProducts = () => {
  if (!recommendedProductsList.length) {
    topBlock.remove();
    topBlock = null;
    return;
  }

  if (recommendedProductsList.length > 12) {
    recommendedProductsList.splice(12);
  }

  topProducts.innerHTML = recommendedProductsList.reduce((accum, product) => accum + renderOneProduct(product, "top-label"), "");
}

const renderSaleProducts = () => {
  if (!saleProductsList.length) {
    saleBlock.remove();
    saleBlock = null;
    return;
  }

  if (saleProductsList.length > 12) {
    saleProductsList.splice(12);
  }

  saleProducts.innerHTML = saleProductsList.reduce((accum, product) => accum + renderOneProduct(product, "sale-label"), "");
}

const renderOneRightNow = (productObj) => {
  return `<div class="right-now_slider__product">
              <a class="right-now_product__img" href="${productObj.url}">
                <img src="${productObj.img}" alt="${productObj.title}" onerror="this.src='images/no-img-icon.png'">
              </a>
              <a class="right-now-product__link" href="${productObj.url}">${productObj.title}</a>
            </div>`
}

const renderRightNowProducts = () => {
  if(!BUYING_RIGHT_NOW.length) {
    document.querySelector(".right-now-block").remove();
    return;
  }

  let tempArr;
  if(BUYING_RIGHT_NOW.length > 4) {
    tempArr = BUYING_RIGHT_NOW.slice(BUYING_RIGHT_NOW.length - 4);
  } else {
    tempArr = BUYING_RIGHT_NOW;
  }

  const rightNow = document.querySelector('#right-now');

  rightNow.innerHTML = tempArr.reduce((accum, product) => accum + renderOneRightNow(product), "");
}