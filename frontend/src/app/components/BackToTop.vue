<template>
  <button
    ref="btnRef"
    class="back-to-top"
    :class="{ 'is-visible': isVisible }"
    type="button"
    aria-label="Подняться наверх"
    @pointermove="onPointerMove"
    @pointerleave="resetPointer"
    @click="scrollTop"
  >
    <span class="relative flex h-9 w-9 items-center justify-center">
      <span class="absolute inset-0 rounded-full bg-[var(--color-highlight)]/15 blur-lg" />
      <svg class="relative h-4 w-4 text-[var(--color-text-primary)]" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 18V6m0 0-5 5m5-5 5 5"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  </button>
</template>

<script setup lang="ts">
// Кнопка быстрого подъёма со сглаженной анимацией
const btnRef = ref<HTMLButtonElement | null>(null)
const isVisible = ref(false)

const onScroll = () => {
  isVisible.value = window.scrollY > window.innerHeight * 0.25
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Магнитный эффект при наведении курсора
const onPointerMove = (event: PointerEvent) => {
  if (!btnRef.value) return
  const rect = btnRef.value.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 16
  btnRef.value.style.setProperty('--btn-offset-x', `${x}px`)
  btnRef.value.style.setProperty('--btn-offset-y', `${y}px`)
}

const resetPointer = () => {
  btnRef.value?.style.setProperty('--btn-offset-x', '0px')
  btnRef.value?.style.setProperty('--btn-offset-y', '0px')
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

