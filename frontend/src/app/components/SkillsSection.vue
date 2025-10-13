<template>
  <section id="skills" class="section-block reveal">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Навыки</span>
        <h2 class="section-title font-display">Fullstack-экспертиза с DevOps и архитектурой</h2>
        <p class="section-subtitle">
          Фронтенд, бекенд и инфраструктура — работаю как единое целое, чтобы продукт не терял скорость.
        </p>
      </header>

      <div class="skills-grid">
        <article
          v-for="(area, index) in skillsContent.areas"
          :key="area.title"
          class="skills-card"
          v-motion="cardMotion(index)"
        >
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">{{ area.title }}</h3>
          <ul class="mt-4 space-y-2 text-sm text-[var(--color-text-muted)]">
            <li v-for="item in area.items" :key="item" class="flex items-start gap-2">
              <span class="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-highlight)]" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MotionVariants } from '@vueuse/motion'
import { skillsContent } from '~/utils/content'

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

