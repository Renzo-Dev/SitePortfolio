// Smooth scroll с Lenis
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted } from 'vue'

export const useSmoothScroll = () => {
	let lenis: Lenis | null = null

	const initSmoothScroll = () => {
		// Проверка на prefers-reduced-motion
		const prefersReducedMotion = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches

		if (prefersReducedMotion) {
			return // Не инициализируем smooth scroll
		}

		try {
			// Инициализация Lenis
			lenis = new Lenis({
				duration: 1.2, // Длительность прокрутки
				easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing функция
				orientation: 'vertical',
				gestureOrientation: 'vertical',
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
			})

			// Синхронизация с GSAP ScrollTrigger
			lenis.on('scroll', ScrollTrigger.update)

			// Добавляем Lenis в GSAP ticker для синхронизации
			gsap.ticker.add((time) => {
				lenis?.raf(time * 1000)
			})

			// Отключаем lag smoothing для более точной синхронизации
			gsap.ticker.lagSmoothing(0)

			console.log('✅ Lenis smooth scroll initialized')
		} catch (error) {
			console.warn('❌ Lenis smooth scroll initialization failed:', error)
		}
	}

	// Функция для программного скролла к элементу
	const scrollTo = (target: string | number, options = {}) => {
		if (lenis) {
			lenis.scrollTo(target, {
				duration: 1.5,
				...options,
			})
		} else {
			// Fallback на нативный скролл
			if (typeof target === 'string') {
				const element = document.querySelector(target)
				element?.scrollIntoView({ behavior: 'smooth' })
			} else {
				window.scrollTo({ top: target, behavior: 'smooth' })
			}
		}
	}

	const destroy = () => {
		if (lenis) {
			lenis.destroy()
			lenis = null
			console.log('🗑️ Lenis destroyed')
		}
	}

	onMounted(() => {
		initSmoothScroll()
	})

	onUnmounted(() => {
		destroy()
	})

	return { lenis, scrollTo, destroy }
}
