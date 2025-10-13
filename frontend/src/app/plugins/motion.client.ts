// Плагин VueUse Motion для декларативных анимаций
import { MotionPlugin } from '@vueuse/motion'

export default defineNuxtPlugin((nuxtApp) => {
  // Подключаем Motion глобально (v-motion директива)
  nuxtApp.vueApp.use(MotionPlugin)
})

