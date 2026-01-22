// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "Трансавтопсков",
  slogan: "Пригон автомобилей",
  category: "Автосалон, пригон автомобилей",

  // Контакты
  phone: "+7 (499) 769-58-21",
  phoneLink: "+74997695821",
  email: "pskov.transavto@mail.ru",
  website: "transavtopskov.ru",

  // Адрес
  address: {
    full: "180025, Псковская область, Псковский район, деревня Борисовичи, ул. Михаила Егорова, д. 2а, кв. 25",
    city: "Псков",
    region: "Псковская область",
    street: "ул. Михаила Егорова, д. 2а, кв. 25",
    zipCode: "180025"
  },

  // Координаты на карте
  coordinates: {
    latitude: 57.819365,
    longitude: 28.334699,
    zoom: 17.13
  },

  // Рейтинг
  rating: {
    score: 4.8,
    totalReviews: 38,
    totalRatings: 78
  },

  // Логотип
  logo: {
    url: "/transavtopskov-logo.svg",
    alt: "Трансавтопсков"
  },

  // График работы
  workingHours: {
    monday: "09:00 - 18:00",
    tuesday: "09:00 - 18:00",
    wednesday: "09:00 - 18:00",
    thursday: "09:00 - 18:00",
    friday: "09:00 - 18:00",
    saturday: "10:00 - 16:00",
    sunday: "Выходной"
  },

  // Дополнительные настройки
  settings: {
    showWhatsApp: false,
    showTelegram: false,
    telegramUsername: "",
    whatsappNumber: ""
  }
};

// Экспорт типа для TypeScript
export type CompanyConfig = typeof companyConfig;
