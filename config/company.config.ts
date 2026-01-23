// Конфигурация компании
// Для создания клона для другой компании - просто измените данные в этом файле

export const companyConfig = {
  // Основная информация
  name: "Автопул",
  slogan: "Торговля автомобилями",
  category: "Автосалон, торговля легковыми автомобилями",

  // Контакты
  phone: "+7 (800) 000-00-00", // TODO: указать реальный номер
  phoneLink: "+78000000000",
  email: "info@avtopul.ru", // TODO: указать реальный email
  website: "avtopul.ru", // TODO: указать реальный сайт

  // Адрес
  address: {
    full: "410033, Саратовская область, г. Саратов, Шелковичная улица, д. 20/28",
    city: "Саратов",
    region: "Саратовская область",
    street: "Шелковичная улица, д. 20/28",
    zipCode: "410033"
  },

  // Координаты на карте (Саратов, Шелковичная 20/28)
  coordinates: {
    latitude: 51.523078,
    longitude: 46.010873,
    zoom: 16.61
  },

  // Рейтинг
  rating: {
    score: 4.8,
    totalReviews: 38,
    totalRatings: 78
  },

  // Логотип
  logo: {
    url: "/avtopul-logo.svg",
    alt: "Автопул"
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
