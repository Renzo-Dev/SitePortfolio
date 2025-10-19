# 💼 Portfolio Site — Dan Koshevoy

Современный сайт-портфолио Full Stack разработчика на базе **Nuxt 4**, **Vue 3** и **PostgreSQL**.

---

## 🚀 Быстрый старт

### Локальная разработка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd SitePortfolio

# Установить зависимости
cd frontend/src
npm install

# Настроить переменные окружения
cp .env.example .env
# Отредактировать .env (см. frontend/src/ENV_SETUP.md)

# Запустить dev сервер
npm run dev
```

Приложение будет доступно на `http://localhost:3000`

---

## 🛠️ Технологии

### Frontend

- **Nuxt 4** — современный SSR фреймворк
- **Vue 3** — Composition API + TypeScript
- **SCSS** — стили с CSS modules
- **Lenis** — плавная прокрутка

### Backend

- **Nuxt Server API** (Nitro) — серверные роуты
- **PostgreSQL** — база данных
- **Telegram Bot API** — уведомления о заказах

### Deploy

- **Docker** + **Docker Compose**
- **Nginx** — reverse proxy

---

## 📁 Структура проекта

```
SitePortfolio/
├── frontend/src/
│   ├── app/
│   │   ├── components/        # Vue компоненты
│   │   ├── composables/       # Переиспользуемая логика
│   │   ├── layouts/           # Лейауты приложения
│   │   ├── pages/             # Страницы (index.vue)
│   │   └── assets/styles/     # SCSS стили
│   ├── server/
│   │   └── api/               # API endpoints
│   ├── public/                # Статические файлы
│   ├── nuxt.config.ts         # Конфигурация Nuxt
│   └── package.json
├── services/nginx/            # Nginx конфигурация
├── docker-compose.yml         # Docker setup
└── README.md
```

---

## 🎨 Основные секции сайта

- **Hero** — приветствие + призыв к действию
- **About** — обо мне, навыки, технологии
- **Credentials** — сертификаты и достижения
- **Services** — услуги разработки
- **Portfolio** — портфолио проектов
- **Case Studies** — детальные кейсы
- **Contact** — форма связи (интеграция с Telegram)

---

## ⚙️ Настройка окружения

### 1. Создать `.env` файл

```env
# Telegram Bot (для формы контактов)
NUXT_TELEGRAM_BOT_TOKEN=your_bot_token
NUXT_TELEGRAM_CHAT_ID=your_chat_id

# База данных (опционально)
DATABASE_URL=postgresql://user:password@localhost:5432/portfolio
```

### 2. Настроить Telegram бота

Подробная инструкция: [`frontend/src/ENV_SETUP.md`](frontend/src/ENV_SETUP.md)

---

## 🐳 Docker Deploy

### Production режим (SSR)

```bash
# Собрать и запустить контейнеры
docker-compose up -d

# Проверить логи
docker-compose logs -f frontend

# Остановить
docker-compose down
```

### Development режим

```bash
# С hot reload
docker-compose -f docker-compose.dev.yml up -d
```

---

## 📦 Скрипты

```bash
# Разработка
npm run dev              # Запуск dev сервера (http://localhost:3000)

# Production
npm run build            # Сборка для продакшена
npm run preview          # Предпросмотр production сборки

# Утилиты
npm run generate         # Генерация статического сайта
npm run typecheck        # Проверка типов TypeScript
```

---

## 🎯 Ключевые фичи

- ✅ **SSR** — серверный рендеринг для SEO
- ✅ **Адаптивный дизайн** — mobile-first подход
- ✅ **Плавная прокрутка** — Lenis smooth scroll
- ✅ **Темная тема** — современный UI
- ✅ **Форма обратной связи** — с интеграцией Telegram
- ✅ **Анимации** — CSS transitions + scroll reveal
- ✅ **TypeScript** — типобезопасность

---

## 📞 Контакты

- **Email:** dankoshevoy@gmail.com
- **Telegram:** [@renzo_dev](https://t.me/renzo_pw)
- **GitHub:** [github.com/Renzo-Dev](https://github.com/Renzo-Dev)

---

## 📄 Лицензия

© 2025 Dan Koshevoy. Все права защищены.
