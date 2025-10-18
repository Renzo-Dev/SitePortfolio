<template>
	<section id="hero" ref="heroSection" class="hero">
		<!-- Animated gradient background -->
		<div class="hero__gradient" />

		<!-- Canvas для particles -->
		<canvas ref="particlesCanvas" class="hero__particles" />

		<!-- Floating shapes -->
		<div class="hero__shapes">
			<div class="shape shape--1" />
			<div class="shape shape--2" />
			<div class="shape shape--3" />
		</div>

		<div class="container">
			<div ref="heroContent" class="hero__content">
				<!-- Главный заголовок с анимацией по словам -->
				<h1 class="hero__title text-gradient">
					<span
						v-for="(word, index) in titleWords"
						:key="index"
						class="word"
						:style="{ animationDelay: `${0.1 + index * 0.1}s` }"
					>
						{{ word }}&nbsp;
					</span>
				</h1>

				<!-- Подзаголовок -->
				<p class="hero__subtitle">
					Frontend + Backend разработка на Vue, Laravel, Docker, Redis и MySQL
				</p>

				<!-- CTA кнопки -->
				<div class="hero__cta">
					<Button
						variant="primary"
						@click="scrollToSection('portfolio')"
						@mousemove="handleButtonHover"
					>
						<Icon name="ph:briefcase-duotone" size="20" />
						Посмотреть работы
					</Button>
					<Button
						variant="secondary"
						@click="scrollToSection('contact')"
						@mousemove="handleButtonHover"
					>
						<Icon name="ph:rocket-launch-duotone" size="20" />
						Заказать разработку
					</Button>
				</div>

				<!-- Scroll indicator -->
				<div class="hero__scroll">
					<span class="scroll-text">Прокрути вниз</span>
					<div class="scroll-line" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Разбиваем текст заголовка на слова для анимации
const titleWords = ref([
	'Создаю',
	'современные',
	'сайты',
	'и',
	'веб-приложения',
])

// Refs
const heroSection = ref<HTMLElement>()
const heroContent = ref<HTMLElement>()

// Плавный скролл к секциям через Lenis (fallback на нативный)
const scrollToSection = inject<(id: string, offset?: number) => void>(
	'scrollToSection',
	(id: string) => {
		// Fallback на нативный скролл если Lenis не доступен
		const element = document.getElementById(id)
		if (element) {
			const offset = 80
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth',
			})
		}
	}
)

// Ripple effect для кнопок (Google Material Design style)
const handleButtonHover = (event: MouseEvent) => {
	const button = event.currentTarget as HTMLElement
	const rect = button.getBoundingClientRect()
	const x = ((event.clientX - rect.left) / rect.width) * 100
	const y = ((event.clientY - rect.top) / rect.height) * 100

	button.style.setProperty('--ripple-x', `${x}%`)
	button.style.setProperty('--ripple-y', `${y}%`)
}

// Canvas Particles
const particlesCanvas = ref<HTMLCanvasElement>()
const { initParticles } = useParticles(particlesCanvas)

// Parallax эффект для контента
useParallax(heroContent, {
	speed: 0.5, // Скорость параллакса
	fadeOut: true, // Fade out при скролле
	maxDistance: 0, // Будет использована высота секции
})

onMounted(() => {
	// Инициализация particles с адаптивными настройками
	const cleanup = initParticles({
		particleColor: 'rgba(255, 255, 255, 0.4)',
		lineColor: 'rgba(255, 255, 255, 0.15)',
	})

	onUnmounted(() => {
		cleanup?.()
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/hero-section';
</style>
