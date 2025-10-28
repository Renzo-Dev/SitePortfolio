export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: false },
	modules: [
		'@nuxt/eslint',
		'@nuxt/image',
		'@nuxt/icon',
		'@vueuse/nuxt',
		'@nuxthub/core',
	],

	// NuxtHub конфигурация для Cloudflare Pages
	hub: {
		cache: true, // Кэширование на Cloudflare KV
	},

	nitro: {
		preset: 'cloudflare-pages',
	},

	css: ['~/assets/styles/main.scss'],

	// Явно указываем что используем pages
	pages: true,

	// Отключаем избыточные логи в dev режиме
	features: {
		devLogs: false,
	},

	app: {
		head: {
			title: 'Dan Koshevoy - Full Stack Developer',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content:
						'Создаю современные сайты и веб-приложения. Frontend + Backend разработка на Vue, Laravel, Docker.',
				},
				// Google Search Console верификация
				{
					name: 'google-site-verification',
					content: 'WNZiK8uBYj0rVbZN3vjEbqF1lDO57xZOJ0ib8SkzFGU',
				},
				// Яндекс.Вебмастер верификация
				{
					name: 'yandex-verification',
					content: '91e10ccbbda52de8',
				},
			],
			link: [
				// Favicon
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{
					rel: 'icon',
					type: 'image/png',
					sizes: '32x32',
					href: '/favicon.ico',
				},
				{ rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.svg' },
				// Fonts
				{
					rel: 'preconnect',
					href: 'https://fonts.googleapis.com',
				},
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'anonymous',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
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

	runtimeConfig: {
		telegramBotToken: '',
		telegramChatId: '',
		turnstileSecretKey: '',
		public: {
			turnstileSiteKey: '',
		},
	},
})
