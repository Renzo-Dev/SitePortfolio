// Composable для parallax эффекта (оптимизирован для плавности)
export const useParallax = (
	element: Ref<HTMLElement | undefined>,
	options: {
		speed?: number // Скорость параллакса (0.5 = медленнее в 2 раза)
		fadeOut?: boolean // Fade out при скролле
		maxDistance?: number // Максимальная дистанция для эффекта
	} = {}
) => {
	const { speed = 0.5, fadeOut = false, maxDistance = 0 } = options

	let ticking = false

	// Обработчик скролла с throttle через RAF
	const handleScroll = () => {
		if (!ticking) {
			window.requestAnimationFrame(() => {
				updateParallax()
				ticking = false
			})
			ticking = true
		}
	}

	// Обновление parallax эффекта
	const updateParallax = () => {
		if (!element.value) return

		const currentScroll = window.scrollY

		// Вычисляем границы эффекта
		const windowHeight = window.innerHeight
		const maxScroll = maxDistance || windowHeight

		// Применяем parallax только пока элемент виден
		if (currentScroll < maxScroll) {
			// Вычисляем смещение
			const translateY = currentScroll * speed

			// Вычисляем opacity если нужен fadeOut
			let opacity = 1
			if (fadeOut && maxScroll > 0) {
				opacity = Math.max(0, 1 - currentScroll / maxScroll)
			}

			// Применяем трансформации с will-change для оптимизации
			// Используем translate3d для GPU acceleration
			element.value.style.transform = `translate3d(0, ${translateY}px, 0)`
			if (fadeOut) {
				element.value.style.opacity = `${opacity}`
			}
		}
	}

	// Инициализация
	const init = () => {
		if (!import.meta.client) return

		// Добавляем will-change для оптимизации
		if (element.value) {
			element.value.style.willChange = 'transform, opacity'
		}

		// Слушаем скролл с passive для лучшей производительности
		window.addEventListener('scroll', handleScroll, { passive: true })

		// Начальное обновление
		updateParallax()
	}

	// Очистка
	const destroy = () => {
		if (element.value) {
			element.value.style.willChange = 'auto'
		}
		window.removeEventListener('scroll', handleScroll)
	}

	// Auto init/destroy при монтировании
	onMounted(() => {
		init()
	})

	onUnmounted(() => {
		destroy()
	})

	return {
		init,
		destroy,
	}
}
