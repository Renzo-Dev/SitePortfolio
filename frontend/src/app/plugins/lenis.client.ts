// Плагин плавного скролла Lenis
import Lenis from 'lenis'

export default defineNuxtPlugin(() => {
  if (process.server) return

  // Инициализация Lenis с кастомными параметрами
  const lenis = new Lenis({
    duration: 1.1,
    smooth: true,
    lerp: 0.08
  })

  // Цикл анимации
  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
})

