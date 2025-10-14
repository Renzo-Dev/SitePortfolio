# 🎨 Дизайн-бриф для UI/UX дизайнера

## Сайт-портфолио Dan Koshevoy

---

## 📋 Исходные данные

**Проект:** Персональный сайт-портфолио разработчика  
**Целевая аудитория:** Потенциальные клиенты, работодатели, коллеги по индустрии  
**Цель сайта:** Демонстрация экспертизы, привлечение заказов, продажа услуг  
**Технологии:** Nuxt 4, Vue 3, TailwindCSS, TypeScript  
**Анимации:** GSAP, Lenis, Motion One, VueUse

---

## 📚 Краткий обзор библиотек анимаций

| Библиотека      | Назначение                | Применение в проекте                          |
| --------------- | ------------------------- | --------------------------------------------- |
| **GSAP**        | Профессиональные анимации | Hero текст, ScrollTrigger, карточки, переходы |
| **Lenis**       | Smooth scroll             | Плавная прокрутка всего сайта                 |
| **Motion One**  | Легковесные анимации      | Микровзаимодействия, простые fade-in          |
| **VueUse**      | Vue композаблы            | useScroll, useMouse, useIntersectionObserver  |
| **tsParticles** | Частицы и эффекты         | Hero фон, интерактивные частицы               |
| **Motion/Vue**  | Декларативные анимации    | Page transitions, layout animations           |

**Установка:**

```bash
npm install gsap @studio-freight/lenis motion @vueuse/core @tsparticles/vue3 motion-v
```

---

## 🎯 Дизайн-концепция

### Общий стиль

- **Минималистичный монохром** — черно-белая палитра с акцентами
- **Технологичность** — четкость, структурированность, профессионализм
- **Премиум-подход** — внимание к деталям, качественная типографика
- **Современность** — актуальные UI-тренды 2025 года

### Ключевые принципы

1. **Визуальная иерархия** — пользователь должен понимать структуру за 3 секунды
2. **Микровзаимодействия** — каждый элемент откликается на действия
3. **Плавность** — все анимации и переходы естественные, не отвлекающие
4. **Адаптивность** — идеальная работа на всех устройствах

---

## 🎨 Цветовая палитра

### Основные цвета

```
Primary Background:   #0A0A0A (почти черный)
Secondary Background: #141414 (темно-серый)
Cards/Surfaces:       #1A1A1A (серый для карточек)
Borders:              #2A2A2A (границы, разделители)

Text Primary:         #FFFFFF (белый)
Text Secondary:       #A0A0A0 (серый для вторичного текста)
Text Muted:           #666666 (приглушенный текст)

Accent Primary:       #FFFFFF (белый для акцентов)
Accent Hover:         #F5F5F5(состояние hover)
Accent Active:        #E0E0E0(состояние active)
```

### Дополнительные акценты (опционально)

```
Success/Active:       #00FF88 (неоновый зеленый) - для активных состояний
Warning:              #FFD600 (желтый) - для важных элементов
```

---

## 📐 Сетка и типографика

### Grid System

- **Desktop:** 12-колоночная сетка, макс. ширина контейнера 1440px
- **Tablet:** 8-колоночная сетка, макс. ширина 1024px
- **Mobile:** 4-колоночная сетка, адаптивная ширина

### Отступы (Spacing Scale)

```
xs:  4px
sm:  8px
md:  16px
lg:  24px
xl:  32px
2xl: 48px
3xl: 64px
4xl: 96px
```

### Типографика

**Шрифтовая пара:**

- **Заголовки:** Inter / SF Pro Display / Montserrat (600-800 weight)
- **Текст:** Inter / SF Pro Text / Open Sans (400-500 weight)
- **Код/моноширинный:** JetBrains Mono / Fira Code

**Размеры текста:**

```
H1 (Hero):       64px / 72px (desktop) → 40px (mobile)
H2 (Section):    48px / 56px (desktop) → 32px (mobile)
H3 (Subsection): 32px / 40px (desktop) → 24px (mobile)
H4 (Card title): 24px / 32px
Body Large:      18px / 28px
Body Regular:    16px / 24px
Body Small:      14px / 20px
Caption:         12px / 16px
```

