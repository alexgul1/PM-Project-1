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

  filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));

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