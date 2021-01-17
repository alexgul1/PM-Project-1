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

const renderMenu = () => {
  const menu = document.querySelector('.categories');
  if(MENU.length > 10) {
    menu.innerHTML = `<div class="category-arrow_left"><span>&lt;</span></div>`
  }

  menu.innerHTML += MENU.reduce((accum, menuItem) => accum + `<a href="${menuItem.url}" class="category">${menuItem.title}</a>`, "")

  if(MENU.length > 10) {
    menu.innerHTML += `<div class="category-arrow_right" data-target="#categoies"><span>&gt;</span></div>`
  }
}