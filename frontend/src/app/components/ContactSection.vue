<template>
  <section id="contact" class="section-block reveal" v-motion="sectionMotion">
    <div class="layout-container grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] items-start">
      <div class="space-y-6" v-motion="headerMotion">
        <span class="section-eyebrow">Связаться</span>
        <h2 class="section-title font-display">
          Опишите задачу — вернусь с предложением в течение суток
        </h2>
        <p class="section-subtitle">
          {{ contactContent.note }}
        </p>

        <ul class="space-y-3 text-sm text-[var(--color-text-muted)]">
          <li
            v-for="(channel, index) in contactContent.channels"
            :key="channel.type"
            v-motion="itemMotion(index)"
          >
            <a :href="channel.href" class="inline-flex items-center gap-3 transition hover:text-[var(--color-text-primary)]">
              <Icon name="heroicons:arrow-top-right-on-square" class="h-4 w-4 text-[var(--color-highlight)]" />
              <span class="font-medium text-[var(--color-text-primary)]">{{ channel.type }}:</span>
              <span>{{ channel.value }}</span>
            </a>
          </li>
        </ul>
      </div>

      <LeadForm v-motion="formMotion" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { MotionVariants } from '@vueuse/motion'
import { contactContent } from '~/utils/content'

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.65 } }
} satisfies MotionVariants

const headerMotion = {
  initial: { opacity: 0, y: 22 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.08 } }
} satisfies MotionVariants

const itemMotion = (index: number) => ({
  initial: { opacity: 0, x: -16 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.1 + 0.15
    }
  }
}) satisfies MotionVariants

const formMotion = {
  initial: { opacity: 0, y: 24 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.2 } }
} satisfies MotionVariants
</script>

