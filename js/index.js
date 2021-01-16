((document) => {

  const smallBasketCounter = document.querySelector('.basket-goods-counter');
  const basketCounter = document.querySelector('.basket-counter');
  const basketSum = document.querySelector('.basket-sum');

  const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  let newProductsList = [];
  let recommendedProductsList = [];
  let saleProductsList = [];

  const randomNumber = (max) => Math.floor(Math.random() * (max + 1));

  const checkCurrencyOfProduct = () => {
    ITEMS.forEach((product) => {
      if (product.currency !== CURRENCY) {
        product.price = Math.floor(+product.price * CURRENCY_EXCHANGE[product.currency]) + "";
        if (product.hasOwnProperty("oldPrice")) {
          product.oldPrice = Math.floor(+product.oldPrice * CURRENCY_EXCHANGE[product.currency]) + "";
        }
        product.currency = CURRENCY;
      }
    })
  }

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

  const toggleBurgerMenu = () => {
    document.querySelector('.menu').classList.toggle('open');
  }

  const renderTopMenu = () => {
    const topMenu = document.querySelector('.menu-items');
    let count = 0;
    for (let key of Object.keys(TOP_MENU)) {
      if (count >= 9) return;

      const menuItem = TOP_MENU[key];

      if (menuItem.hasOwnProperty("submenu")) {
        const subMenu = menuItem.submenu.reduce((accum, obj) => {
          return accum + `<a class="sub-menu_item" href="${obj.url}">${obj.title}</a>`
        }, "");

        topMenu.innerHTML += `<div class="sub-menu">
                                <a class="menu-item">${menuItem.title}</a>
                                <div class="sub-menu_items">${subMenu}</div>
                              </div>`;

      } else {
        topMenu.innerHTML += `<a class="menu-item" href="${menuItem.url}">${menuItem.title}</a>`
      }
      count++;
    }
  }

  const fillBasketInfo = () => {
    smallBasketCounter.innerHTML = BASKET.elements || "0";
    basketCounter.innerHTML = BASKET.elements || "0";
    basketSum.innerHTML = `${BASKET.price || 0} ${CURRENCY}`;
  }

  const renderNews = () => {
    const newsList = document.querySelector('.news-list');

    const newsProps = ["date", "title", "description", "img", "url"];

    const filteredNews = NEWS.filter((newsObj) => {
      return newsProps.every(prop => newsObj.hasOwnProperty(prop) && newsObj[prop]);
    });

    if (!filteredNews.length) {
      newsList.innerHTML = "<h2>Мы готовим для вас сумасшедшие новости :D</h2>";
      document.querySelector('.all-news-link').remove();
      return;
    }

    if (filteredNews.length > 3) {
      while (filteredNews.length !== 3) {
        filteredNews.splice(randomNumber(filteredNews.length - 1), 1);
      }
    }

    newsList.innerHTML = filteredNews.reduce((accum, newsObj) => accum + renderOneNews(newsObj), "");
  }

  const renderOneNews = (newsObj) => {
    const newsDate = new Date(newsObj.date);

    return `<li class="news-preview">
              <a href="${newsObj.url}">
                <img class="news-img" src="${newsObj.img}" alt="${newsObj.title}" onerror="this.src='images/no-img-icon.png'">
                <div class="news-date">
                  <p class="date-num">${newsDate.getDate()}</p>
                  <p>${monthArr[newsDate.getMonth()]}</p>
                </div>
              </a>
              <div class="news-text">
                <a class="news-title" href="${newsObj.url}">${newsObj.title}</a>
                <p class="news-article">${newsObj.description}</p>
              </div>
            </li>`
  };

  const renderOneProduct = (productObj, label) => {
    let priceButtonPlace = "";

    if (productObj.hasOwnProperty('price')) {
      priceButtonPlace = `<div class="one-good__price-wrap">
                            <p class="one-good__price">Цена: <span>${productObj.price} ${productObj.currency}</span></p>
                            ${productObj.hasOwnProperty("oldPrice") ? `<div class="one-good__discount">${productObj.oldPrice}</div>` : ""}
                          </div>
                          <div class="one-good__actions">
                            <button class="btn basket-btn">Купити</button>
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
      document.querySelector('#new-block').remove();
      return;
    }

    if (newProductsList.length > 12) {
      newProductsList.splice(12);
    }

    const newProducts = document.querySelector("#new-products");

    newProducts.innerHTML = newProductsList.reduce((accum, product) => accum + renderOneProduct(product, "new-label"), "");
  }

  const renderTopProducts = () => {
    if (!recommendedProductsList.length) {
      document.querySelector('#top-block').remove();
      return;
    }

    if (recommendedProductsList.length > 12) {
      recommendedProductsList.splice(12);
    }

    const topProducts = document.querySelector('#top-products');

    topProducts.innerHTML = recommendedProductsList.reduce((accum, product) => accum + renderOneProduct(product, "top-label"), "");
  }

  const renderSaleProducts = () => {
    if (!saleProductsList.length) {
      document.querySelector('#sale-block').remove();
      return;
    }

    if (saleProductsList.length > 12) {
      saleProductsList.splice(12);
    }

    const saleProducts = document.querySelector("#sale-products");

    saleProducts.innerHTML = saleProductsList.reduce((accum, product) => accum + renderOneProduct(product, "sale-label"), "");
  }

  const renderTimerBlock = (num, title) => {
    return `<div class="deadline__time-measure">
              <div class="deadline__numbers">
                <span class="deadline__number">${num[0]}</span>
                <span class="deadline__number">${num[1]}</span>
              </div>
              <p class="deadline__measure-title">${title}</p>
            </div>`
  }

  const renderOneOffer = (offer) => {
    let timerBlock = "";

    if (!offer.hasOwnProperty("time_action")) {

      timerBlock = `<span class="deadline__no-limit">Бессрочно</span>`;
    } else {
      let timerArr = offer.time_action.match(/\d+/g).map((val) => val.length === 1 ? "0" + val : val);

      timerBlock = timerArr.reduce((accum, val, i) => accum + renderTimerBlock(val, ["дней", "часов", "минут"][i]), "")
    }

    return `<div class="one-offer">
              <h4 class="one-offer__name"><a href="${offer.url}">${offer.title}</a></h4>
              <div class="one-offer__image-wrap">
                <img src="${offer.img}" alt="${offer.title}" onerror="this.src='images/no-img-icon.png'">
              </div>
              <div class="one-offer__text-wrap">
                <p class="one-offer__text">${offer.description}</p>
              </div>
              <div class="one-offer-time">
                <span class="one-offer__text">Срок действия</span>
                <div class="deadline">${timerBlock}</div>
              </div>
              <a href="${offer.url}" class="one-offer__about">Подробнее</a>
            </div>`
  }

  const renderOffers = () => {
    if (!PROMOTIONS.length) {
      document.querySelector("#offers-block").remove();
      return;
    }

    if (PROMOTIONS.length > 12) {
      PROMOTIONS.splice(12);
    }

    const offers = document.querySelector("#offers");

    offers.innerHTML = PROMOTIONS.reduce((accum, offer) => accum + renderOneOffer(offer), "");
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

  const init = () => {
    renderTopMenu();
    fillBasketInfo();
    renderNews();
    checkCurrencyOfProduct();
    filterProductsLists();
    renderNewProducts();
    renderTopProducts();
    renderSaleProducts();
    renderOffers();
    renderRightNowProducts();
  }

  document.addEventListener('DOMContentLoaded', init);

  document.querySelector('.burger').addEventListener('click', toggleBurgerMenu);
})(window.document)
