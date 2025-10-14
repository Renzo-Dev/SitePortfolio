# 🚀 Инструкция по запуску портфолио

## 📋 Быстрый старт

### 1. Установка зависимостей

```bash
cd frontend/src
npm install
```

### 2. Настройка Telegram Bot (опционально)

Для работы формы обратной связи нужно настроить Telegram бота:

#### Создание бота:

1. Откройте [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям (имя бота, username)
4. Скопируйте токен бота (выглядит так: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

#### Получение Chat ID:

1. Откройте [@userinfobot](https://t.me/userinfobot)
2. Бот отправит вам ваш ID (например: `123456789`)

#### Настройка переменных:

Создайте файл `.env` в папке `frontend/src`:

```env
TELEGRAM_BOT_TOKEN=ваш_токен_бота
TELEGRAM_CHAT_ID=ваш_chat_id
```

**Или** настройте через переменные окружения при деплое.

### 3. Запуск проекта

```bash
# Development режим
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

## 🏗 Production сборка

```bash
# Сборка проекта
npm run build

# Запуск production версии
npm run preview
```

## 🎨 Что реализовано

### ✅ UI компоненты

- Button (3 варианта: primary, secondary, ghost)
- Badge (для технологий)
- Input/Textarea (с валидацией)

### ✅ Layout

- Header (sticky с backdrop-blur)
- Footer (3-колоночный)
- ScrollToTop (с плавной анимацией)

### ✅ Секции

- **Hero** — с particles фоном и GSAP анимациями
- **About** — информация о разработчике
- **Services** — услуги (6 карточек)
- **Portfolio** — проекты с magnetic hover
- **Case Studies** — кейсы с count-up метриками
- **Testimonials** — отзывы
- **Contact** — форма + Telegram интеграция

### ✅ Анимации

- GSAP ScrollTrigger для всех секций
- Lenis smooth scroll
- Magnetic buttons (VueUse)
- Count-up для чисел
- Stagger эффекты
- Parallax

### ✅ Адаптивность

- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (1024px+)

### ✅ Accessibility

- WCAG AA контраст
- Keyboard navigation
- Focus states
- Prefers-reduced-motion

## 📁 Структура компонентов

```
components/
├── ui/                    # Переиспользуемые UI
│   ├── Button.vue        # Кнопки
│   ├── Badge.vue         # Бейджи
│   └── Input.vue         # Поля ввода
├── layout/                # Layout компоненты
│   ├── Header.vue        # Шапка
│   ├── Footer.vue        # Подвал
│   └── ScrollToTop.vue   # Кнопка вверх
├── home/                  # Секции главной
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── ServicesSection.vue
│   ├── PortfolioSection.vue
│   ├── CaseStudiesSection.vue
│   ├── TestimonialsSection.vue
│   └── ContactSection.vue
└── portfolio/
    └── ProjectCard.vue    # Карточка проекта
```

## 🎯 Composables (SOLID принципы)

```
composables/
├── useSmoothScroll.ts    # Lenis smooth scroll
├── useScrollReveal.ts    # Scroll анимации
├── useMagnetic.ts        # Magnetic эффект
└── useCountUp.ts         # Count-up числа
```

Каждый composable отвечает за **одну задачу** (Single Responsibility).

## 🎨 SCSS архитектура

```
assets/styles/
├── main.scss           # Глобальные стили + reset
└── variables.scss      # Переменные + миксины
```

**Переменные:**

- Цвета (монохром)
- Typography scale
- Spacing scale
- Breakpoints
- Z-index
- Transitions

**Миксины:**

- @include container
- @include flex-center
- @include glass
- @include mobile/tablet/desktop

## 🔧 Кастомизация

### Изменение цветов:

Откройте `assets/styles/variables.scss`:

```scss
$bg-primary: #0a0a0a; // Основной фон
$text-primary: #ffffff; // Основной текст
$accent: #ffffff; // Акцентный цвет
```

### Изменение контента:

- **Проекты:** `components/home/PortfolioSection.vue`
- **Услуги:** `components/home/ServicesSection.vue`
- **Кейсы:** `components/home/CaseStudiesSection.vue`
- **Отзывы:** `components/home/TestimonialsSection.vue`

### Изменение изображений:

Используются Unsplash URL — замените на свои:

- Hero/About: `components/home/AboutSection.vue`
- Проекты: `components/home/PortfolioSection.vue`

## 🐛 Troubleshooting

### Ошибка "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Particles не работают

Убедитесь что установлены:

```bash
npm install @tsparticles/vue3 @tsparticles/slim
```

### Анимации не плавные

Проверьте что GSAP установлен:

```bash
npm install gsap
```

### Telegram не отправляет сообщения

1. Проверьте `.env` файл
2. Убедитесь что бот запущен (отправьте `/start`)
3. Проверьте правильность токена и chat_id

## 📦 Деплой на VPS

### 1. Подготовка сервера

```bash
# Установите Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установите PM2
sudo npm install -g pm2
```

### 2. Клонирование и сборка

```bash
git clone <your-repo>
cd frontend/src
npm install
npm run build
```

### 3. Запуск с PM2

```bash
pm2 start .output/server/index.mjs --name portfolio
pm2 save
pm2 startup
```

### 4. Nginx конфигурация

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 5. SSL с Let's Encrypt

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 🎉 Готово!

Ваше портфолио запущено и работает!

Если есть вопросы — обращайтесь:

- Telegram: [@renzo_pw](https://t.me/renzo_pw)
- Email: dankoshevoy@gmail.com
