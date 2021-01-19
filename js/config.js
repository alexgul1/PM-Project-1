const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
  USD: 27.96,
  RUB: 0.38,
};

const BASKET = {
  elements: 4,
  price: 4000,
};

const TOP_MENU = {
  extra_element: {
    order: 10,
    title: "Лишний элемент",
    url: "extra_element.html"
  },
  solution: {
    order: 7,
    title: "Решение",
    url: "solution.html"
  },
  technical_support: {
    order: 8,
    title: "Техподдержка",
    url: "technical_support.html"
  },
  contacts: {
    order: 9,
    title: "Контакты",
    url: "contacts.html"
  },
  warranty_return: {
    order: 4,
    title: "Гарантия и возврат",
    url: "warranty_return.html"
  },
  cooperation: {
    order: 5,
    title: "Сотрудничество",
    url: "cooperation.html"
  },
  services: {
    order: 6,
    title: "Услуги",
    submenu: [
      {
        order: 2,
        title: 'Услуга 2',
        url: 'service-2.html',
      },
      {
        order: 1,
        title: 'Услуга 1',
        url: 'service-1.html',
      },
      {
        order: 3,
        title: 'Услуга 3',
        url: 'service-3.html',
      }
    ]
  },
  catalog: {
    order: 1,
    title: 'Каталог',
    submenu: [
      {
        order: 1,
        title: 'VOIP оборудование',
        url: 'voip_equipment.html',
      },
      {
        order: 2,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
      }
    ]
  },
  about_company: {
    order: 2,
    title: 'О компании',
    submenu: [
      {
        order: 1,
        title: 'VOIP оборудование',
        url: 'voip_equipment.html',
      },
      {
        order: 2,
        title: 'GSM оборудование',
        url: 'gsm_equipment.html',
      }
    ]
  },
  payment_delivery: {
    order: 3,
    title: 'Оплата и доставка',
    url: 'payment_delivery.html',
  }
};

const MENU = [
  {
    order: 9,
    title: 'Системы записи',
    url: 'recording_system.html'
  },
  {
    order: 10,
    title: 'Сетевое оборудование',
    url: 'network_equipment.html'
  },
  {
    order: 11,
    title: 'IP Телефоны',
    url: 'ip_phones.html'
  },
  {
    order: 12,
    title: 'Wi-Fi оборудование',
    url: 'wifi_equipment.html'
  },
  {
    order: 13,
    title: 'Bluetooth оборудование',
    url: 'bluetooth_equipment.html'
  },
  {
    order: 5,
    title: 'Радио и Dect телефоны',
    url: 'radio_dect_phones.html'
  },
  {
    order: 6,
    title: 'Гарнитуры',
    url: 'headset.html',
  },
  {
    order: 7,
    title: 'Электронные замки',
    url: 'electronic_locks.html'
  },
  {
    order: 8,
    title: 'Домофонные системы',
    url: 'intercom_systems.html'
  },
  {
    order: 1,
    title: 'VOIP ОБОРУДОВАНИЕ',
    url: 'voip_equipment.html',
  },
  {
    order: 2,
    title: 'SKYPE оборудование',
    url: 'skype_equipment.html',
  },
  {
    order: 3,
    title: 'GSM оборудование',
    url: 'gsm_equipment.html',
  },
  {
    order: 4,
    title: 'VIDEO оборудование',
    url: 'video_equipment.html',
  }
];

const NEWS = [
  {
    date: '2021/01/01',
    title: 'Новинка от «Элтекс» - точка доступа WEP',
    description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
    img: 'images/news-icon-2.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2020/12/25',
    title: 'Новинка от компании Grandstream!',
    description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
    img: 'images/news-icon-1.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2021/01/14',
    title: 'WiFi точка доступа от компании Grandstream!',
    description: 'Уже скоро в продаже!',
    img: 'images/news-icon-3.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2021/01/02',
    title: 'Новинка от «Элтекс» - точка доступа WEP №2',
    description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
    img: 'images/news-icon-2.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2020/12/26',
    title: 'Новинка от компании Grandstream! №2',
    description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
    img: 'images/news-icon-1.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2021/01/15',
    title: 'WiFi точка доступа от компании Grandstream! №2',
    description: 'Уже скоро в продаже!',
    img: 'images/news-icon-3.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2020/12/31',
    title: 'Новинка от «Элтекс» - точка доступа WEP №3',
    description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
    img: 'images/news-icon-2.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2020/12/24',
    title: 'Новинка от компании Grandstream! №3',
    description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
    img: 'images/news-icon-1.png',
    url: 'voip_equipment.html',
  },
  {
    date: '2021/01/13',
    title: 'WiFi точка доступа от компании Grandstream! №3',
    description: 'Уже скоро в продаже!',
    img: 'images/news-icon-3.png',
    url: 'voip_equipment.html',
  },
];

const BANNER = [
  {
    order: 3,
    img: 'images/banner-3.jpg',
    url: 'voip_equipment.html',
  },
  {
    order: 4,
    img: 'images/banner-4.jpg',
    url: 'voip_equipment.html',
  },
  {
    order: 5,
    img: 'images/banner-5.jpg',
    url: 'voip_equipment.html',
  },
  {
    order: 6,
    img: 'images/banner-6.jpg',
    url: 'voip_equipment.html',
  },
  {
    order: 1,
    img: 'images/banner-1.png',
    url: 'voip_equipment.html',
  },
  {
    order: 2,
    img: 'images/banner-2.jpg',
    url: 'voip_equipment.html',
  }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
  {
    type: 'new',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '1000',
    oldPrice: '1100',
    currency: 'UAH',
    date: '2021/01/01',
    url: 'new_items/item1.html'
  },
  {
    type: 'recommended',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '300',
    oldPrice: '1100',
    currency: 'RUB',
    date: '2020/12/25',
    url: 'new_items/item.html'
  },
  {
    type: 'sale',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    price: '150',
    oldPrice: '200',
    currency: 'USD',
    date: '2021/01/13',
    url: 'https://same_url/item.html'
  },
];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
  {
    title: 'Название акции',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
    time_action: '1d 2h 20m'
  },
  {
    title: 'Название акции 2',
    description: 'IP телефон Siemens Gigaset C530A IP',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  }
];

const BUYING_RIGHT_NOW = [
  {
    title: 'Название товара',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
  {
    title: 'Название товара 2',
    img: 'https://same_url.jpg',
    url: 'https://same_url/item.html',
  },
]