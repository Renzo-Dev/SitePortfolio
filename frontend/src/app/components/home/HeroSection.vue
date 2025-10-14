<template>
	<section class="hero" id="hero">
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

// Используем Lenis smooth scroll из layout
const scrollTo = inject<(target: string, options?: any) => void>('scrollTo')

const scrollToSection = (id: string) => {
	if (scrollTo) {
		scrollTo(`#${id}`, { offset: -80 }) // Offset для header
	} else {
		// Fallback на нативный скролл
		const element = document.getElementById(id)
		element?.scrollIntoView({ behavior: 'smooth' })
	}
}
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
