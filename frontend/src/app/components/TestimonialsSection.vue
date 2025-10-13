<template>
  <section id="testimonials" class="section-block reveal">
    <div class="layout-container">
      <header class="section-heading" v-motion="headerMotion">
        <span class="section-eyebrow">Отзывы</span>
        <h2 class="section-title font-display">Команды возвращаются за внедрениями и поддержкой</h2>
      </header>

      <div class="testimonials-shell" v-motion="sliderMotion">
        <Splide :options="sliderOptions" aria-label="Отзывы клиентов">
          <SplideSlide v-for="(item, index) in testimonialsContent" :key="item.quote">
            <blockquote class="testimonial-card" v-motion="slideMotion(index)">
              <p>“{{ item.quote }}”</p>
              <footer class="flex flex-col text-sm text-[var(--color-text-muted)]">
                <span class="text-[var(--color-text-primary)] font-medium">{{ item.author }}</span>
                <span>{{ item.company }}</span>
              </footer>
            </blockquote>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import type { MotionVariants } from '@vueuse/motion'
import { testimonialsContent } from '~/utils/content'

const sliderOptions = {
  type: 'loop',
  autoplay: true,
  interval: 5000,
  arrows: false,
  pagination: true,
  pauseOnHover: true
}

const headerMotion = {
  initial: { opacity: 0, y: 16 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.6 } }
} satisfies MotionVariants

const sliderMotion = {
  initial: { opacity: 0, scale: 0.96 },
  enter: { opacity: 1, scale: 1, transition: { duration: 0.65, delay: 0.1 } }
} satisfies MotionVariants

const slideMotion = (index: number) => ({
  initial: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.1
    }
  }
}) satisfies MotionVariants
</script>

