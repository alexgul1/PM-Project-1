const renderBanners = () => {
  const banners = document.querySelector("#banners-section");

  banners.innerHTML +=  BANNER.reduce((accum, banner) => {
    return accum +
      `<div class="banner">
        <img src="${banner.img}" alt="banner" class="banner-img" onerror="this.src='images/no-banner-image.png'">
        <a href="${banner.url}" class="more-info-btn">Подробнее</a>
      </div>`
  }, "");

  renderBannerDots();
}

const renderBannerDots = () => {
  const dotsList = document.querySelector('.banner_dots');
  
  dotsList.innerHTML = BANNER.reduce((accum, _, index) => {
    return accum + `<li data-slide-to="${index}" data-target="#banners-section" role="button"></li>`
  }, "");

  dotsList.firstElementChild.classList.add('active');
}