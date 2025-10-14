# 🎨 Portfolio Website - Dan Koshevoy

Современный сайт-портфолио Full-Stack разработчика на **Nuxt 4** с использованием лучших практик UI/UX дизайна.

## 🚀 Технологический стек

- **Frontend:** Nuxt 4, Vue 3, TypeScript
- **Стили:** SCSS с Mobile First подходом
- **Иконки:** @nuxt/icon (Heroicons, Simple Icons)
- **Изображения:** @nuxt/image с оптимизацией
- **Контейнеризация:** Docker, Docker Compose
- **Сервер:** Nginx (reverse proxy)

## 📁 Структура проекта

```
frontend/src/
├── app/
│   ├── assets/
│   │   └── styles/           # SCSS стили (Design System)
│   │       ├── abstracts/    # Переменные, миксины
│   │       ├── base/         # Reset, типографика, анимации
│   │       └── layout/       # Контейнеры, секции
│   ├── components/
│   │   ├── base/             # Базовые компоненты (Button, Card, Input...)
│   │   ├── sections/         # Секции страницы (Hero, About, Services...)
│   │   ├── TheHeader.vue     # Глобальный Header
│   │   └── TheFooter.vue     # Глобальный Footer
│   ├── composables/          # Переиспользуемая логика
│   │   ├── useScrollAnimation.ts
│   │   └── useSmoothScroll.ts
│   ├── layouts/
│   │   └── default.vue       # Основной layout
│   ├── pages/
│   │   └── index.vue         # Главная страница
│   └── app.vue               # Корневой компонент
├── public/                   # Статические файлы
└── nuxt.config.ts            # Конфигурация Nuxt
```

## 🎯 Реализованные возможности

### ✅ Design System

- Цветовая палитра (светлая тема)
- Типографическая шкала (12px - 60px)
- Spacing scale (4px - 128px)
- Компонентная библиотека
- SCSS миксины и переменные

### ✅ Компоненты

**Базовые:**

- BaseButton (4 варианта, 3 размера, состояния)
- BaseCard (3 варианта, hover эффекты)
- BaseTag (категории технологий)
- BaseInput / BaseTextarea (валидация, иконки)

**Секции:**

- HeroSection (анимации, декоративная графика)
- AboutSection (фото, навыки, технологии)
- ServicesSection (5 карточек услуг)
- PortfolioSection (3 проекта с тегами)
- CaseStudiesSection (expandable кейсы)
- TestimonialsSection (slider с автопроигрыванием)
- ContactSection (форма + контакты)

### ✅ UX/UI Features

- **Sticky Header** с автоскрытием при скролле
- **Мобильное меню** с burger-иконкой
- **Плавный скролл** к секциям (якоря)
- **Scroll animations** (Intersection Observer)
- **Hover эффекты** на карточках и кнопках
- **Transitions** между состояниями
- **Mobile First** адаптивность

### ✅ Производительность & SEO

- SSR (Server-Side Rendering)
- Оптимизированные изображения (WebP)
- Ленивая загрузка (lazy loading)
- Meta-теги и Open Graph
- Semantic HTML
- WCAG AA accessibility
- robots.txt

## 🛠️ Установка и запуск

### Локальная разработка

```bash
# Установка зависимостей
cd frontend/src
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Превью продакшен-сборки
npm run preview
```

### Docker (рекомендуется)

```bash
# Из корневой директории проекта
docker-compose up --build -d

# Доступ к сайту
# http://localhost:3000 (напрямую)
# http://localhost:80 (через Nginx)

# Просмотр логов
docker-compose logs -f frontend

# Остановка
docker-compose down
```

## 🎨 Design System

### Цвета

```scss
$primary: #2563eb; // Синий (tech, trust)
$secondary: #10b981; // Зелёный (success, growth)
$dark: #0f172a; // Тёмно-синий (текст, фон)
$gray: #64748b; // Серый (вторичный текст)
$light: #f8fafc; // Светлый фон
```

### Брейкпоинты

```scss
$breakpoint-sm: 640px; // Mobile L
$breakpoint-md: 768px; // Tablet
$breakpoint-lg: 1024px; // Desktop
$breakpoint-xl: 1280px; // Desktop L
```

### Использование миксинов

```scss
// Адаптивность
@include respond-to('md') {
	font-size: $text-lg;
}

// Hover эффект для карточек
@include card-hover;

// Центрирование
@include center('both');

// Контейнер
@include container;
```

## 📝 Создание новых компонентов

### Базовый компонент

```vue
<template>
	<div class="my-component">
		<!-- Контент -->
	</div>
</template>

<script setup lang="ts">
// TypeScript props
interface Props {
	variant?: 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
	variant: 'primary',
})
</script>

<style lang="scss" scoped>
.my-component {
	// SCSS переменные и миксины доступны глобально
	padding: $space-4;
	background-color: $primary;
	@include transition(all);

	@include respond-to('md') {
		padding: $space-6;
	}
}
</style>
```

## 🔧 Настройка

### nuxt.config.ts

- Конфигурация директорий (app/)
- Подключение глобальных стилей
- SCSS preprocessor настройки
- SEO мета-теги
- Модули (@nuxt/icon, @nuxt/image)

### Добавление новой секции

1. Создать компонент в `app/components/sections/`
2. Импортировать в `app/pages/index.vue`
3. Добавить якорь (#id) для навигации
4. Обновить навигацию в `TheHeader.vue`

## 🎯 Чеклист качества

- [x] Responsive design (mobile, tablet, desktop)
- [x] SCSS с Design System
- [x] Компонентная архитектура
- [x] TypeScript типизация
- [x] SEO оптимизация
- [x] Accessibility (a11y)
- [x] Анимации и transitions
- [x] Lazy loading
- [x] Docker deployment

## 📞 Контакты

- **Email:** dankoshevoy@gmail.com
- **Telegram:** [@renzo_dev](https://t.me/renzo_pw)
- **GitHub:** [github.com/renzodev](https://github.com/Renzo-Dev)

---

© 2025 Dan Koshevoy — Разработка с душой и вниманием к деталям.
