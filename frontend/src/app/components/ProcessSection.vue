<template>
  <section id="process" class="section-block reveal">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Процесс</span>
        <h2 class="section-title font-display">Пошаговая работа с измеримыми результатами</h2>
        <p class="section-subtitle">
          Каждая фаза закрывается конкретным артефактом: от архитектуры и прототипов до CI/CD и мониторинга.
        </p>
      </header>

      <div ref="timelineRef" class="timeline">
        <div
          v-for="(step, index) in processContent"
          :key="step.title"
          class="timeline-step stroke-card p-6"
          v-motion="stepMotion(index)"
          :ref="setStepRef"
        >
          <span class="timeline-pin" aria-hidden="true" />
          <div class="text-xs uppercase tracking-[0.24em] text-[var(--color-highlight)]">{{ step.caption }}</div>
          <h3 class="mt-3 text-xl font-semibold text-[var(--color-text-primary)]">{{ step.title }}</h3>
          <p class="mt-3 text-sm text-[var(--color-text-muted)]">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { Context } from 'gsap'
import type { MotionVariants } from '@vueuse/motion'
import { processContent } from '~/utils/content'

const timelineRef = ref<HTMLElement | null>(null)
const stepElements = ref<HTMLElement[]>([])

const setStepRef = (el: Element | ComponentPublicInstance | null) => {
  if (el && el instanceof HTMLElement && !stepElements.value.includes(el)) {
    stepElements.value.push(el)
  }
}

const headerMotion = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const stepMotion = (index: number) => ({
  initial: { opacity: 0, x: -24 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.15
    }
  }
}) satisfies MotionVariants

let gsapContext: Context | null = null

// Инициализация GSAP ScrollTrigger для таймлайна
onMounted(() => {
  if (process.server) return
  const { $gsap, $scrollTrigger } = useNuxtApp()
  if (!$gsap || !$scrollTrigger || !timelineRef.value) return

  // Создаём контекст для удобной очистки
  gsapContext = $gsap.context(() => {
    $gsap.utils.toArray(stepElements.value).forEach((el: HTMLElement) => {
      $gsap.to(el, {
        '--step-progress': 1,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      })

      $gsap.to(el.querySelector('.timeline-pin'), {
        scale: 1.15,
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      })
    })
  }, timelineRef.value)
})

onBeforeUnmount(() => {
  gsapContext?.revert()
})
</script>