---

## 🧩 Компоненты и элементы

### 🔝 Header (Шапка сайта)

**Позиционирование:** Фиксированный, прилипающий (sticky)  
**Поведение:** При скролле вниз — появляется backdrop-blur эффект + тень

**Структура:**

```
[Logo/Name]                    [Nav: Обо мне | Портфолио | Услуги | Контакты] [CTA Button]
```

**Эффекты:**

- Прозрачный фон → полупрозрачный с blur при скролле
- Анимация появления: slide-down (при скролле вверх)
- Гамбургер-меню на мобилке с full-screen overlay
- Активная страница подчеркивается тонкой линией снизу

**Технические детали:**

- `backdrop-filter: blur(12px)` при скролле
- `box-shadow: 0 4px 20px rgba(0,0,0,0.4)` при скролле
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

---

### 🦶 Footer (Подвал)

**Стиль:** Информативный, структурированный, 3-колоночный

**Структура:**

```
[Колонка 1: О проекте]    [Колонка 2: Навигация]    [Колонка 3: Контакты + Соц.сети]
─────────────────────────────────────────────────────────────────────────────────────
                        © 2025 Dan Koshevoy — Built with Nuxt & Vue
```

**Эффекты:**

- Ссылки с анимацией underline (от центра в стороны)
- Иконки соц.сетей с hover-эффектом (scale + rotate)
- Разделитель сверху: градиентная линия (`linear-gradient(90deg, transparent, #fff, transparent)`)

---

### 🔘 Кнопки (Buttons)

**Primary Button (Основная CTA):**

```scss
// Визуал
Background: #FFFFFF
Color: #0A0A0A
Padding: 14px 32px
Border-radius: 8px
Font-weight: 600

// Hover
Background: #E0E0E0
Transform: translateY(-2px)
Box-shadow: 0 8px 24px rgba(255,255,255,0.15)

// Active
Transform: translateY(0)
```

**Secondary Button (Вторичная):**

```scss
Background: transparent
Color: #FFFFFF
Border: 1px solid #FFFFFF
Padding: 14px 32px

// Hover
Background: rgba(255,255,255,0.1)
Border-color: #E0E0E0
```

**Ghost Button (Призрачная):**

```scss
Background: transparent
Color: #A0A0A0
No border

// Hover
Color: #FFFFFF
Background: rgba(255,255,255,0.05)
```

---

### ⬆️ Scroll to Top (Кнопка прокрутки вверх)

**Позиция:** Нижний правый угол, `bottom: 32px, right: 32px`  
**Появление:** Fade-in при скролле > 500px от верха

**Дизайн:**

```scss
Size: 56px × 56px
Background: #FFFFFF
Icon: стрелка вверх (#0A0A0A)
Border-radius: 50% или 12px (на выбор)
Box-shadow: 0 4px 20px rgba(255,255,255,0.2)

// Hover
Transform: translateY(-4px)
Box-shadow: 0 8px 32px rgba(255,255,255,0.3)

// Animation
Плавное появление: opacity 0 → 1, scale 0.8 → 1
Transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) // ease-out-back
```

**Поведение:**

- Клик → плавный scroll вверх (smooth scroll behavior)
- Пульсация иконки при появлении (optional)

---

## 🌊 Анимации и эффекты

### 📚 Библиотеки для анимаций

#### 🎬 GSAP (GreenSock Animation Platform)

**Зачем:** Самая мощная библиотека для сложных анимаций  
**Применение:**

- Hero-секция с анимацией появления текста (SplitText, stagger)
- Плавные переходы между секциями (ScrollTrigger)
- Морфинг SVG-элементов (MorphSVG)
- Parallax-эффекты для фоновых элементов

```js
// Пример: Hero текст появляется по буквам
gsap.from('.hero-title', {
	opacity: 0,
	y: 50,
	stagger: 0.05,
	duration: 0.8,
	ease: 'power3.out',
})
```

#### 🎯 Lenis (Smooth Scroll)

**Зачем:** Плавный нативный скролл с инерцией  
**Применение:**

