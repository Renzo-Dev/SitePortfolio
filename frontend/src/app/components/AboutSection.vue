<template>
  <section id="about" class="section-block reveal" v-motion="sectionMotion">
    <div class="layout-container grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
      <div class="space-y-8" v-motion="headerMotion">
        <span class="section-eyebrow">Обо мне</span>
        <h2 class="section-title font-display">
          Fullstack-разработчик, который любят DevOps и чистую архитектуру
        </h2>
        <p class="section-subtitle">
          {{ aboutContent.description }}
        </p>

        <ul class="grid gap-3 md:grid-cols-2">
          <li
            v-for="point in aboutContent.strengths"
            :key="point"
            class="flex items-start gap-3 text-[var(--color-text-muted)]"
          >
            <Icon name="heroicons:check-circle" class="mt-1 h-5 w-5 text-[var(--color-highlight)]" />
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>

      <div class="glass-card p-8" v-motion="cardMotion">
        <h3 class="text-sm uppercase tracking-[0.32em] text-[var(--color-highlight)]">
          Технологии и инструменты
        </h3>
        <ul class="mt-6 grid grid-cols-2 gap-3 text-sm text-[var(--color-text-muted)]">
          <li v-for="tech in aboutContent.technologies" :key="tech" class="rounded-full border border-[var(--color-stroke)]/70 px-3 py-2">
            {{ tech }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Блок с описанием и фокусом на сильных сторонах
import type { MotionVariants } from '@vueuse/motion'
import { aboutContent } from '~/utils/content'

const sectionMotion = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const headerMotion = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.05 } }
} satisfies MotionVariants

const cardMotion = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.18 } }
} satisfies MotionVariants
</script>

