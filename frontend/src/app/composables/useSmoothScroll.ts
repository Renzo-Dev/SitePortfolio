import Lenis from 'lenis'

// Composable для плавного скролла через Lenis (только для desktop)
export const useSmoothScroll = () => {
	let lenis: Lenis | null = null
	let rafId: number | null = null

	// Проверка на desktop устройство
	const isDesktop = () => {
		if (!import.meta.client) return false
		return window.innerWidth > 1024 && !('ontouchstart' in window)
	}

	// Инициализация Lenis
	const init = () => {
		if (!import.meta.client) return

		// Применяем только на desktop
		if (!isDesktop()) {
			console.log('📱 Mobile/Tablet detected - Lenis disabled')
			return
		}

		// Создаем экземпляр Lenis
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

		console.log('✨ Lenis smooth scroll initialized')
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
			console.log('🗑️ Lenis smooth scroll destroyed')
		}
	}

	// Скролл к элементу
	const scrollTo = (target: string | number | HTMLElement, options?: any) => {
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
			lenis.scrollTo(element, {
				offset,
				duration: 1.5,
			})
		} else if (element && !lenis) {
			// Fallback для мобильных
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

	// Реинициализация при ресайзе (переход desktop <-> mobile)
	const handleResize = () => {
		const shouldBeActive = isDesktop()

		if (shouldBeActive && !lenis) {
			// Desktop и Lenis не активен - инициализируем
			init()
		} else if (!shouldBeActive && lenis) {
			// Мобильный и Lenis активен - уничтожаем
			destroy()
		}
	}

	// Auto init/destroy при монтировании
	onMounted(() => {
		init()

		// Слушаем ресайз для адаптивности
		window.addEventListener('resize', handleResize)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
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

