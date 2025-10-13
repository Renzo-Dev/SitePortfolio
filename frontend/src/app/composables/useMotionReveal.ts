// Переиспользуемые варианты анимаций для reveal-эффектов
import type { MotionVariants } from '@vueuse/motion'

export const useMotionReveal = () => {
  // Базовая анимация появления
  const base = {
    initial: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  } satisfies MotionVariants

  // Анимация с задержкой для последовательного появления элементов
  const stagger = (index: number, offset = 0.12) => ({
    initial: { opacity: 0, y: 24 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * offset
      }
    }
  }) satisfies MotionVariants

  return { base, stagger }
}

