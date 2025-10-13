// Централизованное хранилище контента для всех секций
// Легко редактировать тексты, не трогая компоненты

export const navigationLinks = [
  { label: 'Портфолио', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'Процесс', href: '#process' },
  { label: 'Навыки', href: '#skills' },
  { label: 'Контакты', href: '#contact' }
] as const

export const heroContent = {
  eyebrow: 'Fullstack · Laravel · Nuxt 4',
  title: 'Создаю цифровые продукты, которые масштабируются без боли',
  subtitle:
    'Проектирую архитектуру, пишу код и собираю DevOps-контур. MVP за 4–6 недель, поддержка и автоматизация сразу из коробки.',
  primaryCta: { label: 'Посмотреть проекты', href: '#cases' },
  secondaryCta: { label: 'Получить оценку', href: '#contact' },
  tertiaryCta: { label: 'Блог и инсайты', href: '#insights' },
  metrics: [
    { label: 'Запуск MVP', value: '4–6 недель', detail: 'без техдолга' },
    { label: 'DevOps', value: 'CI/CD + мониторинг', detail: 'по умолчанию' },
    { label: 'SLA', value: '30 дней', detail: 'после релиза' }
  ]
} as const

export const aboutContent = {
  description:
    'Я — Дан Кошевой, fullstack-разработчик с опытом 3+ года. Люблю системную работу: от discovery до поддерживаемой инфраструктуры. Помогаю бизнесу запускать продукты без разрыва между командами.',
  strengths: [
    'Системный подход и прозрачные процессы',
    'Фокус на перформансе и метриках',
    'Fullstack + DevOps c первого дня'
  ],
  technologies: [
    'Vue 3',
    'Nuxt 4',
    'Tailwind CSS',
    'TypeScript',
    'Pinia',
    'i18n',
    'Docker',
    'Redis',
    'MySQL',
    'Nginx'
  ]
} as const

export const servicesContent = [
  {
    key: 'turnkey',
    title: 'Разработка под ключ',
    summary:
      'Разрабатываю сайты, SPA и SaaS: от идеи и прототипа до деплоя и поддержки.',
    bullets: [
      'Discovery, UX, визуальные концепты',
      'Фуллстек разработка — frontend + backend',
      'CI/CD, мониторинг, документация',
      'Поддержка после запуска'
    ]
  },
  {
    key: 'backend',
    title: 'Backend и интеграции',
    summary:
      'API, авторизация, интеграции с внутренними системами, миграции данных.',
    bullets: [
      'Laravel, PHP, PostgreSQL',
      'Очереди, кэширование, вебхуки',
      'RBAC, аудиты и безопасность',
      'Подключение сторонних сервисов'
    ]
  },
  {
    key: 'frontend',
    title: 'Frontend-разработка',
    summary:
      'Современные интерфейсы на Vue 3 / Nuxt 4 с высокой производительностью и SEO.',
    bullets: [
      'UI-архитектура, дизайн-система',
      'SSR, SSG, оптимизация lighthouse',
      'Сложные формы, dashboards',
      'Анимации и микровзаимодействия'
    ]
  },
  {
    key: 'ops',
    title: 'DevOps / Docker / Nginx',
    summary:
      'Собираю окружение, пайплайны и мониторинг для стабильной работы продукта.',
    bullets: [
      'Docker / Compose, GitOps',
      'CI/CD на GitHub Actions',
      'Ведение логов, алерты, SLA',
      'Тюнинг Nginx, балансировка'
    ]
  }
] as const

