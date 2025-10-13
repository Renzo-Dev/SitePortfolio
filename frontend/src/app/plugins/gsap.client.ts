// Плагин GSAP для анимаций и ScrollTrigger
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  if (process.server) return

  // Регистрируем плагин ScrollTrigger
  gsap.registerPlugin(ScrollTrigger)

  // Делаем GSAP доступным во всех компонентах через $gsap
  return {
    provide: {
      gsap,
      scrollTrigger: ScrollTrigger
    }
  }
})

