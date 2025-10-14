import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],

	// Автоматический импорт компонентов
	components: [
		{ path: resolve(currentDir, 'app/components'), pathPrefix: false },
		{ path: resolve(currentDir, 'app/components/base'), pathPrefix: false },
		{ path: resolve(currentDir, 'app/components/sections'), pathPrefix: false },
	],

	// Подключение глобальных стилей SCSS
	css: [resolve(currentDir, 'app/assets/styles/main.scss')],

	// Настройка Vite для SCSS
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						@use "sass:math";
						@import "${resolve(currentDir, 'app/assets/styles/abstracts/_variables.scss')}";
						@import "${resolve(currentDir, 'app/assets/styles/abstracts/_mixins.scss')}";
					`,
				},
			},
		},
	},

	// SEO и мета-теги
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Дан Кошевой — Full-Stack разработчик',
			meta: [
				{
					name: 'description',
					content:
						'Профессиональная разработка сайтов и веб-приложений. Vue, Nuxt, Laravel, Docker. 3+ лет опыта.',
				},
			],
			link: [
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: '',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
				},
			],
		},
	},
})
