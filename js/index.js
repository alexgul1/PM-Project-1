const smallBasketCounter = document.querySelector('.basket-goods-counter');
const basketCounter = document.querySelector('.basket-counter');
const basketSum = document.querySelector('.basket-sum');

const toggleBurgerMenu = () => {
  document.querySelector('.menu').classList.toggle('open');
}

const fillBasketInfo = () => {
  smallBasketCounter.innerHTML = BASKET.elements || "0";
  basketCounter.innerHTML = BASKET.elements || "0";
  basketSum.innerHTML = `${BASKET.price || 0} ${CURRENCY}`;
}

const purchaseHandler = (event) => {
  if (!event.target.dataset.price) {
    return;
  }

  const productPrice = +event.target.dataset.price;

  BASKET.elements = (BASKET.elements || 0) + 1;
  BASKET.price = (BASKET.price || 0) + productPrice;
  fillBasketInfo();
}

const init = () => {
  renderTopMenu();
  fillBasketInfo();
  renderMenu();
  renderNews();
  renderBanners();
  checkCurrencyOfProduct();
  filterProductsLists();
  renderNewProducts();
  renderTopProducts();
  renderSaleProducts();
  renderOffers();
  renderRightNowProducts();
  checkProductsCount();
  autoBannerToggle();
}

document.addEventListener('DOMContentLoaded', init);

document.querySelector('.burger').addEventListener('click', toggleBurgerMenu);
document.addEventListener('click', purchaseHandler);

document.addEventListener('click', sliderHandler);
document.addEventListener('click', dotsHandler);
document.querySelector('.banners-section').addEventListener('mouseenter', () => clearInterval(autoCycle));
document.querySelector('.banners-section').addEventListener('mouseleave', autoBannerToggle);
window.addEventListener('resize', checkProductsCount);

