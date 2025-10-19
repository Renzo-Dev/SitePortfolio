import Lenis from 'lenis'

// Composable для плавного скролла через Lenis (для всех устройств)
export const useSmoothScroll = () => {
	let lenis: Lenis | null = null
	let rafId: number | null = null

	// Инициализация Lenis
	const init = () => {
		if (!import.meta.client) return

		// Создаем экземпляр Lenis для всех устройств
		lenis = new Lenis({
			duration: 1.2, // Длительность плавности (1.2 = средняя плавность)
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
			orientation: 'vertical', // Вертикальный скролл
			gestureOrientation: 'vertical',
			smoothWheel: true, // Плавная прокрутка колесиком мыши
			wheelMultiplier: 1, // Множитель скорости колеса (1 = стандартная)
			touchMultiplier: 2, // Множитель для тач-устройств
			infinite: false, // Не бесконечный скролл
		})

		// Запускаем анимационный цикл
		const raf = (time: number) => {
			lenis?.raf(time)
			rafId = requestAnimationFrame(raf)
		}

		rafId = requestAnimationFrame(raf)
	}

	// Уничтожение экземпляра
	const destroy = () => {
		if (rafId !== null) {
			cancelAnimationFrame(rafId)
			rafId = null
		}

		if (lenis) {
			lenis.destroy()
			lenis = null
		}
	}

	// Скролл к элементу
	const scrollTo = (
		target: string | number | HTMLElement,
		options?: Record<string, unknown>
	) => {
		if (!lenis) return

		lenis.scrollTo(target, {
			offset: 0,
			duration: 1.5,
			easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			...options,
		})
	}

	// Скролл к секции по ID
	const scrollToSection = (id: string, offset: number = -80) => {
		const element = document.getElementById(id)

		if (element && lenis) {
			// Используем Lenis для плавного скролла
			lenis.scrollTo(element, {
				offset,
				duration: 1.5,
			})
		} else if (element && !lenis) {
			// Fallback если Lenis не инициализирован
			const elementPosition =
				element.getBoundingClientRect().top + window.scrollY
			window.scrollTo({
				top: elementPosition + offset,
				behavior: 'smooth',
			})
		}
	}

	// Остановка скролла
	const stop = () => {
		lenis?.stop()
	}

	// Возобновление скролла
	const start = () => {
		lenis?.start()
	}

	// Auto init/destroy при монтировании
	onMounted(() => {
		init()
	})

	onUnmounted(() => {
		destroy()
	})

	return {
		lenis: computed(() => lenis),
		scrollTo,
		scrollToSection,
		stop,
		start,
		init,
		destroy,
	}
}
