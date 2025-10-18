# 🎯 Исправление дергающегося параллакса

## Проблема
Параллакс эффект при скролле может дергаться из-за:
1. Прямого изменения `style.transform` на каждый скролл
2. Отсутствия плавного перехода между кадрами
3. Недостаточной оптимизации рендеринга

## ✅ Решения (от лучшего к худшему)

### 1. CSS-only параллакс (Рекомендуется)
**Самый плавный и производительный вариант**

```vue
<script setup>
import { useParallaxCSS } from '~/composables/useParallaxCSS'

const heroContent = ref()

// Просто подключаем composable
useParallaxCSS(heroContent, {
  speed: 0.5,
  direction: 'up'
})
</script>
```

**Преимущества:**
- Нет JS на каждый скролл
- Использует GPU-ускорение
- Встроенное сглаживание через CSS transition
- Автоматически отключается при `prefers-reduced-motion`

---

### 2. Улучшенный JS-параллакс (Текущий)
**С CSS-переменными и transition**

Уже реализовано в `useParallax.ts`:
- Добавлен `transition: transform 0.05s ease-out` для сглаживания
- Используются CSS-переменные вместо прямого `style.transform`
- Добавлена проверка на минимальное изменение скролла (< 1px игнорируется)

```ts
// Автоматически применяется в HeroSection.vue
useParallax(heroContent, {
  speed: 0.5,
  fadeOut: true
})
```

**Преимущества:**
- Поддержка fade-out эффекта
- Контроль maxDistance
- Плавность через transition

---

### 3. GSAP ScrollTrigger (Для сложных сценариев)
**Когда нужен полный контроль**

```bash
npm install gsap
```

```vue
<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.to('.hero-content', {
    yPercent: 50,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1, // Плавная привязка к скроллу
    },
  })
})
</script>
```

**Преимущества:**
- Самая мощная библиотека анимаций
- Параметр `scrub` обеспечивает идеальную плавность
- Поддержка сложных timeline

**Недостатки:**
- Дополнительная зависимость (~50KB)
- Избыточно для простого параллакса

---

## 🔧 Быстрое исправление текущего кода

### Вариант A: Увеличить transition delay
В `useParallax.ts` измените:
```ts
element.value.style.transition = 'transform 0.1s ease-out, opacity 0.1s ease-out'
```

### Вариант B: Уменьшить скорость параллакса
В `HeroSection.vue`:
```ts
useParallax(heroContent, {
  speed: 0.3, // Было 0.5 - чем меньше, тем плавнее
  fadeOut: true
})
```

### Вариант C: Отключить на мобильных
```ts
const isMobile = () => window.innerWidth <= 768

if (!isMobile()) {
  useParallax(heroContent, { speed: 0.5 })
}
```

---

## 📊 Сравнение производительности

| Метод | FPS | Плавность | Сложность | Размер |
|-------|-----|-----------|-----------|--------|
| CSS-only | 60 | ⭐⭐⭐⭐⭐ | Низкая | 0 KB |
| JS + transition | 55-60 | ⭐⭐⭐⭐ | Средняя | ~1 KB |
| GSAP ScrollTrigger | 60 | ⭐⭐⭐⭐⭐ | Высокая | ~50 KB |

---

## 🎬 Рекомендации

1. **Для hero-секции**: используйте `useParallaxCSS` (самый плавный)
2. **Для секций с fade-out**: используйте обновленный `useParallax`
3. **Для сложных анимаций**: добавьте GSAP ScrollTrigger

---

## 🧪 Тестирование

Откройте DevTools → Performance:
1. Запишите скролл страницы
2. Проверьте FPS (должно быть 60)
3. Проверьте Layout Shift (должен быть минимальным)

**Хороший результат**: Зеленая полоса FPS без провалов

---

## 📝 Changelog

- ✅ Добавлен `transition` для сглаживания в `useParallax`
- ✅ Добавлен threshold (< 1px) для игнорирования микро-скроллов
- ✅ Создан `useParallaxCSS` для CSS-only решения
- ✅ Добавлены глобальные стили `.parallax-css`

