# 🌐 Dan Koshevoy - Portfolio Site

Современный сайт-портфолио разработчика с использованием Nuxt 3, Docker и SQLite.

## 🚀 Быстрый старт

### Предварительные требования
- Docker и Docker Compose
- Node.js 22+ (для локальной разработки)

### Запуск проекта

1. **Клонируйте репозиторий:**
```bash
git clone <repository-url>
cd SitePortfolio
```

2. **Создайте .env файл:**
```bash
cp .env.example .env
# Отредактируйте .env файл с вашими настройками
```

3. **Выберите режим запуска:**

#### 🚀 Production (SSR + API)
```bash
docker-compose up -d
```

#### 🛠️ Development (с hot reload)
```bash
docker-compose -f docker-compose.dev.yml up -d
```

#### 📦 Static (только статика)
```bash
# Сначала соберите проект
cd frontend/src
npm run generate

# Затем запустите статический режим
docker-compose -f docker-compose.static.yml up -d
```

4. **Откройте в браузере:**
```
http://localhost
```

## 🏗️ Архитектура

- **Frontend:** Nuxt 3 + Vue 3 + TypeScript
- **Backend:** Nuxt Server API (Nitro)
- **База данных:** SQLite
- **Веб-сервер:** Nginx
- **Контейнеризация:** Docker

## 📁 Структура проекта

```
SitePortfolio/
├── frontend/                 # Nuxt 3 приложение
│   ├── src/
│   │   ├── app/             # Страницы приложения
│   │   ├── components/      # Vue компоненты
│   │   ├── server/api/      # API роуты
│   │   └── utils/           # Утилиты
│   ├── Dockerfile           # Docker образ для фронтенда
│   └── package.json
├── services/
│   └── nginx/
│       └── nginx.conf       # Конфигурация Nginx
├── data/                    # SQLite база данных
├── docker-compose.yml       # Docker Compose конфигурация
└── README.md
```

## 🛠️ Разработка

### Локальная разработка фронтенда:
```bash
# Запустите Docker контейнеры (без автоматического запуска приложения)
docker-compose up -d

# Войдите в контейнер и запустите вручную
docker exec -it portfolio-frontend bash
npm run dev

# Или запустите локально без Docker
cd frontend/src
npm install
npm run dev
```

### Пересборка Docker образов:
```bash
docker-compose build --no-cache
docker-compose up -d
```

### Просмотр логов:
```bash
docker-compose logs -f frontend
docker-compose logs -f nginx
```

## 🔧 Настройка

### Переменные окружения (.env):
- `TELEGRAM_BOT_TOKEN` - токен Telegram бота для заказов
- `TELEGRAM_CHAT_ID` - ID чата для уведомлений
- `DATABASE_URL` - путь к SQLite базе данных

### Nginx настройки:
- Проксирование на Nuxt приложение
- Gzip сжатие
- Кеширование статических файлов
- Безопасность заголовки

## 📞 Контакты

- **Email:** dankoshevoy@gmail.com
- **Telegram:** [@renzo_dev](https://t.me/renzo_pw)
- **GitHub:** [github.com/renzodev](https://github.com/Renzo-Dev)

---

© 2025 Dan Koshevoy — Разработка с душой и вниманием к деталям.