export const casesContent = [
  {
    name: 'HouseSeeker',
    role: 'Архитектура · Backend · DevOps',
    stack: ['Laravel', 'Node.js', 'Docker', 'Nginx'],
    context:
      'Платформа мониторинга аренды с высокой нагрузкой и микросервисным ландшафтом.',
    solution:
      'Спроектировал микросервисную структуру, настроил очереди, мониторинг и единый API.',
    result: 'Уведомления об объявлениях приходят за минуты, система держит рост без деградации.'
  },
  {
    name: 'Kremlin Neurology',
    role: 'Fullstack · Автоматизация процессов',
    stack: ['Vue', 'SCSS', 'PHP', 'Docker'],
    context: 'Медицинской платформе требовались автоматизация, защита данных и скорость.',
    solution:
      'Перепроектировал frontend, обновил серверную логику, внедрил пайплайны и мониторинг.',
    result: 'Платформа выдерживает пиковую нагрузку, врачи работают без ручной рутины.'
  },
  {
    name: 'Marketplace Platform',
    role: 'Fullstack · Integrations Lead',
    stack: ['Vue 3', 'TypeScript', 'Laravel', 'RabbitMQ'],
    context: 'Маркетплейс страдал от долгих релизов и нестабильных интеграций.',
    solution:
      'Переписал frontend на Composition API, внедрил очереди и фоновые задачи.',
    result: 'Время релиза сократилось с 14 до 5 дней, SLA вырос до 99.96%.'
  }
] as const

export const processContent = [
  {
    title: 'Диагностика',
    caption: '1–3 дня',
    description: 'Погружаюсь в бизнес-контекст, фиксирую требования, формирую шорт-лист решений.'
  },
  {
    title: 'Проектирование',
    caption: '1 неделя',
    description: 'Формирую архитектуру, схему данных, CJM, дизайн-систему, MVP backlog.'
  },
  {
    title: 'Разработка',
    caption: '2–4 недели',
    description: 'Итеративно закрываю backend + frontend, подключаю DevOps, показываю демо.'
  },
  {
    title: 'Запуск и поддержка',
    caption: 'SLA 30 дней',
    description: 'Тесты, деплой, мониторинг. Обновления и улучшения по договорённости.'
  }
] as const

export const skillsContent = {
  areas: [
    {
      title: 'Frontend',
      items: [
        'Nuxt 4, Vue 3, Composition API',
        'TypeScript, Pinia, VueUse',
        'Tailwind CSS, SCSS, дизайн системы',
        'SSR, SEO, перформанс'
      ]
    },
    {
      title: 'Backend',
      items: [
        'Laravel, PHP, PostgreSQL',
        'REST / GraphQL, gRPC',
        'Redis, RabbitMQ, очереди',
        'Тестирование, документация'
      ]
    },
    {
      title: 'DevOps',
      items: [
        'Docker, Docker Compose',
        'CI/CD GitHub Actions, GitLab',
        'Nginx, Traefik, SSL',
        'Monitoring, алерты, Observability'
      ]
    }
  ]
} as const

export const insightsContent = [
  {
    title: 'Как ускорил API в 3 раза с помощью Redis',
    summary:
      'Выделил слой кеширования, настроил TTL и сауны для данных. Ответ сократился с 900 мс до 280 мс.'
  },
  {
    title: 'Миграция с Vue 2 на Vue 3 без простоя',
    summary:
      'Выделил критичные модули, перевёл на Composition API, обеспечил плавный релиз без «флага».'
  },
  {
    title: 'CI/CD пайплайн GitLab → Docker → Nginx',
    summary:
      'Автоматизировал сборку, доставку и мониторинг. Команда перестала деплоить вручную.'
  }
] as const

export const testimonialsContent = [
  {
    quote:
      'Без переработки фронта и инфраструктуры мы бы не подняли цифровые сервисы клиники. Дан выстроил всё, что нужно.',
    author: 'Head of Digital',
    company: 'Kremlin Neurology'
  },
  {
    quote:
      'Автоматизация HouseSeeker невозможна без архитектуры Дана — уведомления теперь уходят за минуты.',
    author: 'Product Owner',
    company: 'HouseSeeker'
  }
] as const

export const contactContent = {
  channels: [
    {
      type: 'Email',
      value: 'dankoshevoy@gmail.com',
      href: 'mailto:dankoshevoy@gmail.com'
    },
    {
      type: 'Telegram',
      value: '@renzo_dev',
      href: 'https://t.me/renzo_pw'
    },
    {
      type: 'GitHub',
      value: 'github.com/Renzo-Dev',
      href: 'https://github.com/Renzo-Dev'
    }
  ],
  note:
    'Собираю требования и отправляю PDF с кейсами в течение 24 часов. Предпочитаю Telegram для быстрых обсуждений.'
} as const