- Весь сайт использует Lenis для butter-smooth прокрутки
- Интеграция с GSAP ScrollTrigger
- Эффект "жидкой" прокрутки

```js
const lenis = new Lenis({
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	smoothWheel: true,
})
```

#### ⚡ Motion One (Web Animations API)

**Зачем:** Легковесная альтернатива GSAP для простых анимаций  
**Применение:**

- Анимации кнопок (hover, active)
- Простые fade-in эффекты
- Микровзаимодействия

```js
animate(
	'.card',
	{ opacity: [0, 1], y: [20, 0] },
	{ duration: 0.5, easing: 'ease-out' }
)
```

#### 🎨 VueUse (Composition Utilities)

**Зачем:** Хуки для отслеживания скролла, мыши, видимости  
**Применение:**

- `useScroll` — отслеживание позиции скролла для header
- `useIntersectionObserver` — lazy load + scroll reveal
- `useMouse` — кастомный курсор, magnetic buttons
- `useParallax` — параллакс-эффекты

```js
const { y } = useScroll(window)
const isHeaderVisible = computed(() => y.value > 100)
```

#### 🌟 Particles.js / tsParticles

**Зачем:** Анимированные частицы для фона  
**Применение:**

- Hero-секция: минималистичные белые точки
- Эффект "звездного неба" или "сетки"
- Интерактивность: частицы реагируют на курсор

#### 🎭 Framer Motion для Vue (motion/vue)

**Зачем:** Декларативные анимации компонентов  
**Применение:**

- Layout animations при смене страниц
- Анимированные списки (stagger children)
- Gesture-based анимации (drag, tap)

---

### Принципы анимаций

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` — стандарт Material Design
- **Duration:**
  - UI микровзаимодействия: 200-300ms
  - Секции и карточки: 400-600ms
  - Hero анимации: 800-1200ms
- **Stagger:** 100-150ms между элементами для плавности
- **Performance:** transform + opacity (GPU), избегать width/height

---

### 🎪 Продвинутые эффекты

#### Magnetic Effect (Магнитные кнопки)

```js
// Кнопки "притягивают" курсор
const button = document.querySelector('.magnetic-btn')
button.addEventListener('mousemove', (e) => {
	const rect = button.getBoundingClientRect()
	const x = e.clientX - rect.left - rect.width / 2
	const y = e.clientY - rect.top - rect.height / 2

	gsap.to(button, {
		x: x * 0.3,
		y: y * 0.3,
		duration: 0.3,
		ease: 'power2.out',
	})
})
```

#### Text Reveal (Появление текста)

```js
// Текст появляется с эффектом "занавеса"
gsap.from('.reveal-text', {
	clipPath: 'inset(0 100% 0 0)',
	duration: 1,
	ease: 'power4.inOut',
	stagger: 0.1,
})
```

#### Image Parallax (Параллакс изображений)

```js
// Изображения двигаются медленнее скролла
gsap.to('.parallax-img', {
	yPercent: -30,
	ease: 'none',
	scrollTrigger: {
		trigger: '.parallax-section',
		scrub: 1, // плавная связь со скроллом
	},
})
```

#### Infinite Marquee (Бегущая строка)

```js
// Для отображения технологий/навыков
gsap.to('.marquee', {
	xPercent: -50,
	duration: 20,
	repeat: -1,
	ease: 'none',
})
```

---

### Микровзаимодействия

**При наведении на карточки проектов:**

```scss
// GSAP hover animation
.project-card {
  transition: box-shadow 0.3s ease;
}

