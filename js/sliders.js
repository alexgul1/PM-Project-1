const indicesList = {};
let numberOfDisplayedGoods;
let autoCycle;

const sliderHandler = (event) => {
  const dataSet = event.target.dataset
  if (!dataSet.target) {
    return;
  }

  if ((typeof indicesList[dataSet.target] === "undefined")) {
    indicesList[dataSet.target] = 0;
  }

  if (dataSet.slide === "prev") {
    indicesList[dataSet.target]--;
  } else {
    indicesList[dataSet.target]++;
  }

  if (dataSet.target === "#banners-section") {
    bannerSlideToggle(dataSet);
  } else if (dataSet.target === "#categories") {
    menuSlideToggle(dataSet, 10);
  } else {
    slideToggle(dataSet, numberOfDisplayedGoods);
  }

}

const menuSlideToggle = (dataSet, displayedItems) => {
  const children = document.querySelectorAll(`${dataSet.target} .category`);
  const prevArrow = document.querySelector(`[data-target='${dataSet.target}'][data-slide='prev']`);
  const nextArrow = document.querySelector(`[data-target='${dataSet.target}'][data-slide='next']`);

  if (indicesList[dataSet.target] + displayedItems >= children.length) {
    nextArrow.style.display = "none";
    indicesList[dataSet.target] = children.length - displayedItems;
  } else if (nextArrow.style.display === "none") {
    nextArrow.style.display = "block";
  }

  if (indicesList[dataSet.target] <= 0) {
    prevArrow.style.display = "none";
    indicesList[dataSet.target] = 0;
  } else if (prevArrow.style.display === "none" || !prevArrow.style.display) {
    prevArrow.style.display = "block";
  }

  for (const elem of children) {
    elem.style.display = "none";
  }

  for (let i = 0; i < displayedItems; i++) {
    if (children[indicesList[dataSet.target] + i]) {
      children[indicesList[dataSet.target] + i].style.display = "flex";
    }
  }
}

const dotsHandler = (event) => {
  const dataSet = event.target.dataset;
  if (!dataSet.slideTo) {
    return;
  }

  indicesList[dataSet.target] = +dataSet.slideTo;
  bannerSlideToggle(dataSet);
}

const bannerSlideToggle = (dataSet) => {
  const children = document.querySelector(dataSet.target).children;
  const dots = document.querySelector(".banner_dots").children;

  if (indicesList[dataSet.target] > children.length - 1) {
    indicesList[dataSet.target] = 0;
  }

  if (indicesList[dataSet.target] < 0) {
    indicesList[dataSet.target] = children.length - 1;
  }

  for (const dot of dots) {
    dot.classList.remove("active");
  }

  for (const elem of children) {
    elem.style.display = "none";
  }

  dots[indicesList[dataSet.target]].classList.add('active');
  children[indicesList[dataSet.target]].style.display = "block";
}

const autoBannerToggle = () => {
  autoCycle = setInterval(() => {
    const obj = {target: "#banners-section"};

    if ((typeof indicesList[obj.target] === "undefined")) {
      indicesList[obj.target] = 0;
    }

    indicesList[obj.target]++;

    bannerSlideToggle(obj)
  }, 5000);
}

const slideToggle = (dataSet, displayedItems) => {
  const children = document.querySelector(dataSet.target).children;

  const prevArrows = [...document.querySelectorAll(`[data-target='${dataSet.target}'][data-slide='prev']`)];
  const nextArrows = [...document.querySelectorAll(`[data-target='${dataSet.target}'][data-slide='next']`)];

  if ((typeof indicesList[dataSet.target] === "undefined")) {
    indicesList[dataSet.target] = 0;
  }

  if (indicesList[dataSet.target] + displayedItems >= children.length) {
    for(const arrow of nextArrows) {
      arrow.style.cursor = "default";
    }
    indicesList[dataSet.target] = children.length - displayedItems;
  } else if (nextArrows.some(arrow => arrow.style.cursor === "default")) {
    for(const arrow of nextArrows) {
      arrow.style.cursor = "pointer";
    }
  }

  if (indicesList[dataSet.target] <= 0) {
    for(const arrow of prevArrows) {
      arrow.style.cursor = "default";
    }
    indicesList[dataSet.target] = 0;
  } else if (prevArrows.some(arrow => arrow.style.cursor === "default")) {
    for(const arrow of prevArrows) {
      arrow.style.cursor = "pointer";
    }
  }

  for (const elem of children) {
    elem.style.display = "none";
  }

  for (let i = 0; i < displayedItems; i++) {
    if (children[indicesList[dataSet.target] + i]) {
      children[indicesList[dataSet.target] + i].style.display = "block";
    }
  }
}