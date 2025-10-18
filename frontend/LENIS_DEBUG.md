# 🔍 Отладка Lenis Smooth Scroll

## Как проверить, работает ли Lenis:

### 1. Откройте DevTools Console

### 2. При загрузке страницы вы должны увидеть:

**На Desktop (> 1024px):**
```
✨ Lenis smooth scroll initialized
```

**На Mobile/Tablet:**
```
📱 Mobile/Tablet detected - Lenis disabled
```

### 3. При клике на ссылку навигации:

**Если Lenis работает (Desktop):**
```
🎯 Lenis scroll to: about offset: -80
```

**Если Lenis НЕ работает (Mobile или не инициализирован):**
```
📱 Native scroll to: about offset: -80
```

**Если элемент не найден:**
```
⚠️ Element not found: about
```

---

## 🎯 Поток работы при клике на навигацию:

```
1. Пользователь кликает на "Обо мне"
   ↓
2. @click.prevent срабатывает (preventDefault отменяет переход по #about)
   ↓
3. handleNavClick('about') вызывается
   ↓
4. closeMobileMenu() закрывает меню (если открыто)
   ↓
5. scrollToSection('about', -80) вызывается
   ↓
6. Проверка:
   - Элемент с id="about" существует? ✓
   - Lenis инициализирован? 
     ↓ ДА (Desktop)          ↓ НЕТ (Mobile)
     lenis.scrollTo()        window.scrollTo()
     с плавностью            с behavior: 'smooth'
```

---

## 🐛 Возможные проблемы:

### Проблема 1: "Lenis не инициализируется"
**Причина:** Ширина экрана <= 1024px или устройство с touch
**Решение:** Это нормально! На мобильных используется нативный скролл

### Проблема 2: "Element not found"
**Причина:** На странице нет элемента с соответствующим ID
**Проверка:** Убедитесь что секции имеют id:
```vue
<section id="about">...</section>
<section id="portfolio">...</section>
<section id="services">...</section>
<section id="contact">...</section>
```

### Проблема 3: "Скролл работает, но не плавный"
**Причина 1:** Lenis не инициализирован (смотри Console)
**Причина 2:** CSS конфликты

**Решение:**
1. Проверьте что в `<html>` есть класс `.lenis`
2. Проверьте что нет `scroll-behavior: smooth` в CSS (конфликтует с Lenis)

### Проблема 4: "Скролл дергается"
**Причина:** Параллакс конфликтует с Lenis
**Решение:** Используйте `useParallax` с transition (уже исправлено)

---

## 🧪 Ручное тестирование:

### Тест 1: Проверка инициализации
```js
// В Console DevTools
window.lenis  // Должен вернуть объект Lenis или undefined
```

### Тест 2: Ручной скролл
```js
// В Console DevTools
const element = document.getElementById('about')
if (element) {
  element.scrollIntoView({ behavior: 'smooth' })
}
```

### Тест 3: Проверка ширины экрана
```js
// В Console DevTools
console.log('Width:', window.innerWidth)
console.log('Has touch:', 'ontouchstart' in window)
console.log('Is Desktop:', window.innerWidth > 1024 && !('ontouchstart' in window))
```

---

## ✅ Как должно работать:

### Desktop (> 1024px, без touch):
1. При загрузке: Lenis инициализируется
2. При клике на навигацию: Плавный Lenis скролл (1.5s, easeOutExpo)
3. При скролле колесиком: Плавное движение с инерцией
4. При клике "Scroll to Top": Плавный скролл наверх через Lenis

### Mobile/Tablet:
1. При загрузке: Lenis НЕ инициализируется
2. При клике на навигацию: Нативный smooth scroll
3. При скролле тачем: Обычный браузерный скролл
4. При клике "Scroll to Top": Нативный smooth scroll

---

## 📊 Настройки производительности:

В `useSmoothScroll.ts`:
```ts
duration: 1.5,  // Длительность анимации (секунды)
```

**Рекомендуемые значения:**
- `1.0` - быстро
- `1.2` - средне
- `1.5` - плавно (текущее) ⭐
- `2.0` - очень плавно

---

## 🔧 Если ничего не помогает:

1. Очистите кеш браузера (Ctrl+Shift+Del)
2. Перезапустите dev-сервер
3. Проверьте что `lenis` установлен: `npm list lenis`
4. Проверьте консоль на ошибки TypeScript

