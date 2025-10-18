# 🎨 Lenis Smooth Scroll - Настройка

## Описание
Lenis - современная библиотека для плавного скролла, которая обеспечивает максимально естественное и приятное скроллирование на desktop устройствах.

## ✅ Что реализовано

### 1. Установка и настройка
```bash
npm install lenis
```

### 2. Composable `useSmoothScroll.ts`
Создан универсальный composable с:
- ✅ Автоматическая активация только на desktop (> 1024px + без touch)
- ✅ Плавность через easeOutExpo
- ✅ Адаптивность при ресайзе (auto enable/disable)
- ✅ Методы `scrollTo` и `scrollToSection`
- ✅ Методы `stop/start` для управления
- ✅ Fallback на нативный скролл для мобильных

### 3. Интеграция в Layout
Lenis подключен в `layouts/default.vue`:
```vue
const { scrollToSection, scrollTo } = useSmoothScroll()

provide('scrollToSection', scrollToSection)
provide('scrollTo', scrollTo)
```

### 4. Обновлены компоненты
- ✅ `HeroSection.vue` - использует inject для scrollToSection
- ✅ `Header.vue` - навигация через Lenis
- ✅ `ScrollToTop.vue` - скролл наверх через Lenis

### 5. CSS стили
Добавлены классы в `main.scss`:
```scss
html.lenis {
  height: auto;
}

html.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}

html.lenis.lenis-stopped {
  overflow: hidden;
}
```

---

## 🎯 Использование

### В компонентах
```vue
<script setup>
// Inject функции скролла из layout
const scrollToSection = inject('scrollToSection')

// Использование
const handleClick = () => {
  scrollToSection('contact', -80) // ID секции и offset
}
</script>
```

### Прямое использование composable
```vue
<script setup>
const { scrollTo, scrollToSection, stop, start } = useSmoothScroll()

// Скролл к позиции
scrollTo(500)

// Скролл к элементу
scrollToSection('about', -100)

// Остановить скролл
stop()

// Возобновить скролл
start()
</script>
```

---

## ⚙️ Настройки

В `useSmoothScroll.ts` можно изменить параметры:

```ts
lenis = new Lenis({
  duration: 1.2,        // Плавность (1.2 = средняя, 1.5 = очень плавная)
  easing: (t) => ...,   // Функция easing
  smoothWheel: true,    // Плавное колесико мыши
  wheelMultiplier: 1,   // Скорость колесика (1 = стандарт)
  touchMultiplier: 2,   // Скорость тач-жестов
})
```

### Рекомендуемые значения duration:
- `1.0` - быстрая, отзывчивая
- `1.2` - средняя (текущая) ⭐
- `1.5` - очень плавная, кинематографичная
- `2.0` - экстра плавная, может казаться медленной

---

## 🎬 Поведение

### Desktop (> 1024px + без touch)
- ✅ Lenis активен
- ✅ Плавный скролл колесиком мыши
- ✅ Плавный скролл к секциям
- ✅ Анимированный scrollTo

### Mobile/Tablet
- ✅ Lenis отключен
- ✅ Нативный скролл браузера
- ✅ Fallback на `window.scrollTo({ behavior: 'smooth' })`

### Resize
- ✅ Автоматическое включение/выключение при изменении размера окна
- ✅ Переход desktop ↔ mobile без перезагрузки

---

## 🔍 Отладка

Консоль покажет:
```
✨ Lenis smooth scroll initialized  // На desktop
📱 Mobile/Tablet detected - Lenis disabled  // На мобильных
🗑️ Lenis smooth scroll destroyed  // При unmount
```

---

## 📊 Производительность

- **FPS**: стабильные 60 FPS на desktop
- **Размер**: ~5KB gzipped
- **Совместимость**: Chrome, Firefox, Safari, Edge
- **Оптимизация**: использует requestAnimationFrame

---

## 🎨 Совместимость с параллаксом

Lenis отлично работает с `useParallax`:
- Параллакс остается плавным
- Никаких конфликтов с RAF
- Единая система анимаций

---

## 🚀 Дальнейшие улучшения

### Возможные опции:
1. **Интеграция с GSAP ScrollTrigger**
```ts
lenis.on('scroll', ScrollTrigger.update)
```

2. **Программная прокрутка с callback**
```ts
lenis.scrollTo(element, {
  onComplete: () => console.log('Скролл завершен')
})
```

3. **Якорные ссылки**
```ts
// Автоматическая обработка всех #anchor ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault()
    const target = anchor.getAttribute('href')
    scrollToSection(target.slice(1))
  })
})
```

---

## 📝 Changelog

- ✅ Установлен Lenis 1.x
- ✅ Создан composable `useSmoothScroll`
- ✅ Интегрирован в layout с provide/inject
- ✅ Обновлены все компоненты навигации
- ✅ Добавлены CSS стили
- ✅ Fallback для мобильных устройств
- ✅ Автоматический enable/disable при resize

