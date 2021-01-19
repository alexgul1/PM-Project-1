const renderOneItemTopMenu = (item) => {
  if(!item.hasOwnProperty("submenu")) {
    return `<a class="menu-item" href="${item.url}">${item.title}</a>`
  }

  item.submenu.sort((a, b) => a.order - b.order);

  const subMenu = item.submenu.reduce((accum, obj) => {
    return accum + `<a class="sub-menu_item" href="${obj.url}">${obj.title}</a>`
  }, "");

  return `<div class="sub-menu">
            <a class="menu-item">${item.title}</a>
            <div class="sub-menu_items">${subMenu}</div>
          </div>`;
}

const renderTopMenu = () => {
  const topMenu = document.querySelector('.menu-items');

  const topMenuList = Object.values(TOP_MENU).sort((a, b) => a.order - b.order);
  topMenuList.splice(9);

  topMenu.innerHTML = topMenuList.reduce((accum, item) => accum + renderOneItemTopMenu(item), "");
}

const renderMenu = () => {
  const menu = document.querySelector('#categories');
  MENU.sort((a, b) => a.order - b.order);

  if(MENU.length > 10) {
    menu.innerHTML = `<div class="category-arrow_left" data-slide="prev" data-target="#categories" role="button">&lt;</div>`
  }

  menu.innerHTML += MENU.reduce((accum, menuItem) => accum + `<a href="${menuItem.url}" class="category">${menuItem.title}</a>`, "")

  if(MENU.length > 10) {
    menu.innerHTML += `<div class="category-arrow_right" data-slide="next" data-target="#categories" role="button">&gt;</div>`
  } else {
    menu.classList.add("no-arrows")
  }
}