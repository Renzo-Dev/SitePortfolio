<template>
  <section id="insights" class="section-block reveal">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Инсайты</span>
        <h2 class="section-title font-display">Практика, которой делюсь с командами</h2>
        <p class="section-subtitle">Опыт внедрения кешей, миграций и CI/CD — быстрые заметки, помогающие не тратить время на изобретение велосипеда.</p>
      </header>

      <div class="insights-grid">
        <article
          v-for="(insight, index) in insightsContent"
          :key="insight.title"
          class="insight-card"
          v-motion="cardMotion(index)"
        >
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">{{ insight.title }}</h3>
          <p class="mt-4 text-sm text-[var(--color-text-muted)]">{{ insight.summary }}</p>
          <NuxtLink to="#contact" class="mt-6 inline-flex items-center gap-2 text-sm text-[var(--color-highlight)] transition hover:opacity-80">
            Обсудить подробнее
            <Icon name="heroicons:arrow-up-right" class="h-4 w-4" />
          </NuxtLink>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { MotionVariants } from '@vueuse/motion'
import { insightsContent } from '~/utils/content'

const headerMotion = {
  initial: { opacity: 0, y: 18 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 24 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.15
    }
  }
}) satisfies MotionVariants
</script>

