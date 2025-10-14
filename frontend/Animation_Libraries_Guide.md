# 🎬 Гайд по библиотекам анимаций для портфолио

## 📦 Установка и настройка

### Необходимые пакеты

```bash
# Основные библиотеки
npm install gsap @studio-freight/lenis motion @vueuse/core

# Particles (опционально, выбрать одну)
npm install @tsparticles/vue3 @tsparticles/slim

# Дополнительно (для продвинутых эффектов)
npm install motion-v three @splinetool/runtime
```

---

## 🔧 Конфигурация Nuxt

### nuxt.config.ts

```ts
export default defineNuxtConfig({
	modules: ['@vueuse/nuxt'],

	css: ['~/assets/styles/main.scss'],

	app: {
		head: {
			link: [
				// Preload шрифтов для производительности
				{
					rel: 'preload',
					href: '/fonts/inter.woff2',
					as: 'font',
					type: 'font/woff2',
					crossorigin: '',
				},
			],
		},
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/variables.scss" as *;',
				},
			},
		},
	},
})
```

---

## 🎯 GSAP - GreenSock Animation Platform

### Установка плагинов

```ts
// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

export default defineNuxtPlugin(() => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

		// Настройка для производительности
		gsap.config({
			force3D: true,
			nullTargetWarn: false,
		})
	}

	return {
		provide: {
			gsap,
			ScrollTrigger,
		},
	}
})
```

### Основные сценарии использования

#### 1. Hero секция - текст по словам

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const heroTitle = ref<HTMLElement>()

onMounted(() => {
	const words = heroTitle.value?.querySelectorAll('.word')

	gsap.from(words, {
		opacity: 0,
		y: 100,
		rotateX: -90,
		stagger: 0.1,
		duration: 1,
		ease: 'power4.out',
		delay: 0.3,
	})
})
</script>

<template>
	<h1 ref="heroTitle" class="hero-title">
		<span class="word">Создаю</span>
		<span class="word">современные</span>
		<span class="word">сайты</span>
	</h1>
</template>
```

#### 2. Scroll Reveal для секций

```ts
// composables/useScrollReveal.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollReveal = () => {
	const revealSection = (selector: string) => {
		gsap.from(selector, {
			opacity: 0,
			y: 60,
			duration: 0.8,
			stagger: 0.2,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: selector,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})
	}

	return { revealSection }
}
```

#### 3. Карточки с hover эффектом

```ts
// composables/useCardHover.ts
import { gsap } from 'gsap'

export const useCardHover = () => {
	const setupCardHover = (cardSelector: string) => {
		const cards = document.querySelectorAll(cardSelector)

		cards.forEach((card) => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, {
					y: -12,
					scale: 1.02,
					duration: 0.4,
					ease: 'power2.out',
				})

				const img = card.querySelector('.card-img')
				if (img) {
					gsap.to(img, {
						scale: 1.1,
						duration: 0.6,
						ease: 'power2.out',
					})
				}
			})

			card.addEventListener('mouseleave', () => {
				gsap.to(card, {
					y: 0,
					scale: 1,
					duration: 0.4,
					ease: 'power2.inOut',
				})

				const img = card.querySelector('.card-img')
				if (img) {
					gsap.to(img, {
						scale: 1,
						duration: 0.6,
						ease: 'power2.inOut',
					})
				}
			})
		})
	}

	return { setupCardHover }
}
```

#### 4. Parallax эффект

```ts
// composables/useParallax.ts
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useParallax = () => {
	const createParallax = (element: string, speed: number = -30) => {
		gsap.to(element, {
			yPercent: speed,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 1,
			},
		})
	}

	return { createParallax }
}
```

#### 5. Count-up анимация для чисел

```ts
// composables/useCountUp.ts
import { gsap } from 'gsap'

export const useCountUp = () => {
	const animateNumber = (
		element: HTMLElement,
		endValue: number,
		duration: number = 2
	) => {
		const obj = { value: 0 }

		gsap.to(obj, {
			value: endValue,
			duration,
			ease: 'power2.out',
			onUpdate: () => {
				element.textContent = Math.floor(obj.value).toString()
			},
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				once: true,
			},
		})
	}

	return { animateNumber }
}
```

---

## 🎢 Lenis - Smooth Scroll

### Настройка

```ts
// composables/useSmoothScroll.ts
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useSmoothScroll = () => {
	let lenis: Lenis | null = null

	const initSmoothScroll = () => {
		lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		})

		// Синхронизация с GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time) => {
			lenis?.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)
	}

	const scrollTo = (target: string | number, options = {}) => {
		lenis?.scrollTo(target, options)
	}

	const destroy = () => {
		lenis?.destroy()
		lenis = null
	}

	onMounted(() => {
		initSmoothScroll()
	})

	onUnmounted(() => {
		destroy()
	})

	return { lenis, scrollTo, destroy }
}
```

### Использование в app.vue

```vue
<script setup lang="ts">
import { useSmoothScroll } from '~/composables/useSmoothScroll'

const { scrollTo } = useSmoothScroll()

