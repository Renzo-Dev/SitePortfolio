<template>
	<section id="hero" class="hero">
		<!-- Canvas для particles -->
		<canvas ref="particlesCanvas" class="hero__particles" />

		<div class="container">
			<div class="hero__content">
				<!-- Главный заголовок -->
				<h1 class="hero__title text-gradient">
					Создаю современные сайты и веб-приложения
				</h1>

				<!-- Подзаголовок -->
				<p class="hero__subtitle">
					Frontend + Backend разработка на Vue, Laravel, Docker, Redis и MySQL
				</p>

				<!-- CTA кнопки -->
				<div class="hero__cta">
					<Button variant="primary" @click="scrollToSection('portfolio')">
						<Icon name="ph:briefcase-duotone" size="20" />
						Посмотреть работы
					</Button>
					<Button variant="secondary" @click="scrollToSection('contact')">
						<Icon name="ph:rocket-launch-duotone" size="20" />
						Заказать разработку
					</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import Button from '~/components/ui/Button.vue'

// Используем smooth scroll из layout
const scrollTo =
	inject<(target: string, options?: Record<string, unknown>) => void>(
		'scrollTo'
	)

const scrollToSection = (id: string) => {
	if (scrollTo) {
		scrollTo(`#${id}`, { offset: -80 })
	} else {
		const element = document.getElementById(id)
		element?.scrollIntoView({ behavior: 'smooth' })
	}
}

// Canvas Particles
const particlesCanvas = ref<HTMLCanvasElement>()
const { initParticles } = useParticles(particlesCanvas)

onMounted(() => {
	const cleanup = initParticles({
		numberOfParticles: 50,
		connectionDistance: 150,
		mouseRadius: 100,
		particleColor: 'rgba(255, 255, 255, 0.3)',
		lineColor: 'rgba(255, 255, 255, 0.11)',
		opacity: 1,
	})

	onUnmounted(() => {
		cleanup?.()
	})
})
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.hero {
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: 80px;
	overflow: hidden;

	&__particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
		opacity: 0.6;
	}

	&__content {
		position: relative;
		z-index: 1;
		text-align: center;
		max-width: 900px;
		margin: 0 auto;
	}

	&__title {
		font-size: $text-h1;
		line-height: $line-h1;
		margin-bottom: $spacing-lg;

		@include mobile {
			font-size: clamp(32px, 10vw, 48px);
		}
	}

	&__subtitle {
		font-size: $text-body-lg;
		color: $text-secondary;
		margin-bottom: $spacing-2xl;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;

		@include mobile {
			font-size: $text-body;
		}
	}

	&__cta {
		display: flex;
		gap: $spacing-md;
		justify-content: center;
		flex-wrap: wrap;

		@include mobile {
			flex-direction: column;
			align-items: stretch;
		}
	}
}
</style>
