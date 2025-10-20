<template>
	<section id="about" class="about section">
		<div class="container">
			<div class="about__grid">
				<!-- Левая часть - фото с 3D эффектом -->
				<div
					ref="imageWrapper"
					class="about__image-wrapper"
					@mousemove="handleImageHover"
					@mouseleave="resetImageHover"
				>
					<div ref="imageContainer" class="about__image-container">
						<img
							src="/images/photo-1571171637578-41bc2dd41cd2.jpg"
							alt="Dan Koshevoy"
							class="about__image"
							width="600"
							height="800"
							loading="lazy"
						/>
					</div>
				</div>

				<!-- Правая часть - контент -->
				<div class="about__content">
					<h2 ref="titleRef" class="about__title">
						<Icon name="ph:user-circle-duotone" size="32" />
						Обо мне
					</h2>
					<p ref="textRef" class="about__text">
						Я — разработчик полного стека с опытом более
						<strong>3 лет коммерческой разработки</strong>. Люблю продумывать
						архитектуру и создавать чистый, поддерживаемый код.
					</p>

					<!-- Сильные стороны -->
					<div ref="strengthsRef" class="about__strengths">
						<h3 class="about__subtitle">
							<Icon name="ph:star-duotone" size="24" />
							Мои сильные стороны
						</h3>
						<ul class="about__list">
							<li
								v-for="(strength, index) in strengths"
								:key="index"
								class="about__list-item"
								:style="{ '--item-index': index }"
							>
								<Icon :name="strength.icon" size="20" />
								<span>{{ strength.text }}</span>
							</li>
						</ul>
					</div>

					<!-- Технологии -->
					<div ref="techRef" class="about__tech">
						<h3 class="about__subtitle">
							<Icon name="ph:code-duotone" size="24" />
							Технологии
						</h3>
						<div class="about__tech-grid">
							<Badge v-for="(tech, index) in technologies" :key="index">
								{{ tech }}
							</Badge>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Badge from '~/components/ui/Badge.vue'

const strengths = [
	{ icon: 'ph:strategy-duotone', text: 'Системный подход к проектам' },
	{ icon: 'ph:magnifying-glass-duotone', text: 'Внимание к деталям' },
	{ icon: 'ph:gauge-duotone', text: 'Оптимизация производительности' },
	{
		icon: 'ph:stack-duotone',
		text: 'Умение работать как с фронтендом, так и с бэкендом',
	},
]

const technologies = [
	'Vue 3',
	'Nuxt 4',
	'Laravel',
	'TypeScript',
	'Golang',
	'Node.js',
	'Docker',
	'Redis',
	'PostgreSQL',
	'RabbitMQ',
	'Nginx',
	'Pinia',
]

// Refs для элементов
const imageWrapper = ref<HTMLElement>()
const imageContainer = ref<HTMLElement>()
const titleRef = ref<HTMLElement>()
const textRef = ref<HTMLElement>()
const strengthsRef = ref<HTMLElement>()
const techRef = ref<HTMLElement>()

// Проверка на мобильные устройства
const isMobile = () => {
	return window.innerWidth <= 768 || 'ontouchstart' in window
}

// 3D эффект для фото при наведении мыши
const handleImageHover = (event: MouseEvent) => {
	if (!imageWrapper.value || !imageContainer.value) return

	// Отключаем 3D эффект на мобильных устройствах
	if (isMobile()) {
		return
	}

	const rect = imageWrapper.value.getBoundingClientRect()
	const x = event.clientX - rect.left
	const y = event.clientY - rect.top

	const centerX = rect.width / 2
	const centerY = rect.height / 2

	const rotateX = ((y - centerY) / centerY) * -10 // max 10deg
	const rotateY = ((x - centerX) / centerX) * 10 // max 10deg

	// Применяем transform к внутреннему контейнеру (не к wrapper с анимацией)
	imageContainer.value.style.transition = 'transform 0.1s ease-out'
	imageContainer.value.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
}

const resetImageHover = () => {
	if (!imageContainer.value) return

	// Отключаем сброс 3D эффекта на мобильных устройствах
	if (isMobile()) {
		return
	}

	// Плавный возврат в исходное положение
	imageContainer.value.style.transition =
		'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
	imageContainer.value.style.transform =
		'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
}

// Scroll reveal анимации
onMounted(() => {
	// Используем Intersection Observer для анимаций при скролле
	const observerOptions = {
		threshold: 0.2,
		rootMargin: '0px 0px -100px 0px',
	}

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-visible')

				// Для image wrapper - сбрасываем transform после анимации для работы 3D эффекта
				if (entry.target === imageWrapper.value) {
					setTimeout(() => {
						if (imageWrapper.value) {
							imageWrapper.value.style.transform = 'none'
						}
					}, 800) // Длительность анимации fadeInLeft
				}
			}
		})
	}, observerOptions)

	// Наблюдаем за элементами
	if (imageWrapper.value) {
		observer.observe(imageWrapper.value)
	}
	if (titleRef.value) observer.observe(titleRef.value)
	if (textRef.value) observer.observe(textRef.value)
	if (strengthsRef.value) observer.observe(strengthsRef.value)
	if (techRef.value) observer.observe(techRef.value)

	// Cleanup
	onUnmounted(() => {
		observer.disconnect()
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/components/about-section';
</style>
