<template>
	<section class="services section" id="services">
		<div class="container">
			<h2 class="services__title text-center">🛠 Что я делаю</h2>
			<p class="services__subtitle text-center text-secondary">
				Полный спектр разработки от идеи до продакшена
			</p>

			<div class="services__grid grid grid--3">
				<div
					v-for="(service, index) in services"
					:key="index"
					class="service-card"
				>
					<div class="service-card__icon">
						<Icon :name="service.icon" size="48" />
					</div>
					<h3 class="service-card__title">{{ service.title }}</h3>
					<p class="service-card__description">{{ service.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const services = [
	{
		icon: 'ph:code-duotone',
		title: 'Разработка под ключ',
		description: 'Сайты, SPA-приложения, SaaS-сервисы — от идеи до продакшена',
	},
	{
		icon: 'ph:database-duotone',
		title: 'Backend-разработка',
		description:
			'API, интеграции, система авторизации, админ-панели, автоматизация',
	},
	{
		icon: 'ph:palette-duotone',
		title: 'Frontend-разработка',
		description:
			'Современные интерфейсы на Vue 3 / Nuxt / Pinia, адаптивная верстка',
	},
	{
		icon: 'ph:rocket-launch-duotone',
		title: 'Оптимизация и поддержка',
		description:
			'Ускорение загрузки, настройка SEO, технический аудит, исправление ошибок',
	},
	{
		icon: 'ph:package-duotone',
		title: 'DevOps / Docker / Nginx',
		description:
			'Сборка и деплой проектов, CI/CD, мониторинг, настройка серверов',
	},
	{
		icon: 'ph:lightbulb-duotone',
		title: 'Консультации',
		description: 'Технический аудит, выбор стека, архитектурные решения',
	},
]

// Scroll reveal анимация
// Без анимаций
</script>

<style scoped lang="scss">
@use '~/assets/styles/variables' as *;

.services {
	&__title {
		font-size: $text-h2;
		margin-bottom: $spacing-md;
	}

	&__subtitle {
		margin-bottom: $spacing-3xl;
		font-size: $text-body-lg;
	}

	&__grid {
		margin-top: $spacing-2xl;
	}
}

.service-card {
	background: $bg-card;
	border: 1px solid $border;
	border-radius: $radius-lg;
	padding: $spacing-xl;
	transition: all $transition-base;

	&:hover {
		border-color: rgba(255, 255, 255, 0.2);
		transform: translateY(-8px);
		box-shadow: $shadow-lg;

		.service-card__icon {
			:deep(svg) {
				transform: rotate(5deg) scale(1.1);
				color: $accent;
			}
		}
	}

	&__icon {
		margin-bottom: $spacing-lg;

		:deep(svg) {
			color: rgba(255, 255, 255, 0.9);
			transition: all $transition-base;
		}
	}

	&__title {
		font-size: $text-h4;
		margin-bottom: $spacing-sm;
	}

	&__description {
		color: $text-secondary;
		line-height: $line-body;
	}
}
</style>
