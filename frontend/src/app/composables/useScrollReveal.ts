// Scroll reveal анимации (работает с Lenis)
export const useScrollReveal = (
	elements: Ref<HTMLElement | HTMLElement[] | undefined>,
	options: {
		threshold?: number // Когда запускать (0.1 = 10% элемента видно)
		rootMargin?: string // Отступ триггера
		once?: boolean // Запускать только один раз
	} = {}
) => {
	const { threshold = 0.1, rootMargin = '0px', once = true } = options

	let observer: IntersectionObserver | null = null

	// Callback для Intersection Observer
	const handleIntersection = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				// Добавляем класс для CSS анимации
				entry.target.classList.add('is-visible')

				// Если once = true, перестаём наблюдать
				if (once && observer) {
					observer.unobserve(entry.target)
				}
			} else if (!once) {
				// Если once = false, убираем класс при уходе из viewport
				entry.target.classList.remove('is-visible')
			}
		})
	}

	// Инициализация
	const init = () => {
		if (!import.meta.client) return

		// Создаём IntersectionObserver
		observer = new IntersectionObserver(handleIntersection, {
			threshold,
			rootMargin,
		})

		// Наблюдаем за элементами
		const elementArray = Array.isArray(elements.value)
			? elements.value
			: elements.value
			? [elements.value]
			: []

		elementArray.forEach((el) => {
			if (el) {
				// Добавляем начальный класс
				el.classList.add('scroll-reveal')
				observer?.observe(el)
			}
		})
	}

	// Очистка
	const destroy = () => {
		if (observer) {
			observer.disconnect()
			observer = null
		}
		window.removeEventListener('smoothscroll', handleSmoothScroll)
		window.removeEventListener('scroll', handleNativeScroll)
	}

	// Auto init/destroy
	onMounted(() => {
		// Небольшая задержка чтобы элементы точно были в DOM
		nextTick(() => {
			init()
		})
	})

	onUnmounted(() => {
		destroy()
	})

	return {
		init,
		destroy,
	}
}
