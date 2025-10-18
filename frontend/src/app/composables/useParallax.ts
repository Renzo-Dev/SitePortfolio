// Composable для parallax эффекта (оптимизирован для плавности через CSS-переменные)
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
	let lastScroll = 0

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

	// Обновление parallax эффекта через CSS-переменные
	const updateParallax = () => {
		if (!element.value) return

		const currentScroll = window.scrollY

		// Оптимизация: обновляем только если скролл изменился значимо
		if (Math.abs(currentScroll - lastScroll) < 1) return
		lastScroll = currentScroll

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

			// Используем CSS-переменные вместо прямого style.transform
			// Это позволяет браузеру оптимизировать рендеринг
			element.value.style.setProperty('--parallax-y', `${translateY}px`)
			if (fadeOut) {
				element.value.style.setProperty('--parallax-opacity', `${opacity}`)
			}
		}
	}

	// Инициализация
	const init = () => {
		if (!import.meta.client) return

		// Устанавливаем начальные CSS-переменные и стили для плавности
		if (element.value) {
			element.value.style.setProperty('--parallax-y', '0px')
			element.value.style.setProperty('--parallax-opacity', '1')
			element.value.style.transform = 'translate3d(0, var(--parallax-y), 0)'
			element.value.style.opacity = 'var(--parallax-opacity)'
			element.value.style.willChange = 'transform, opacity'
			// Добавляем небольшую задержку для сглаживания рывков
			element.value.style.transition = 'transform 0.05s ease-out, opacity 0.1s ease-out'
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
