// GSAP плагин для Nuxt
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
	if (import.meta.client) {
		// Регистрация плагинов
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

		// Настройка для производительности
		gsap.config({
			force3D: true, // GPU ускорение
			nullTargetWarn: false,
		})

		// Проверка на prefers-reduced-motion
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		if (prefersReducedMotion) {
			// Отключаем анимации для accessibility
			gsap.globalTimeline.timeScale(0.01)
		}
	}

	return {
		provide: {
			gsap,
			ScrollTrigger,
		},
	}
})
