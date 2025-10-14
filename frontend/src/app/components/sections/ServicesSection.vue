<template>
	<section id="services" class="section" style="background-color: #f8fafc">
		<div class="container">
			<h2 class="section-title">Услуги</h2>
			<p class="section-subtitle">Чем могу быть полезен вашему проекту</p>

			<!-- Карточки услуг -->
			<div class="services">
				<BaseCard
					v-for="service in services"
					:key="service.title"
					variant="elevated"
					hoverable
				>
					<div class="service">
						<!-- Иконка -->
						<div class="service__icon">
							<Icon :name="service.icon" />
						</div>

						<!-- Заголовок -->
						<h3 class="service__title">{{ service.title }}</h3>

						<!-- Описание -->
						<p class="service__description">{{ service.description }}</p>
					</div>
				</BaseCard>
			</div>

			<!-- CTA -->
			<div class="services__cta">
				<BaseButton
					variant="primary"
					size="lg"
					@click="scrollToSection('contact')"
				>
					Обсудить проект
				</BaseButton>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Услуги
const services = [
	{
		icon: 'heroicons:code-bracket',
		title: 'Разработка под ключ',
		description: 'Сайты, SPA-приложения, SaaS-сервисы — от идеи до продакшена.',
	},
	{
		icon: 'heroicons:server',
		title: 'Backend-разработка',
		description:
			'API, интеграции, система авторизации, админ-панели, автоматизация.',
	},
	{
		icon: 'heroicons:paint-brush',
		title: 'Frontend-разработка',
		description:
			'Современные интерфейсы на Vue 3 / Nuxt / Pinia, адаптивная верстка.',
	},
	{
		icon: 'heroicons:rocket-launch',
		title: 'Оптимизация и поддержка',
		description:
			'Ускорение загрузки, настройка SEO, технический аудит, исправление ошибок.',
	},
	{
		icon: 'heroicons:cloud',
		title: 'DevOps / Docker / Nginx',
		description:
			'Сборка и деплой проектов, CI/CD, мониторинг, настройка серверов.',
	},
]

// Плавный скролл к секции
const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId)
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}
</script>

<style lang="scss" scoped>
.services {
	display: grid;
	grid-template-columns: 1fr;
	gap: $space-6;
	margin-bottom: $space-12;

	@include respond-to('md') {
		grid-template-columns: repeat(2, 1fr);
		gap: $space-8;
	}

	@include respond-to('lg') {
		grid-template-columns: repeat(3, 1fr);
	}

	// CTA кнопка
	&__cta {
		display: flex;
		justify-content: center;
		margin-top: $space-8;
	}
}

.service {
	display: flex;
	flex-direction: column;
	gap: $space-4;
	min-height: 100%;

	// Иконка
	&__icon {
		width: 56px;
		height: 56px;
		border-radius: $rounded-lg;
		@include gradient($primary, $secondary);
		color: $white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28px;
	}

	// Заголовок
	&__title {
		font-size: $text-xl;
		font-weight: 600;
		color: $dark;
		margin: 0;

		@include respond-to('md') {
			font-size: $text-2xl;
		}
	}

	// Описание
	&__description {
		font-size: $text-base;
		color: $gray;
		line-height: 1.6;
		margin: 0;
	}
}
</style>
