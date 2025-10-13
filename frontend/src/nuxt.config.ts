// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  srcDir: 'app/',

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/styles/main.css'],

  runtimeConfig: {
    telegramToken: '', // 🔒 Токен задаётся через переменные окружения
    public: {
      siteName: 'Dan Koshevoy · Fullstack & DevOps',
      siteUrl: 'https://dankoshevoy.dev',
      telegramChatId: ''
    }
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: false
  },

  app: {
    head: {
      title: 'Dan Koshevoy — Fullstack & DevOps',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Полный цикл разработки: архитектура, backend на Laravel, frontend на Nuxt 4, DevOps и CI/CD. Запуск MVP за 4–6 недель.'
        },
        { name: 'theme-color', content: '#05070d' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Dan Koshevoy — Fullstack & DevOps' },
        {
          property: 'og:description',
          content:
            'Fullstack разработчик: Nuxt 4, Laravel, Docker, DevOps. Проекты под ключ и техническое руководство командами.'
        },
        { property: 'og:image', content: '/og-cover.jpg' } // 📌 Изображение добавлю на этапе медиа
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  }
})
