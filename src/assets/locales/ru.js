const ru = {
  phone: 'Телефон:',
  address: 'Гайдара 50',
  country_code: 'Киев 01033, Украина',
  landing: {
    clients: 'Наши клиенты',
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
        description: 'Наши консалтинговые и обучающие решения сочетают инновации и опыт, для использования преимуществ машинного обучения в бизнесе'
      },
      hardware: {
        title: 'Интеграция оборудования',
        description: 'Автоматизация и интеграция вашего оборудования в подходящую IT-систему'
      },
      web: {
        title: 'Мобильная разработка & Web',
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
        description: 'Наши консалтинговые и обучающие решения сочетают инновации и опыт, для использования преимуществ машинного обучения в бизнесе'
      },
      hardware: {
        title: 'Hardware',
        description: 'Работаем с медицинским  оборудованием. Автоматизируем и интегрируем ваше оборудование в удобную IT систему'
      },
      web: {
        title: 'Мобильная разработка & Web',
        description: 'Разрабатываем Веб и Мобильные системы любой сложности'
      }
    },
    solution_categories: {
      all: 'Показать все',
      science: 'Анализ данных',
      medical: 'Медицина',
      hardware: 'Оборудование',
      development: 'Мобильная разработка & Web',
      automation: 'ERP & автоматизация'
    },
    solutions: {
      science: {
        img: {
          src: require('@/assets/img/anti-bot.jpg'),
          alt: 'Анализ данных и распознавание изображений'
        },
        category: 'all science',
        title: 'Сервис по анализу рекламных объявлений и детектирование роботов для компании Market Gid',
        description: 'Противодействие фрода и нежелательных объявлений. Проверка кликов и выявление кликов сделанных роботами'
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
      lep: {
        img: {
          src: require('@/assets/img/lep.png'),
          alt: 'Разработка программ для оборудования, веб-разработка и компьютерное зрение'
        },
        category: 'all science hardware',
        title: 'Мониторинг линий электропередач с использованием беспилотных летательных аппаратов',
        description: 'Идентификация физических проблем линий электропередач или колонн с использованием аэрофотосъемки'
      },
      drone_traveler: {
        img: {
          src: require('@/assets/img/drone-traveler.png'),
          alt: 'Разработка программ для оборудования, веб-разработка и компьютерное зрение'
        },
        category: 'all science hardware development',
        title: 'Виртуальное путешествие на дронах в режиме реального времени',
        description: 'Позвольте каждому человеку побывать в экзотических уголках мира'
      },
      hepatitis: {
        img: {
          src: require('@/assets/img/hepatitis.png'),
          alt: 'Медицинское и компьютерное зрение'
        },
        category: 'all medical science',
        title: 'Контроль качества визуальной диагностики гепатита',
        description: 'В среднем 30% неправильных обследований были обнаружены в результате несоблюдения правил осмотра и ошибки в использовании медицинского оборудования'
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
        title: 'Чековая лотерея',
        description: 'Розыгрыш с использованием фискальных чеков'
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
      }
    },
    recommendations: {
      title: 'Нас рекомендуют',
      media_system: {
        img: {
          alt: 'MS Smart group'
        },
        title: 'MS Smart group'
      },
      dniprolab: {
        img: {
          alt: 'Медицинская лаборатория Днепролаб'
        },
        title: 'Медицинская лаборатория Днепролаб'
      }
    }
  }
}

export default ru
