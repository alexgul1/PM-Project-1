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