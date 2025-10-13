<template>
  <header :class="['site-header', { 'is-condensed': isCondensed }]">
    <div class="relative layout-container flex items-center justify-between gap-6 py-4">
      <NuxtLink to="#hero" class="flex items-center gap-3 text-sm font-medium">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-highlight)]/30 bg-[var(--color-card)] font-display text-[var(--color-highlight)]">
          DK
        </span>
        <span class="hidden md:flex flex-col text-xs text-[var(--color-text-muted)]">
          <span class="text-sm font-semibold text-[var(--color-text-primary)]">Dan Koshevoy</span>
          Fullstack · DevOps
        </span>
      </NuxtLink>

      <nav class="hidden lg:flex items-center gap-8 text-sm">
        <NuxtLink
          v-for="link in navigationLinks"
          :key="link.href"
          :href="link.href"
          class="relative text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)]"
        >
          {{ link.label }}
          <span class="absolute inset-x-0 -bottom-2 h-px scale-x-0 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-accent)] transition-transform duration-300 group-hover:scale-x-100" />
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <a
          href="https://t.me/renzo_pw"
          target="_blank"
          rel="noopener"
          class="hidden md:inline-flex items-center gap-2 rounded-full border border-[var(--color-highlight)]/50 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[var(--color-highlight)] transition hover:bg-[var(--color-highlight)] hover:text-[#05070d]"
        >
          Telegram
          <Icon name="heroicons:paper-airplane" class="h-4 w-4" />
        </a>
        <button class="inline-flex items-center justify-center rounded-full border border-[var(--color-stroke)] bg-[var(--color-card)] p-2 text-[var(--color-text-muted)] transition hover:border-[var(--color-highlight)]/50 hover:text-[var(--color-text-primary)]" @click="toggleMenu">
          <Icon name="heroicons:bars-3" class="h-6 w-6" />
        </button>
      </div>

      <div class="scroll-progress" aria-hidden="true" />
    </div>

    <Transition name="fade">
      <div v-if="isMenuOpen" class="lg:hidden">
        <div class="border-t border-[var(--color-stroke)]/60 bg-[var(--color-card)]/90 backdrop-blur-xl">
          <div class="layout-container flex flex-col gap-4 py-6 text-sm">
            <NuxtLink
              v-for="link in navigationLinks"
              :key="link.href"
              :href="link.href"
              class="py-2 text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)]"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
            <a
              href="mailto:dankoshevoy@gmail.com"
              class="btn-primary justify-center"
              @click="closeMenu"
            >
              Написать письмо
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
// Шапка с прогресс-баром скролла и адаптивным меню
import { navigationLinks } from '~/utils/content'

const isCondensed = ref(false)
const isMenuOpen = ref(false)

// Обновление прогресс-бара и состояния шапки при скролле
const updateScrollState = () => {
  const scrollY = window.scrollY
  const doc = document.documentElement
  const scrollableHeight = doc.scrollHeight - doc.clientHeight
  const progress = scrollableHeight > 0 ? scrollY / scrollableHeight : 0
  document.documentElement.style.setProperty('--scroll-progress', progress.toString())
  const progressEl = document.querySelector<HTMLElement>('.scroll-progress')
  if (progressEl) {
    progressEl.style.setProperty('--scroll-progress', progress.toString())
    progressEl.style.transform = `scaleX(${progress})`
  }
  isCondensed.value = scrollY > 120
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })
  window.addEventListener('resize', updateScrollState)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('resize', updateScrollState)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

