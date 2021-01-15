((document) => {

  const smallBasketCounter = document.querySelector('.basket-goods-counter');
  const basketCounter = document.querySelector('.basket-counter');
  const basketSum = document.querySelector('.basket-sum');

  const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];


  const randomNumber = (max) => Math.floor(Math.random() * (max + 1));

  const toggleBurgerMenu = () => {
    document.querySelector('.menu').classList.toggle('open');
  }

  const renderTopMenu = () => {
    const topMenu = document.querySelector('.menu-items');
    let count = 0;
    for (let key of Object.keys(TOP_MENU)) {
      if(count >= 9) return;

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

    if(!filteredNews.length) {
      newsList.innerHTML = "<h2>Мы готовим для вас сумасшедшие новости :D</h2>";
      document.querySelector('.all-news-link').remove();
      return;
    }

    if(filteredNews.length > 3) {
      while (filteredNews.length !== 3) {
        filteredNews.splice(randomNumber(filteredNews.length - 1), 1);
      }
    }

    newsList.innerHTML = filteredNews.reduce((accum, newsObj) => accum + markupOneNews(newsObj), "");
  }

  const markupOneNews = (newsObj) => {
    const newsDate = new Date(newsObj.date);

    return `<li class="news-preview">
              <a href="${newsObj.url}">
                <img class="news-img" src="${newsObj.img}" onerror="this.src='images/no-img-icon.png'" alt="${newsObj.title}">
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

  const init = () => {
    renderTopMenu();
    fillBasketInfo();
    renderNews()
  }

  document.addEventListener('DOMContentLoaded', init);

  document.querySelector('.burger').addEventListener('click', toggleBurgerMenu);
})(window.document)