// Scroll to top при клике
const handleScrollToTop = () => {
	scrollTo(0, { duration: 1.5 })
}
</script>
```

---

## 🎨 VueUse - Композаблы

### Magnetic Buttons (Магнитные кнопки)

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useMouse, useElementBounding } from '@vueuse/core'
import { gsap } from 'gsap'

const buttonRef = ref<HTMLElement>()
const { x, y } = useMouse()
const { left, top, width, height } = useElementBounding(buttonRef)

const handleMouseMove = () => {
	const centerX = left.value + width.value / 2
	const centerY = top.value + height.value / 2
	const deltaX = x.value - centerX
	const deltaY = y.value - centerY

	gsap.to(buttonRef.value, {
		x: deltaX * 0.3,
		y: deltaY * 0.3,
		duration: 0.3,
		ease: 'power2.out',
	})
}

const handleMouseLeave = () => {
	gsap.to(buttonRef.value, {
		x: 0,
		y: 0,
		duration: 0.5,
		ease: 'elastic.out(1, 0.3)',
	})
}
</script>

<template>
	<button
		ref="buttonRef"
		@mousemove="handleMouseMove"
		@mouseleave="handleMouseLeave"
		class="magnetic-btn"
	>
		Нажми меня
	</button>
</template>
```

### Scroll Progress Bar

```vue
<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { computed } from 'vue'

const { y } = useScroll(window)
const scrollProgress = computed(() => {
	const windowHeight = window.innerHeight
	const documentHeight = document.documentElement.scrollHeight
	return (y.value / (documentHeight - windowHeight)) * 100
})
</script>

<template>
	<div class="scroll-progress" :style="{ width: `${scrollProgress}%` }" />
</template>
```

### Intersection Observer для lazy loading

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const imageRef = ref<HTMLElement>()
const isVisible = ref(false)

useIntersectionObserver(
	imageRef,
	([{ isIntersecting }]) => {
		if (isIntersecting) {
			isVisible.value = true
		}
	},
	{ threshold: 0.1 }
)
</script>

<template>
	<div ref="imageRef">
		<img v-if="isVisible" src="/image.jpg" alt="Lazy loaded" />
	</div>
</template>
```

---

## ✨ tsParticles - Частицы в Hero

### Настройка

```vue
<script setup lang="ts">
import { loadSlim } from '@tsparticles/slim'

const particlesInit = async (engine: any) => {
	await loadSlim(engine)
}

const particlesConfig = {
	background: {
		color: 'transparent',
	},
	particles: {
		number: {
			value: 50,
			density: {
				enable: true,
				area: 800,
			},
		},
		color: {
			value: '#ffffff',
		},
		opacity: {
			value: 0.3,
			random: true,
		},
		size: {
			value: 2,
			random: true,
		},
		move: {
			enable: true,
			speed: 0.5,
			direction: 'none',
			random: false,
			straight: false,
			outModes: 'out',
		},
		links: {
			enable: true,
			distance: 150,
			color: '#ffffff',
			opacity: 0.1,
			width: 1,
		},
	},
	interactivity: {
		events: {
			onHover: {
				enable: true,
				mode: 'grab',
			},
		},
		modes: {
			grab: {
				distance: 200,
				links: {
					opacity: 0.3,
				},
			},
		},
	},
}
</script>

<template>
	<Particles
		id="tsparticles"
		:options="particlesConfig"
		:particles-init="particlesInit"
	/>
</template>
```

---

## 🎭 Motion One - Легковесные анимации

### Простые fade-in

```ts
import { animate } from 'motion'

// Fade in элемента
animate(
	'.element',
	{ opacity: [0, 1], y: [20, 0] },
	{ duration: 0.5, easing: 'ease-out' }
)

// Stagger анимация
animate(
	'.list-item',
	{ opacity: [0, 1], x: [-20, 0] },
	{ duration: 0.4, delay: stagger(0.1) }
)
```

---

## 🔥 Лучшие практики

### 1. Performance

```ts
// Используй transform и opacity (GPU-ускорение)
gsap.to('.element', { x: 100, opacity: 0.5 }) // ✅ Хорошо
gsap.to('.element', { left: '100px', opacity: 0.5 }) // ❌ Медленно

// Включи force3D для GSAP
gsap.config({ force3D: true })

// Lazy load тяжелых библиотек
const loadGSAP = async () => {
	const { gsap } = await import('gsap')
	return gsap
}
```

### 2. Accessibility

```scss
// Отключение анимаций для prefers-reduced-motion
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

```ts
// В JS
const prefersReducedMotion = window.matchMedia(
	'(prefers-reduced-motion: reduce)'
).matches

if (!prefersReducedMotion) {
	// Запускаем анимации
	gsap.from('.hero', { opacity: 0, duration: 1 })
}
```

### 3. Cleanup

```ts
// Очистка GSAP анимаций при unmount
onUnmounted(() => {
	ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
	gsap.killTweensOf('*')
})
```

---

## 📊 Таблица сравнения библиотек

| Критерий            | GSAP        | Motion One | VueUse    | Lenis     |
| ------------------- | ----------- | ---------- | --------- | --------- |
| **Размер**          | ~50KB       | ~5KB       | ~20KB     | ~10KB     |
| **Кривая обучения** | Средняя     | Простая    | Простая   | Простая   |
| **Возможности**     | Максимум    | Базовые    | Утилиты   | Scroll    |
| **Performance**     | Отлично     | Отлично    | Отлично   | Отлично   |
| **Цена**            | Бесплатно\* | Бесплатно  | Бесплатно | Бесплатно |

\*Некоторые плагины GSAP платные (SplitText, MorphSVG)

---

## 🎬 Финальный чеклист

- [ ] GSAP + ScrollTrigger установлены и настроены
- [ ] Lenis работает для smooth scroll
- [ ] VueUse подключен через Nuxt модуль
- [ ] Particles настроены для Hero секции
- [ ] Все анимации используют GPU (transform/opacity)
- [ ] Reduced motion media query реализован
- [ ] Cleanup при unmount компонентов
- [ ] Lazy loading для тяжелых библиотек
- [ ] Fallbacks для старых браузеров

---

**Happy animating! 🚀✨**