// JS
gsap.to('.project-card:hover', {
  y: -8,
  duration: 0.3,
  ease: 'power2.out'
})
```

**При скролле (Scroll Reveal с GSAP):**

```js
// ScrollTrigger для секций
gsap.from('.section', {
	opacity: 0,
	y: 60,
	duration: 0.8,
	stagger: 0.2,
	scrollTrigger: {
		trigger: '.section',
		start: 'top 80%',
		toggleActions: 'play none none reverse',
	},
})
```

**Hover на текстовые ссылки:**

```scss
// Подчеркивание появляется слева направо
.link::after {
	content: '';
	width: 0 → 100%;
	height: 1px;
	background: #ffffff;
	transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Cursor Follow Effect (Кастомный курсор):**

```js
// Курсор следует за мышью с задержкой
const { x, y } = useMouse()
gsap.to('.custom-cursor', {
	x: x.value,
	y: y.value,
	duration: 0.3,
	ease: 'power2.out',
})
```

---

## 📱 Адаптивность (Responsive Breakpoints)

```
Mobile:       < 640px
Tablet:       640px - 1024px
Desktop:      1024px - 1440px
Large Screen: > 1440px
```

### Ключевые изменения:

- **Mobile:** Вертикальные стеки, бургер-меню, упрощенные карточки
- **Tablet:** 2-колоночная сетка для проектов
- **Desktop:** Полная сетка, hover-эффекты активны

---

## 🎭 Секции сайта

### 🏠 Главная (Hero Section)

**Подход:** Минималистичный, акцент на типографике + интерактивность

**Структура:**

```
[Центр экрана]
  Большой заголовок (H1): "Создаю современные сайты и веб-приложения"
  Подзаголовок: "Frontend + Backend разработка на Vue, Laravel, Docker..."
  [CTA Buttons: "Посмотреть работы" + "Заказать разработку"]

[Фоновые эффекты]
  - Градиентная сетка (grid pattern) с opacity 0.03
  - Анимированные частицы (tsParticles)
  - Плавная пульсация света за текстом
```

**Анимации с GSAP:**

```js
// Hero текст появляется с задержкой по словам
gsap.from('.hero-title', {
	opacity: 0,
	y: 100,
	duration: 1,
	ease: 'power4.out',
	delay: 0.3,
})

// Подзаголовок с blur эффектом
gsap.from('.hero-subtitle', {
	opacity: 0,
	filter: 'blur(10px)',
	duration: 0.8,
	delay: 0.6,
	ease: 'power3.out',
})

// Кнопки появляются снизу с stagger
gsap.from('.cta-button', {
	opacity: 0,
	y: 30,
	duration: 0.6,
	stagger: 0.15,
	delay: 1,
	ease: 'back.out(1.7)',
})
```

**Particles Config (tsParticles):**

```js
{
  particles: {
    number: { value: 50 },
    color: { value: '#ffffff' },
    opacity: { value: 0.3 },
    size: { value: 2 },
    move: {
      enable: true,
      speed: 0.5,
      direction: 'none'
    },
    links: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.1,
      width: 1
    }
  }
}
```

**Эффекты:**

- Текст с gradient: `linear-gradient(180deg, #FFF 0%, #A0A0A0 100%)`
- Parallax для фоновых элементов (VueUse)
- Magnetic effect для CTA кнопок
- Floating animation для декоративных элементов

---

### 👨‍💻 Обо мне (About Section)

**Подход:** Личный контакт, доверие

**Структура:**

```
[Левая часть - 40%]              [Правая часть - 60%]
  Фото (монохром, градиент)       Текст о себе + Сильные стороны
  или абстрактная графика         (список с иконками)
```

**Эффекты:**

- Фото с hover: легкое увеличение + изменение opacity градиента
- Иконки навыков: rotate + scale при наведении

---

### 🖼️ Портфолио (Projects Section)

**Подход:** Визуальные карточки проектов с продвинутыми hover-эффектами

**Структура карточки:**

```scss
// Desktop: 3 карточки в ряд
.project-card {
  Background: #1A1A1A
  Border: 1px solid #2A2A2A
  Border-radius: 16px
  Padding: 32px
  overflow: hidden
  position: relative

  [Изображение проекта / Screenshot]
  [Название проекта (H3)]
  [Краткое описание]
  [Технологии - badges]
  [Кнопка: "Подробнее" →]
}
```

**Hover-эффект с GSAP:**

```js
// Magnetic card effect
const cards = document.querySelectorAll('.project-card')

cards.forEach((card) => {
	card.addEventListener('mouseenter', () => {
		gsap.to(card, {
			y: -12,
			scale: 1.02,
			duration: 0.4,
			ease: 'power2.out',
		})

		// Изображение с parallax внутри карточки
		gsap.to(card.querySelector('.project-img'), {
			scale: 1.1,
			duration: 0.6,
			ease: 'power2.out',
		})

		// Появление градиентной границы
		gsap.to(card, {
			borderColor: 'rgba(255,255,255,0.3)',
			boxShadow: '0 20px 60px rgba(255,255,255,0.1)',
			duration: 0.3,
		})
	})

	card.addEventListener('mouseleave', () => {
		gsap.to(card, {
			y: 0,
			scale: 1,
			duration: 0.4,
			ease: 'power2.inOut',
		})

		gsap.to(card.querySelector('.project-img'), {
			scale: 1,
			duration: 0.6,
			ease: 'power2.inOut',
		})
	})
})
```

**Scroll Reveal для карточек:**

```js
gsap.from('.project-card', {
	opacity: 0,
	y: 80,
	duration: 0.8,
	stagger: 0.2,
	ease: 'power3.out',
	scrollTrigger: {
		trigger: '.portfolio-section',
		start: 'top 70%',
	},
})
```

---

### 🧰 Услуги (Services Section)

**Подход:** Иконки + описание в карточках

**Структура:**

```
[Grid: 2×3 на desktop, 1 колонка на mobile]

Каждая карточка:
  [Иконка услуги - 48×48px]
  [Заголовок H3]
  [Описание (2-3 строки)]
```

**Иконки:**

- Линейные (line-style), 2px stroke
- Белый цвет с opacity 0.9
- Hover: rotate(5deg) + scale(1.1)

---

### 💡 Личные кейсы (Case Studies)

**Подход:** Сторителлинг с акцентом на результат + анимированные метрики

**Структура:**

```
[Вертикальный timeline или карточки]

Каждый кейс:
  [Номер/Иконка] [Заголовок]
  Проблема → Решение → Результат → Вывод

  Визуал: до/после графики (опционально)
```

**Count-up анимация для метрик:**

```js
// Анимация чисел при появлении в viewport
const animateValue = (element, start, end, duration) => {
	gsap.to(
		{ val: start },
		{
			val: end,
			duration: duration,
			ease: 'power2.out',
			onUpdate: function () {
				element.textContent = Math.floor(this.targets()[0].val)
			},
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				once: true,
			},
		}
	)
}

// Пример: "900ms → 280ms"
animateValue(document.querySelector('.metric-before'), 900, 280, 2)
```

**Прогресс-бары с анимацией:**

```js
// Прогресс заполняется слева направо
gsap.from('.progress-bar', {
	scaleX: 0,
	transformOrigin: 'left',
	duration: 1.5,
	ease: 'power3.inOut',
	scrollTrigger: {
		trigger: '.case-study',
		start: 'top 70%',
	},
})
```

**Timeline эффект:**

```js
// Линия появляется сверху вниз
gsap.from('.timeline-line', {
	scaleY: 0,
	transformOrigin: 'top',
	duration: 2,
	ease: 'power2.inOut',
	scrollTrigger: {
		trigger: '.timeline',
		start: 'top 60%',
	},
})

// Точки на timeline появляются последовательно
gsap.from('.timeline-dot', {
	scale: 0,
	opacity: 0,
	stagger: 0.3,
	duration: 0.5,
	ease: 'back.out(2)',
	scrollTrigger: {
		trigger: '.timeline',
		start: 'top 60%',
	},
})
```

---

### 💬 Отзывы (Testimonials)

**Подход:** Карусель или статичные карточки

**Дизайн карточки:**

```scss
Background: #141414
Border-left: 3px solid #FFFFFF
Padding: 24px 32px
Font-style: italic
Color: #A0A0A0

[Кавычка-иконка - большая, декоративная]
[Текст отзыва]
[Автор + должность + компания]
```

---

### 📞 Контакты (Contact Section)

**Подход:** Форма + контактная информация

**Структура:**

```
[Левая часть - Форма]           [Правая часть - Инфо]
  Имя                            Email: dankoshevoy@gmail.com
  Email                          Telegram: @renzo_dev
  Сообщение                      GitHub: /Renzo-Dev
  [Кнопка "Отправить"]
```

**Форма:**

```scss
Input/Textarea {
  Background: transparent
  Border: 1px solid #2A2A2A
  Border-radius: 8px
  Color: #FFFFFF
  Padding: 14px 16px

  // Focus
  Border-color: #FFFFFF
  Box-shadow: 0 0 0 3px rgba(255,255,255,0.1)
}
```

---

## 🎨 Дополнительные UI-элементы

### Badges (Технологии)

```scss
Background: rgba(255,255,255,0.1)
Color: #FFFFFF
Border: 1px solid rgba(255,255,255,0.2)
Border-radius: 20px
Padding: 6px 14px
Font-size: 13px
Font-weight: 500

// Hover
Background: rgba(255,255,255,0.15)
```

### Разделители секций

```scss
// Тонкая линия с градиентом
background: linear-gradient(
  90deg,
  transparent 0%,
  rgba(255,255,255,0.2) 50%,
  transparent 100%
)
height: 1px
margin: 80px 0
```

### Курсор (Custom Cursor - опционально)

```scss
// Кастомный курсор с эффектом следа
.cursor {
  width: 40px
  height: 40px
  border: 2px solid rgba(255,255,255,0.5)
  border-radius: 50%
  // Следует за мышью с задержкой (GSAP)
}
```

---

## ⚡ Современные UI-тренды для применения

### Glassmorphism (Стекло)

```scss
background: rgba(255, 255, 255, 0.05)
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.1)
```

Применить: модальные окна, header при скролле

### Neumorphism (мягкие тени)

```scss
// Вдавленный эффект для карточек (опционально)
box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.05);
```

### Gradient Borders

```scss
// Градиентные границы для акцентных элементов
border-image: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.2) 100%)
	1;
```

### Noise Texture (Зернистость)

```scss
// Легкая зернистость для глубины
background-image: url('/noise.png')
opacity: 0.03
mix-blend-mode: overlay
```

---

## 🛠️ Технические требования

### 📦 Установка библиотек анимаций

```bash
# GSAP с плагинами
npm install gsap

# Smooth scroll
npm install @studio-freight/lenis

# Motion utilities
npm install motion

# VueUse композаблы
npm install @vueuse/core

# Particles (выбрать один)
npm install @tsparticles/vue3 @tsparticles/slim
# или
npm install particles.vue3

# Framer Motion для Vue
npm install motion-v
```

### 📄 Пример подключения (Nuxt 3)

**nuxt.config.ts:**

```ts
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt'],

	app: {
		head: {
			script: [
				// GSAP через CDN (опционально)
				{ src: 'https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js' },
			],
		},
	},
})
```

**plugins/gsap.client.ts:**

```ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger)
	}

	return {
		provide: {
			gsap,
			ScrollTrigger,
		},
	}
})
```

**composables/useSmoothScroll.ts:**

```ts
import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {
	const lenis = ref<Lenis | null>(null)

	onMounted(() => {
		lenis.value = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true,
		})

		function raf(time: number) {
			lenis.value?.raf(time)
			requestAnimationFrame(raf)
		}
		requestAnimationFrame(raf)
	})

	onUnmounted(() => {
		lenis.value?.destroy()
	})

	return { lenis }
}
```

---

### Performance

- **Lazy loading** для изображений (Intersection Observer через VueUse)
- **Оптимизация шрифтов:** WOFF2, preload для критичных
- **SVG иконки** вместо PNG (меньший вес)
- **GSAP анимации** — GPU-ускоренные (transform, opacity)
- **Code splitting:** динамические импорты для тяжелых библиотек
- **Debounce/Throttle:** для событий scroll/resize (VueUse)

```js
// Оптимизация GSAP анимаций
gsap.config({
	force3D: true, // GPU ускорение
	nullTargetWarn: false,
})

// Lazy load GSAP плагинов
const loadScrollTrigger = async () => {
	const { ScrollTrigger } = await import('gsap/ScrollTrigger')
	gsap.registerPlugin(ScrollTrigger)
}
```

### Accessibility (A11y)

- Контрастность текста: минимум 4.5:1 (WCAG AA)
- Focus states для всех интерактивных элементов
- Семантичная разметка (nav, main, section, article)
- Alt-тексты для всех изображений
- Keyboard navigation (Tab, Enter, Space)
- **Reduced motion:** отключение анимаций для prefers-reduced-motion

```scss
@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 0.01ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0.01ms !important;
	}
}
```

### Cross-browser

- Chrome, Firefox, Safari, Edge (последние 2 версии)
- Fallback для backdrop-filter (не поддерживается везде)
- Graceful degradation для сложных анимаций
- Проверка поддержки через `@supports` в CSS

```scss
// Fallback для backdrop-filter
@supports not (backdrop-filter: blur(10px)) {
	.header {
		background: rgba(10, 10, 10, 0.95);
	}
}
```

---

## 📦 Deliverables (Что нужно от дизайнера)

### Макеты

1. **Desktop** (1440px) — все страницы
2. **Tablet** (768px) — ключевые страницы
3. **Mobile** (375px) — все страницы

### Компоненты

- UI Kit (кнопки, поля ввода, карточки, бейджи)
- Иконки (набор в SVG)
- Состояния: default, hover, active, disabled, focus

### Дополнительно

- Анимации (описание или прототип в Figma/Principle)
- Спецификация цветов, шрифтов, отступов
- Гайдлайн по адаптиву (что как меняется)

---

## 🎯 Референсы для вдохновения

**Сайты-портфолио:**

- https://bruno-simon.com (интерактивность)
- https://caferati.me (минимализм + анимации)
- https://jacekjeznach.com (монохром + типографика)
- https://robbowen.digital (современный подход)
- https://lenis.darkroom.engineering (smooth scroll demo)
- https://gsap.com/showcase (GSAP примеры)

**UI/UX подходы:**

- Awwwards.com (лучшие практики)
- Dribbble.com (поиск: "developer portfolio dark")
- Behance.com (монохромные дизайны)
- https://webflow.com/made-in-webflow (современные решения)

**Анимации:**

- https://tympanus.net/codrops (микровзаимодействия)
- https://www.hover.dev (hover-эффекты)
- https://greensock.com/examples-showcases (GSAP примеры)
- https://motion.dev (Motion One примеры)

---

## ✅ Чек-лист для дизайнера

### Визуальный дизайн

- [ ] Монохромная палитра черный/белый выдержана
- [ ] Header с backdrop-blur и анимацией при скролле (GSAP)
- [ ] Footer информативный, структурированный, 3-колонки
- [ ] Scroll to Top кнопка с плавной анимацией появления
- [ ] Все кнопки имеют 3 состояния (default, hover, active)
- [ ] Типографика с четкой иерархией (H1-H4, body)
- [ ] Карточки проектов с hover-эффектами (magnetic effect)
- [ ] Адаптив для 3 breakpoints (mobile, tablet, desktop)
- [ ] Иконки в SVG, единый стиль (line/fill)
- [ ] Форма контактов стилизована под общий дизайн

### Анимации и эффекты

- [ ] Hero-секция: текст с GSAP stagger animation
- [ ] Particles.js / tsParticles в фоне Hero
- [ ] Smooth scroll (Lenis) настроен
- [ ] Scroll reveal анимации для всех секций (ScrollTrigger)
- [ ] Magnetic buttons для CTA
- [ ] Count-up анимация для метрик в кейсах
- [ ] Progress bars с анимацией заполнения
- [ ] Timeline с последовательным появлением
- [ ] Parallax эффекты для изображений
- [ ] Custom cursor с VueUse (опционально)
- [ ] Все анимации с правильным easing
- [ ] Reduced motion media query реализован

### Технические требования

- [ ] GSAP + ScrollTrigger подключены
- [ ] Lenis для smooth scroll интегрирован
- [ ] VueUse composables используются
- [ ] Accessibility: контраст, focus states, семантика
- [ ] Keyboard navigation работает
- [ ] Fallbacks для backdrop-filter
- [ ] GPU-ускорение для анимаций (transform/opacity)
- [ ] Lazy loading для изображений (VueUse Intersection Observer)
- [ ] Performance оптимизации применены
- [ ] Микровзаимодействия описаны или показаны

---

## 💬 Финальные замечания

**Приоритет:** Чистота, лаконичность, профессионализм  
**Настроение:** Премиум, технологичный, уверенный  
**Не делать:** Перегруженность, кислотные цвета, устаревшие тренды

**Фокус на деталях:**

- Каждый пиксель имеет значение
- Анимации дополняют, а не отвлекают
- Белое пространство — это дизайн-решение

---

---

## 🎯 Дополнительные рекомендации по библиотекам

### Альтернативные решения

**Если нужна максимальная производительность:**

- Замените GSAP на **Motion One** (в 10 раз легче)
- Используйте только VueUse без дополнительных библиотек

**Если нужен wow-эффект:**

- Добавьте **Three.js** для 3D-элементов в Hero
- Используйте **Spline** для интерактивных 3D-сцен
- **Canvas Confetti** для микроанимаций при отправке формы

**Для продвинутых текстовых эффектов:**

- **Splitting.js** — разбивка текста на буквы/слова
- **GSAP SplitText** (платный плагин) — продвинутая работа с текстом

### Пример комплексной анимации (Hero)

```vue
<template>
	<section class="hero" ref="heroRef">
		<div class="particles" ref="particlesRef"></div>
		<h1 class="hero-title" ref="titleRef">
			<span v-for="(word, i) in words" :key="i" class="word">
				{{ word }}
			</span>
		</h1>
		<div class="cta-buttons" ref="ctaRef">
			<button class="magnetic-btn">Посмотреть работы</button>
			<button class="magnetic-btn">Заказать разработку</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMouse } from '@vueuse/core'

const heroRef = ref(null)
const titleRef = ref(null)
const ctaRef = ref(null)

const words = ref(['Создаю', 'современные', 'сайты', 'и', 'веб-приложения'])

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)

	// Hero animation timeline
	const tl = gsap.timeline({ delay: 0.3 })

	tl.from('.word', {
		opacity: 0,
		y: 100,
		rotateX: -90,
		stagger: 0.1,
		duration: 1,
		ease: 'power4.out',
	}).from(
		'.cta-buttons button',
		{
			opacity: 0,
			y: 30,
			scale: 0.9,
			stagger: 0.15,
			duration: 0.6,
			ease: 'back.out(2)',
		},
		'-=0.4'
	)

	// Magnetic buttons
	const { x, y } = useMouse()

	document.querySelectorAll('.magnetic-btn').forEach((btn) => {
		btn.addEventListener('mousemove', (e) => {
			const rect = btn.getBoundingClientRect()
			const centerX = rect.left + rect.width / 2
			const centerY = rect.top + rect.height / 2
			const deltaX = e.clientX - centerX
			const deltaY = e.clientY - centerY

			gsap.to(btn, {
				x: deltaX * 0.3,
				y: deltaY * 0.3,
				duration: 0.3,
				ease: 'power2.out',
			})
		})

		btn.addEventListener('mouseleave', () => {
			gsap.to(btn, {
				x: 0,
				y: 0,
				duration: 0.5,
				ease: 'elastic.out(1, 0.3)',
			})
		})
	})

	// Parallax на скролл
	gsap.to('.hero', {
		yPercent: 30,
		ease: 'none',
		scrollTrigger: {
			trigger: '.hero',
			start: 'top top',
			end: 'bottom top',
			scrub: 1,
		},
	})
})
</script>

<style scoped lang="scss">
.hero {
	position: relative;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
}

.hero-title {
	font-size: clamp(40px, 8vw, 64px);
	line-height: 1.2;
	text-align: center;
	background: linear-gradient(180deg, #fff 0%, #a0a0a0 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;

	.word {
		display: inline-block;
		margin: 0 0.2em;
		transform-origin: bottom;
	}
}

.cta-buttons {
	display: flex;
	gap: 20px;
	margin-top: 40px;

	button {
		padding: 14px 32px;
		background: #fff;
		color: #0a0a0a;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;

		&:hover {
			box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
		}
	}
}
</style>
```

---

**Контакт для вопросов:**  
PM: [указать контакт]  
Deadline: [указать дедлайн]

**Let's build something beautiful with smooth animations! 🚀✨**
