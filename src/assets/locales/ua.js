const ua = {
  phone: 'Телефон:',
  address: 'Гайдара 50',
  country_code: 'Київ 01033, Україна',
  landing: {
    clients: 'Наші клієнти',
    our_recommendations: 'Нас рекомендують',
    nav: {
      home: 'Додому',
      solutions: 'Наші рішення',
      clients: 'Наші клієнти',
      recommendations: 'Нас рекомендують',
      contact: 'Контакти',
      language: 'Мова',
      languages: {
        ua: 'Укр',
        ru: 'Рус',
        en: 'Eng'
      }
    },
    contact_form: {
      title: 'Напишіть нам',
      description: 'Маєте питання? Напишіть нам.',
      inputs: {
        name: 'Iм\'я *',
        email: 'Email або телефон *',
        message: 'Питання *'
      },
      send: 'Надіслати'
    },
    header: {
      science: {
        title: 'Аналіз даних і комп\'ютерний зір',
        description: 'Наші консалтингові та навчаючі рішення поєднують інновації та досвід, для використання переваг машинного навчання в бізнесі'
      },
      hardware: {
        title: 'Інтеграція обладнання',
        description: 'Автоматизація та інтеграція вашого обладнання в зручну ІТ-систему'
      },
      web: {
        title: 'Мобільна & Web розробка',
        description: 'Розробляємо Веб та мобільні системи будь-якої складності'
      },
      previous: 'Попередній',
      next: 'Далі'
    },
    services: {
      title: 'Наші Послуги',
      vision: {
        title: 'Комп\'ютерний зір',
        description: 'Hi-End системи технічного зору. Потокові системи розпізнавання та відеоаналітика'
      },
      science: {
        title: 'Аналіз даних',
        description: 'Наші консалтингові та навчаючі рішення поєднують інновації  та досвід, для використання переваг машинного навчання в бізнесі'
      },
      hardware: {
        title: 'Hardware',
        description: 'Працюємо з медичним обладнанням. Автоматизуємо та інтегруємо ваше обладнання в зручну IT систему'
      },
      web: {
        title: 'Мобільна & Web розробка',
        description: 'Розробляємо Веб та мобільні системи будь-якої складності'
      }
    },
    solution_categories: {
      all: 'Показати всі',
      science: 'Аналіз даних',
      medical: 'Медицина',
      hardware: 'Обладнання',
      development: 'Мобільна & Web розробка',
      automation: 'ERP & автоматизація'
    },
    solutions: {
      science: {
        img: {
          src: require('@/assets/img/anti-bot.jpg'),
          alt: 'Аналіз даних та розпізнавання зображень'
        },
        category: 'all science',
        title: 'Сервіс по аналізу рекламних об\'яв та детектування роботів для компанії Market Gid',
        description: 'Протидія фроду та небажаним об\'явам. Перевірка кліків та виявлення кліків зробленних роботами'
      },
      cars: {
        img: {
          src: require('@/assets/img/cars.png'),
          alt: 'Комп\'ютерний зір'
        },
        category: 'all science',
        title: 'Служба для аналізу трафіку та виявлення зловмисників',
        description: 'Виявлення порушників руху (світлофор, повороти, розмітки). Розпізнавання номерних знаків дорожніх транспортних засобів'
      },
      lep: {
        img: {
          src: require('@/assets/img/lep.png'),
          alt: 'Розробка програм для обладнання, веб-розробка та комп\'ютерний зір'
        },
        category: 'all science hardware',
        title: 'Моніторинг ліній електропередач з використанням безпілотних літальних апаратів',
        description: 'Ідентифікація фізичних проблем ліній електропередач або колон з використанням аерофотозйомки'
      },
      drone_traveler: {
        img: {
          src: require('@/assets/img/drone-traveler.png'),
          alt: 'Розробка програм для обладнання, веб-розробка та комп\'ютерний зір'
        },
        category: 'all science hardware development',
        title: 'Віртуальні подорожі на дронах в режимі реального часу',
        description: 'Дозвольте кожній людині побувати в екзотичних куточках світу'
      },
      hepatitis: {
        img: {
          src: require('@/assets/img/hepatitis.png'),
          alt: 'Медичний та комп\'ютерний зір'
        },
        category: 'all medical science',
        title: 'Контроль якості візуальної діагностики гепатиту',
        description: 'В середньому 30% неправильних обстежень було виявлено в результаті не дотримання правил перевірки та помилки у використанні медичного обладнання'
      },
      trackandtrace: {
        img: {
          src: require('@/assets/img/trackandtrace.jpg'),
          alt: 'Автоматизація та веб-розробка'
        },
        category: 'all medical automation development',
        title: 'Системи відслідковування',
        description: 'Автоматизація маркування виробника GS1'
      },
      cows: {
        img: {
          src: require('@/assets/img/cows.jpg'),
          alt: 'Автоматизація та веб-розробка'
        },
        category: 'all automation development',
        title: 'Контроль за популяцією худоби',
        description: 'Ідентифікація тварин і контроль своєчасної вакцинації і взяття проб крові'
      },
      receipts: {
        img: {
          src: require('@/assets/img/receipts.jpg'),
          alt: 'Автоматизація та веб-розробка'
        },
        category: 'all automation development',
        title: 'Чекова лотерея',
        description: 'Розіграш з використанням фіскальних чеків'
      },
      agriculture: {
        img: {
          src: require('@/assets/img/agriculture.png'),
          alt: 'Автоматизація та веб-розробка'
        },
        category: 'all automation development',
        title: 'Аукціон з продажу сільськогосподарської продукції без посередників',
        description: 'Покупець може знайти постачальника для себе, свого магазину, ресторану, кафе та інших підприємств, а фермер може продати свою продукцію'
      },
      smartmeter: {
        img: {
          src: require('@/assets/img/smartmeter.png'),
          alt: '«Розумний» облік енергоресурсів'
        },
        category: 'all automation hardware development',
        title: '«Розумний» облік енергоресурсів',
        description: 'Лічильник  з двонаправленим зв\'язком, встановлення на стороні споживача'
      },
      cardio: {
        img: {
          src: require('@/assets/img/cardio.png'),
          alt: 'Медичні, апаратні і наукові дослідження'
        },
        category: 'all medical science hardware',
        title: 'Портативний кардіомонітор',
        description: 'Безперервний моніторинг серцевої діяльності вдома'
      },
      ultrasound: {
        img: {
          src: require('@/assets/img/ultrasound.jpg'),
          alt: 'Медичні, апаратні і наукові дослідження'
        },
        category: 'all medical science hardware',
        title: 'Портативний УЗД апарат',
        description: 'Портативний багатоцільовий сенсор із можливістю підключення до смартфону (iOS або Android) через USB-роз\'єм C типу'
      }
    },
    recommendations: {
      media_system: {
        img: {
          src: require('@/assets/img/media_system.jpg'),
          alt: 'MS Smart group'
        },
        logo: require('@/assets/img/ms-partner-logo-white.png'),
        bailiwick: 'Web розробка',
        title: 'MS Smart group'
      },
      dniprolab: {
        img: {
          src: require('@/assets/img/dniprolab.jpg'),
          alt: 'Медична лабораторія Дніпролаб'
        },
        logo: require('@/assets/img/logo-dniprolab.png'),
        bailiwick: 'Web розробка',
        title: 'Медична лабораторія Дніпролаб'
      }
    }
  }
}

export default ua
