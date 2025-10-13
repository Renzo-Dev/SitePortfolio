<template>
  <section id="services" class="section-block reveal" v-motion="sectionMotion">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Услуги</span>
        <h2 class="section-title font-display">Комплексные услуги с DevOps и поддержкой</h2>
        <p class="section-subtitle">
          Готов подключиться на любом этапе: от discovery и MVP до масштабирования и автоматизации.
        </p>
      </header>

      <div class="grid gap-6 lg:grid-cols-2">
        <article
          v-for="(service, index) in servicesContent"
          :key="service.key"
          class="stroke-card p-8"
          v-motion="cardMotion(index)"
        >
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-[var(--color-text-muted)]">
            {{ service.summary }}
          </p>
          <ul class="mt-6 space-y-3 text-sm text-[var(--color-text-muted)]">
            <li v-for="item in service.bullets" :key="item" class="flex items-start gap-3">
              <Icon name="heroicons:sparkles" class="mt-0.5 h-4 w-4 text-[var(--color-highlight)]" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Карточки услуг в формате табов
import type { MotionVariants } from '@vueuse/motion'
import { servicesContent } from '~/utils/content'

const sectionMotion = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const headerMotion = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.05 } }
} satisfies MotionVariants

const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 26 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12
    }
  }
}) satisfies MotionVariants
</script>

