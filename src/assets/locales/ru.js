const ru = {
  phone: 'Телефон:',
  address: 'Гайдара 50',
  country_code: 'Киев 01033, Украина',
  landing: {
    clients: 'Наши клиенты',
    our_recommendations: 'Нас рекомендуют',
    nav: {
      home: 'Домой',
      solutions: 'Решения',
      clients: 'Наши клиенты',
      recommendations: 'Нас рекомендуют',
      contact: ' Контакты',
      language: 'Язык',
      languages: {
        ua: 'Укр',
        ru: 'Рус',
        en: 'Eng'
      }
    },
    contact_form: {
      title: 'Напишите нам',
      description: 'Появились вопросы? Напишите нам.',
      inputs: {
        name: 'Имя *',
        email: 'Email или телефон *',
        message: 'Вопрос *'
      },
      send: 'Отправить'
    },
    header: {
      science: {
        title: 'Анализ данных',
        description: 'Наши консалтинговые и обучающие решения сочетают инновации и опыт для использования преимуществ машинного обучения в бизнесе'
      },
      hardware: {
        title: 'Интеграция оборудования',
        description: 'Автоматизация и интеграция вашего оборудования в подходящую IT-систему'
      },
      web: {
        title: 'Мобильная & Web разработка',
        description: 'Разрабатываем Веб и Мобильные системы любой сложности'
      },
      previous: 'Предыдущий',
      next: 'Следующий'
    },
    services: {
      title: 'Наши услуги',
      vision: {
        title: 'Компьютерное зрение',
        description: 'Hi-End системы технического зрения. Потоковые системы распознавания и видеоаналитика'
      },
      science: {
        title: 'Анализ данных',
        description: 'Наши консалтинговые и обучающие решения сочетают инновации и опыт для использования преимуществ машинного обучения в бизнесе'
      },
      hardware: {
        title: 'Hardware',
        description: 'Работаем с медицинским  оборудованием. Автоматизируем и интегрируем ваше оборудование в удобную IT систему'
      },
      web: {
        title: 'Мобильная & Web разработка',
        description: 'Разрабатываем Веб и Мобильные системы любой сложности'
      }
    },
    solution_categories: {
      all: 'Показать все',
      science: 'Анализ данных',
      medical: 'Медицина',
      hardware: 'Оборудование',
      development: 'Мобильная & Web разработка',
      automation: 'ERP & автоматизация'
    },
    solutions: {
      science: {
        img: {
          src: require('@/assets/img/anti-bot.jpg'),
          alt: 'Анализ данных и распознавание изображений'
        },
        category: 'all science',
        title: 'Определения роботов по заголовкам http запросов',
        description: 'Machine Learning для определения роботов по заголовкам http запросов для предотвращения фрода'
      },
      duplicate: {
        img: {
          src: require('@/assets/img/duplicate.png'),
          alt: 'Анализ данных и распознавание изображений'
        },
        category: 'all science',
        title: 'Определение дубликатов картинок в рекламных объявлениях для MarketGid',
        description: 'Анализ схожих изображений позволяет не показывать одни и те же баннера на одной странице'
      },
      duplication: {
        img: {
          src: require('@/assets/img/duplicate-some.png'),
          alt: 'Анализ данных и распознавание изображений'
        },
        category: 'all science',
        title: 'Система индексирования и поиска похожих изображений',
        description: 'Индексирование неполных дубликатов, а только похожих с помощью анализа ключевых точек и 3хмерных гистограмм'
      },
      cars: {
        img: {
          src: require('@/assets/img/cars.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Служба для анализа трафика и обнаружения злоумышленников',
        description: 'Идентификация нарушителей трафика (светофоры, повороты, разметки). Распознавание номера дорожных транспортных средств'
      },
      traffic: {
        img: {
          src: require('@/assets/img/way.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Подсчет трафика и рассчет загруженности дорог',
        description: 'Расчеты с помощью веб камер'
      },
      employees: {
        img: {
          src: require('@/assets/img/cars-nombers.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Распознавание машин сотрудников на парковках',
        description: 'С помощью обучения каскадов Хаара, SVM и HOG десткрипторов'
      },
      hepatitis: {
        img: {
          src: require('@/assets/img/hepatitis.png'),
          alt: 'Медицинское и компьютерное зрение'
        },
        category: 'all medical science',
        title: 'Контроль качества медицинской диагностики ',
        description: 'Благодаря обработке изображений и машинному обучению улучшаем диагностику пациента на 30% лучше чем врачи'
      },
      trackandtrace: {
        img: {
          src: require('@/assets/img/trackandtrace.jpg'),
          alt: 'Автоматизация и веб-разработка'
        },
        category: 'all medical automation development',
        title: 'Системы прослеживания',
        description: 'Автоматизация маркировки производителя GS1'
      },
      cows: {
        img: {
          src: require('@/assets/img/cows.jpg'),
          alt: 'Автоматизация и веб-разработка'
        },
        category: 'all automation development',
        title: 'Контроль за популяцией крупного рогатого скота',
        description: 'Идентификация животных и контроль своевременной вакцинации и взятия проб крови'
      },
      receipts: {
        img: {
          src: require('@/assets/img/receipts.jpg'),
          alt: 'Автоматизация и веб-разработка'
        },
        category: 'all automation development',
        title: 'Чековая лотерея (розыгрыш с использованием фискальных чеков)',
        description: 'Распознавание чеков для чековой лотереи'
      },
      agriculture: {
        img: {
          src: require('@/assets/img/agriculture.png'),
          alt: 'Автоматизация и веб-разработка'
        },
        category: 'all automation development',
        title: 'Аукцион по продаже сельскохозяйственной продукции без посредников',
        description: 'Покупатель может найти поставщика для себя, своего магазина, ресторана, кафе и других предприятий, а фермер может продавать собственные продукты'
      },
      smartmeter: {
        img: {
          src: require('@/assets/img/smartmeter.png'),
          alt: '«Умный» учет энергоресурсов'
        },
        category: 'all automation hardware development',
        title: '«Умный» учет энергоресурсов',
        description: 'Счетчик с двунаправленной связью, установка на стороне потребителя'
      },
      cardio: {
        img: {
          src: require('@/assets/img/cardio.png'),
          alt: 'Медицинские, аппаратные и научные исследования'
        },
        category: 'all medical science hardware',
        title: 'Портативный кардиомонитор',
        description: 'Непрерывный мониторинг сердечной деятельности у себя дома'
      },
      ultrasound: {
        img: {
          src: require('@/assets/img/ultrasound.jpg'),
          alt: 'Медицинские, аппаратные и научные исследования'
        },
        category: 'all medical science hardware',
        title: 'Портативный УЗИ аппарат',
        description: 'Портативный многофункциональный датчик с возможностью подключения к смартфону (iOS или Android) с помощью разъема типа USB'
      },
      visualeffect: {
        img: {
          src: require('@/assets/img/long-exposure.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Микросервис по эммулиции эффекта длительной выдержки по видео ',
        description: 'Эммулиция некоторых  эффектов камеры и Photoshop'
      },
      gaussian: {
        img: {
          src: require('@/assets/img/number.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Распознавание сильно зашумленного текста',
        description: 'Распознавание сильно зашумленных гауссовым шумом цифр с помощью инструментов контурного анализа'
      },
      exchange: {
        img: {
          src: require('@/assets/img/forecast_example.png'),
          alt: 'Компьютерное зрение'
        },
        category: 'all science',
        title: 'Прогнозирование колебаний валютного курса',
        description: 'Прогнозирование валютных колебаний с помощью Prophet'
      }
    },
    recommendations: {
      media_system: {
        img: {
          src: require('@/assets/img/media_system.jpg'),
          alt: 'MS Smart group'
        },
        bailiwick: 'Web разработка',
        logo: require('@/assets/img/ms-partner-logo-white.png'),
        title: 'MS Smart group'
      },
      dniprolab: {
        img: {
          src: require('@/assets/img/dniprolab.jpg'),
          alt: 'Медицинская лаборатория Днепролаб'
        },
        logo: require('@/assets/img/logo-dniprolab.png'),
        bailiwick: 'Web разработка',
        title: 'Медицинская лаборатория Днепролаб'
      },
      mgid: {
        img: {
          src: require('@/assets/img/mgid-letter.jpg'),
          alt: 'Market Gid'
        },
        logo: require('@/assets/img/mgid-logo.png'),
        bailiwick: 'Машинное обучение',
        title: 'Market Gid'
      }
    }
  }
}

export default ru
