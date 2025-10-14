<template>
	<div>
		<!-- Hero секция -->
		<HeroSection />

		<!-- Обо мне -->
		<AboutSection />

		<!-- Услуги -->
		<ServicesSection />

		<!-- Портфолио -->
		<PortfolioSection />

		<!-- Личные кейсы -->
		<CaseStudiesSection />

		<!-- Отзывы -->
		<TestimonialsSection />

		<!-- Контакты -->
		<ContactSection />
	</div>
</template>

<script setup lang="ts">
// SEO и мета-теги для главной страницы
useHead({
	title: 'Дан Кошевой — Full-Stack разработчик | Vue, Nuxt, Laravel, Docker',
	meta: [
		{
			name: 'description',
			content:
				'Профессиональная разработка сайтов и веб-приложений. Опыт 3+ лет. Vue 3, Nuxt 4, Laravel, Docker, Redis, MySQL. Создаю современные решения под ключ.',
		},
		{
			name: 'keywords',
			content:
				'fullstack разработчик, vue разработчик, nuxt разработчик, laravel разработчик, веб-разработка',
		},
		// Open Graph
		{
			property: 'og:title',
			content: 'Дан Кошевой — Full-Stack разработчик',
		},
		{
			property: 'og:description',
			content:
				'Профессиональная разработка сайтов и веб-приложений. Vue, Nuxt, Laravel, Docker.',
		},
		{
			property: 'og:type',
			content: 'website',
		},
		// Twitter Card
		{
			name: 'twitter:card',
			content: 'summary_large_image',
		},
		{
			name: 'twitter:title',
			content: 'Дан Кошевой — Full-Stack разработчик',
		},
		{
			name: 'twitter:description',
			content:
				'Профессиональная разработка сайтов и веб-приложений. Vue, Nuxt, Laravel, Docker.',
		},
	],
})
</script>

<style lang="scss" scoped>
// Дополнительные стили для страницы (если нужны)
</style>
