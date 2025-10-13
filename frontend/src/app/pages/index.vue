<template>
  <div class="page-wrapper">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <CasesSection />
    <ProcessSection />
    <SkillsSection />
    <InsightsSection />
    <TestimonialsSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Dan Koshevoy — Fullstack & DevOps',
  description:
    'Fullstack разработчик: Nuxt 4, Laravel, DevOps и CI/CD. Проектирую архитектуру, внедряю инфраструктуру и запуск MVP за 4–6 недель.',
  ogTitle: 'Dan Koshevoy — Fullstack & DevOps',
  ogDescription:
    'Fullstack разработчик: Nuxt 4, Laravel, Docker. Сайты и SaaS под ключ, автоматизация процессов, DevOps по умолчанию.',
  ogImage: '/og-cover.jpg'
})

onMounted(() => {
  if (process.client) {
    console.info('[landing] page_view', { page: 'landing_home' })
  }
})
</script>

