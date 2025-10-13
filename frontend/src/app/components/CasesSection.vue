<template>
  <section id="cases" class="section-block reveal">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Кейсы</span>
        <h2 class="section-title font-display">Проекты, где fullstack + DevOps решали бизнес-задачи</h2>
        <p class="section-subtitle">
          От SaaS до медтеха: внедряю архитектуру, пайплайны и метрики, чтобы команда быстрее достигала результата.
        </p>
      </header>

      <div class="case-grid">
        <article
          v-for="(item, index) in casesContent"
          :key="item.name"
          class="case-card"
          v-motion="cardMotion(index)"
        >
          <div class="case-meta">
            <span>{{ item.name }}</span>
            <span>{{ item.role }}</span>
          </div>
          <p class="mt-4 text-xs uppercase tracking-[0.28em] text-[var(--color-highlight)]">
            {{ item.stack.join(' · ') }}
          </p>
          <p class="mt-4 text-[var(--color-text-muted)]">{{ item.context }}</p>
          <p class="mt-4 text-[var(--color-text-muted)]">{{ item.solution }}</p>
          <p class="mt-4 font-medium text-[var(--color-text-primary)]">{{ item.result }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MotionVariants } from '@vueuse/motion'
import { casesContent } from '~/utils/content'

const headerMotion = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const cardMotion = (index: number) => ({
  initial: {
    opacity: 0,
    y: 24
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12
    }
  }
}) satisfies MotionVariants
</script>

