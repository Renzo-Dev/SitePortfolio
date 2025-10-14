# 🏗 Архитектура проекта

## 📐 Принципы SOLID

Проект построен на принципах **SOLID** для чистой и поддерживаемой кодовой базы:

### 1. Single Responsibility Principle (SRP)

Каждый компонент отвечает за одну задачу:

- `Button.vue` — только кнопка
- `Badge.vue` — только бейдж
- `useSmoothScroll.ts` — только smooth scroll

### 2. Open/Closed Principle (OCP)

Компоненты расширяемы через props, но закрыты для модификации:

```vue
<Button variant="primary" magnetic>Кнопка</Button>
<Button variant="secondary">Другая кнопка</Button>
```

### 3. Liskov Substitution Principle (LSP)

Компоненты взаимозаменяемы:

```vue
<!-- Любой тип кнопки работает одинаково -->
<Button variant="primary">Submit</Button>
<Button variant="ghost">Cancel</Button>
```

### 4. Interface Segregation Principle (ISP)

Минимальные и чёткие props:

```ts
// Button.vue
interface Props {
	variant?: 'primary' | 'secondary' | 'ghost'
	magnetic?: boolean
}
```

### 5. Dependency Inversion Principle (DIP)

Зависимости через композаблы (абстракции):

```ts
// Компонент зависит от абстракции, а не от реализации
const { scrollTo } = useSmoothScroll()
const { revealSection } = useScrollReveal()
```

## 🎨 Архитектура стилей

### SCSS модульная структура

```scss
// variables.scss — единственный источник истины
$bg-primary: #0a0a0a;
$text-primary: #ffffff;

// Миксины для переиспользования
@mixin container {
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 24px;
}

// Адаптивные миксины
@mixin mobile {
	@media (max-width: 639px) {
		@content;
	}
}
```

### BEM методология (в модификациях)

```scss
.project-card {
	&__image {
	}
	&__title {
	}
	&--hover {
	}
}
```

## 🔄 Композиция vs Наследование

Проект использует **композицию** через Vue Composables:

```ts
// ❌ Плохо: наследование
class AnimatedComponent extends BaseComponent {
  animate() { ... }
}

// ✅ Хорошо: композиция
const { revealSection } = useScrollReveal()
revealSection('.section')
```

## 📦 Разделение ответственности

### Компоненты

- **UI компоненты** — переиспользуемые (Button, Badge, Input)
- **Layout компоненты** — структура (Header, Footer)
- **Секции** — бизнес-логика (HeroSection, AboutSection)

### Composables

- **useScrollReveal** — scroll анимации
- **useSmoothScroll** — плавная прокрутка
- **useMagnetic** — magnetic эффект
- **useCountUp** — count-up анимация

### Plugins

- **gsap.client.ts** — глобальная настройка GSAP

### Server API

- **order.post.ts** — Telegram интеграция

## 🎯 Паттерны проектирования

### 1. Composition Pattern

```ts
// Композиция нескольких функций
const { y } = useScroll(window)
const { scrollTo } = useSmoothScroll()
const isScrolled = computed(() => y.value > 100)
```

### 2. Factory Pattern

```ts
// Фабрика анимаций
const { revealSection, fadeIn, slideInLeft } = useScrollReveal()
```

### 3. Observer Pattern

```ts
// Наблюдение за скроллом
const { y } = useScroll(window)
watchEffect(() => {
	if (y.value > 100) {
		/* действие */
	}
})
```

### 4. Strategy Pattern

```vue
<!-- Разные стратегии отображения кнопки -->
<Button variant="primary" />
<!-- Стратегия 1 -->
<Button variant="secondary" />
<!-- Стратегия 2 -->
<Button variant="ghost" />
<!-- Стратегия 3 -->
```

## 🚀 Performance оптимизации

### 1. Lazy Loading

```ts
// Динамический импорт компонентов
const Particles = defineAsyncComponent(() => import('@tsparticles/vue3'))
```

### 2. Code Splitting

```ts
// Автоматический code splitting через Nuxt
pages / index.vue // chunk 1
about.vue // chunk 2
```

### 3. GPU ускорение

```ts
// GSAP конфиг
gsap.config({
  force3D: true // GPU acceleration
})

// CSS transforms (GPU)
transform: translateY(-8px);  // ✅
top: -8px;                    // ❌
```

### 4. Debounce/Throttle

```ts
// VueUse автоматически оптимизирует
const { x, y } = useMouse() // throttled
```

## ♿ Accessibility архитектура

### 1. Semantic HTML

```vue
<header>
  <nav>
    <NuxtLink>...</NuxtLink>
  </nav>
</header>
<main>
  <section>...</section>
</main>
<footer>...</footer>
```

### 2. ARIA labels

```vue
<button aria-label="Scroll to top">
  <Icon name="arrow-up" />
</button>
```

### 3. Focus management

```scss
*:focus-visible {
	outline: 2px solid $accent;
	outline-offset: 4px;
}
```

### 4. Reduced motion

```ts
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
	// Запускаем анимации
}
```

## 📊 Метрики качества

### Lighthouse Score (цель)

- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Bundle Size

- **Main bundle:** < 200KB (gzipped)
- **GSAP:** ~50KB
- **Lenis:** ~10KB
- **VueUse:** ~20KB

### Оптимизации

- Tree shaking (Nuxt автоматически)
- Image optimization (@nuxt/image)
- Font preloading
- Critical CSS inlining

## 🔐 Безопасность

### 1. XSS защита

```ts
// Vue автоматически экранирует
<p>{{ userInput }}</p> // безопасно
```

### 2. CSRF защита

```ts
// Nuxt автоматически добавляет CSRF токены
$fetch('/api/order', { method: 'POST' })
```

### 3. Environment variables

```ts
// Секретные данные только на сервере
const config = useRuntimeConfig()
// client side не видит telegramBotToken
```

## 📈 Масштабируемость

### Добавление новой секции

1. Создать `components/home/NewSection.vue`
2. Добавить в `pages/index.vue`
3. Scroll reveal автоматически применится

### Добавление нового UI компонента

1. Создать `components/ui/NewComponent.vue`
2. Следовать SOLID принципам
3. Минимальные props, максимальная гибкость

### Добавление анимации

1. Использовать существующие composables
2. Или создать новый в `composables/`
3. Следовать pattern: `useFeatureName.ts`

## 🎓 Best Practices

### 1. TypeScript

```ts
// Строгая типизация
interface Project {
	title: string
	description: string
	technologies: string[]
}
```

### 2. Композаблы

```ts
// Всегда возвращать объект
return {
	scrollTo,
	destroy,
}
```

### 3. Реактивность

```ts
// ref для примитивов
const count = ref(0)

// reactive для объектов
const form = reactive({
	name: '',
	email: '',
})
```

### 4. Cleanup

```ts
// Всегда очищать ресурсы
onUnmounted(() => {
	lenis?.destroy()
	ScrollTrigger.getAll().forEach((t) => t.kill())
})
```

## 📚 Дополнительные материалы

- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [GSAP Documentation](https://greensock.com/docs/)
- [VueUse](https://vueuse.org/)
- [Nuxt 3 Best Practices](https://nuxt.com/docs/guide/going-further/performance)
- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)

---

**Архитектура построена на современных best practices для максимальной поддерживаемости и расширяемости.**
