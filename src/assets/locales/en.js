const en = {
  phone: 'Phone:',
  address: '50 Gaydara St. 2-nd porch',
  country_code: 'Kiev 01033 Ukraine',
  landing: {
    clients: 'Our Clients',
    our_recommendations: 'Our Recommendations',
    nav: {
      home: 'Home',
      solutions: 'Solutions',
      clients: 'Clients',
      recommendations: 'Recommendations',
      contact: 'Contact us',
      languages: {
        ua: 'Укр',
        ru: 'Рус',
        en: 'Eng'
      }
    },
    contact_form: {
      title: 'Contact us',
      description: 'Have any questions? Send us a message.',
      inputs: {
        name: 'Name *',
        email: 'Email or phone number *',
        message: 'Message *'
      },
      send: 'Send'
    },
    header: {
      science: {
        title: 'Data analysis and Hi-end computer vision',
        description: 'Our consultancy and training solutions combine innovation and experience to unlock the business benefits of machine learning'
      },
      hardware: {
        title: 'Hardware integrations',
        description: 'Automate and integrate your equipment into a convenient IT system'
      },
      web: {
        title: 'Mobile & Web',
        description: 'We can build any Web and Mobile application for you'
      },
      previous: 'Previous',
      next: 'Next'
    },
    services: {
      title: 'Our Services',
      vision: {
        title: 'Hi-end computer vision solutions',
        description: 'Recognition systems and Video-analytics'
      },
      science: {
        title: 'Data analysis',
        description: 'Our consultancy and training solutions combine innovation and experience to unlock the business benefits of machine learning'
      },
      hardware: {
        title: 'Hardware',
        description: 'We develop IT systems for medical equipment. Automate and integrate your equipment into a convenient IT system'
      },
      web: {
        title: 'Mobile & Web development',
        description: 'We can build any Web and Mobile application for you'
      }
    },
    solution_categories: {
      all: 'Show all',
      science: 'Data Science',
      medical: 'Medical',
      hardware: 'Hardware',
      development: 'Mobile & Web',
      automation: 'ERP & Automation'
    },
    solutions: {
      science: {
        img: {
          src: require('@/assets/img/anti-bot.jpg'),
          alt: 'Data analysis and image recognition'
        },
        category: 'all science',
        title: 'Bot detection by http request headers',
        description: 'Machine Learning to bot detection by http request headers to prevent fraud'
      },
      duplicate: {
        img: {
          src: require('@/assets/img/duplicate.png'),
          alt: 'Data analysis and image recognition'
        },
        category: 'all science',
        title: 'Duplicate images in advertisements detection for MarketGid',
        description: 'Image similarity analysis allows you to hide identic banners on the page'
      },
      duplication: {
        img: {
          src: require('@/assets/img/duplicate-some.png'),
          alt: 'Data analysis and image recognition'
        },
        category: 'all science',
        title: 'Image indexing and search engine',
        description: 'Indexing images using SURF and 3-dimensional histograms'
      },
      cars: {
        img: {
          src: require('@/assets/img/cars.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Service for the analysis of traffic and detection of intruders',
        description: 'Identification of traffic violators (traffic lights, turns, violators markup). Recognition of the road vehicles plates number'
      },
      traffic: {
        img: {
          src: require('@/assets/img/way.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Traffic congestion calculating',
        description: 'Calculation using computer vision and web cameras'
      },
      employees: {
        img: {
          src: require('@/assets/img/cars-nombers.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Recognition of the employees cars on parking lots',
        description: 'Using Haar cascades, SVM and HOG descriptors'
      },
      hepatitis: {
        img: {
          src: require('@/assets/img/hepatitis.png'),
          alt: 'Medical and computer vision'
        },
        category: 'all medical science',
        title: 'Medical diagnostics quality control',
        description: 'Using image processing and machine learning we improve patient diagnosis up to 30% better than physicians'
      },
      trackandtrace: {
        img: {
          src: require('@/assets/img/trackandtrace.jpg'),
          alt: 'Automation and Web development'
        },
        category: 'all medical automation development',
        title: 'Track and trace systems',
        description: 'GS1 Based manufacturer marking automation'
      },
      cows: {
        img: {
          src: require('@/assets/img/cows.jpg'),
          alt: 'Automation and Web development'
        },
        title: 'Agritracking systems',
        category: 'all automation development',
        description: 'Identification of animals and control of timely vaccination and blood sampling'
      },
      receipts: {
        img: {
          src: require('@/assets/img/receipts.jpg'),
          alt: 'Automation and Web development'
        },
        category: 'all automation development',
        title: 'Receipt lottery (competition nased on fiscal checks)',
        description: 'Lottery receipts recognition'
      },
      agriculture: {
        img: {
          src: require('@/assets/img/agriculture.png'),
          alt: 'Automation and Web development'
        },
        category: 'all automation development',
        title: 'Auction for sales of agricultural products without intermediaries',
        description: 'The buyer can find a supplier for himself, his shop, restaurant, cafe and other enterprises, and the farmer is able to sell his own products'
      },
      smartmeter: {
        img: {
          src: require('@/assets/img/smartmeter.png'),
          alt: 'The “Smart” accounting of energy resources'
        },
        category: 'all automation hardware development',
        title: 'The “Smart” accounting of energy resources',
        description: 'Accounting devices with bi-directional communication installed on the consumer side'
      },
      cardio: {
        img: {
          src: require('@/assets/img/cardio.png'),
          alt: 'Medical, hardware and data science'
        },
        category: 'all medical science hardware',
        title: 'Portable Cardiomnitor',
        description: 'Continuous monitoring of cardiac activity at home'
      },
      ultrasound: {
        img: {
          src: require('@/assets/img/ultrasound.jpg'),
          alt: 'Medical, hardware and data science'
        },
        category: 'all medical science hardware',
        title: 'Portable ultrasound machine',
        description: 'Portable multi-purpose sensor with the ability to connect to a smartphone (iOS or Android) by USB type C connector'
      },
      visualeffect: {
        img: {
          src: require('@/assets/img/long-exposure.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Microservice for long exposure visual effect by the video',
        description: 'Some camera and Photoshop effects emulation'
      },
      gaussian: {
        img: {
          src: require('@/assets/img/number.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Highly noised text recognition',
        description: 'Highly noised(Gaussian noise) text recognition using contour analysis'
      },
      exchange: {
        img: {
          src: require('@/assets/img/forecast_example.png'),
          alt: 'Computer vision'
        },
        category: 'all science',
        title: 'Exchange rate forecasting',
        description: 'Currency fluctuations forecasting with Prophet'
      }
    },
    recommendations: {
      media_system: {
        img: {
          src: require('@/assets/img/media_system.jpg'),
          alt: 'MS Smart group'
        },
        logo: require('@/assets/img/ms-partner-logo-white.png'),
        title: 'MS Smart group',
        bailiwick: 'Web development'
      },
      dniprolab: {
        img: {
          src: require('@/assets/img/dniprolab.jpg'),
          alt: 'Dneprolab medical laboratories'
        },
        logo: require('@/assets/img/logo-dniprolab.png'),
        title: 'Dneprolab medical laboratories',
        bailiwick: 'Web development'
      },
      mgid: {
        img: {
          src: require('@/assets/img/mgid-letter.jpg'),
          alt: 'Market Gid'
        },
        logo: require('@/assets/img/mgid-logo-long.png'),
        bailiwick: 'Machine learning',
        title: 'Market Gid'
      }
    }
  }
}

export default en
