<template>
  <section id="hero" class="section-block" v-motion="heroMotion">
    <div class="layout-container">
      <div ref="heroRef" class="hero-wrapper" v-motion="wrapperMotion">
        <div ref="bgLayer" class="hero-decoration" />

        <div class="flex flex-wrap gap-2">
          <span class="badge-accent">{{ heroContent.eyebrow }}</span>
          <span class="pill">DevOps в комплекте</span>
        </div>

        <header class="mt-8 space-y-6">
          <h1 class="hero-title font-display">
            {{ heroContent.title }}
          </h1>
          <p class="hero-subtitle">
            {{ heroContent.subtitle }}
          </p>
        </header>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <NuxtLink :to="heroContent.primaryCta.href" class="btn-primary">
            {{ heroContent.primaryCta.label }}
          </NuxtLink>
          <NuxtLink :to="heroContent.secondaryCta.href" class="btn-secondary">
            {{ heroContent.secondaryCta.label }}
          </NuxtLink>
          <NuxtLink :to="heroContent.tertiaryCta.href" class="btn-ghost">
            {{ heroContent.tertiaryCta.label }}
            <Icon name="heroicons:arrow-up-right" class="h-4 w-4" aria-hidden="true" />
          </NuxtLink>
        </div>

        <div class="metrics-strip" v-motion="metricsMotion">
          <article
            v-for="metric in heroContent.metrics"
            :key="metric.label"
            class="metric-card"
          >
            <span class="metric-label">{{ metric.label }}</span>
            <span class="metric-value">{{ metric.value }}</span>
            <span class="metric-detail">{{ metric.detail }}</span>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Секция героя с параллаксом для создания вау-эффекта
import { Icon } from '@iconify/vue'
import { usePreferredReducedMotion } from '@vueuse/core'
import type { MotionVariants } from '@vueuse/motion'
import { heroContent } from '~/utils/content'

const heroRef = ref<HTMLElement | null>(null)
const bgLayer = ref<HTMLElement | null>(null)
const prefersReducedMotion = usePreferredReducedMotion()

// Анимация появления секции героя
const heroMotion = computed<MotionVariants>(() => ({
  initial: {
    opacity: 0,
    y: 24
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      easing: 'easeOut'
    }
  }
}))

const wrapperMotion = computed<MotionVariants>(() => ({
  initial: { opacity: 0, scale: 0.98 },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: 0.1
    }
  }
}))

const metricsMotion = computed<MotionVariants>(() => ({
  initial: { opacity: 0, y: 32 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.8,
      easing: 'easeOut'
    }
  }
}))

// Параллакс фона при скролле
const updateParallax = () => {
  if (!heroRef.value || !bgLayer.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const viewport = window.innerHeight + rect.height
  const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / viewport))
  const translateY = (progress - 0.5) * 140
  const scale = 1 + progress * 0.18
  const opacity = 0.35 + progress * 0.35
  bgLayer.value.style.setProperty('--hero-base-y', `${translateY}px`)
  bgLayer.value.style.setProperty('--hero-scale', `${scale}`)
  bgLayer.value.style.setProperty('--hero-opacity', `${opacity}`)
}

// Реакция фона на движение курсора
const onPointerMove = (event: PointerEvent) => {
  if (prefersReducedMotion.value || !heroRef.value || !bgLayer.value) return
  const rect = heroRef.value.getBoundingClientRect()
  const offsetX = ((event.clientX - rect.left) / rect.width - 0.5) * 26
  const offsetY = ((event.clientY - rect.top) / rect.height - 0.5) * 32
  bgLayer.value.style.setProperty('--hero-pointer-x', `${offsetX}px`)
  bgLayer.value.style.setProperty('--hero-pointer-y', `${offsetY}px`)
}

const resetPointer = () => {
  bgLayer.value?.style.setProperty('--hero-pointer-x', '0px')
  bgLayer.value?.style.setProperty('--hero-pointer-y', '0px')
}

onMounted(() => {
  updateParallax()
  window.addEventListener('scroll', updateParallax, { passive: true })
  window.addEventListener('resize', updateParallax)
  heroRef.value?.addEventListener('pointermove', onPointerMove)
  heroRef.value?.addEventListener('pointerleave', resetPointer)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateParallax)
  window.removeEventListener('resize', updateParallax)
  heroRef.value?.removeEventListener('pointermove', onPointerMove)
  heroRef.value?.removeEventListener('pointerleave', resetPointer)
})
</script>

