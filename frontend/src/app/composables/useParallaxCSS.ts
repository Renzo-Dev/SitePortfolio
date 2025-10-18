// Composable для CSS-only parallax (самый производительный вариант)
// Использует CSS custom properties и не требует JS на каждый скролл
export const useParallaxCSS = (
	element: Ref<HTMLElement | undefined>,
	options: {
		speed?: number // Скорость параллакса (например, 0.5)
		direction?: 'up' | 'down' // Направление движения
	} = {}
) => {
	const { speed = 0.5, direction = 'up' } = options

	const init = () => {
		if (!import.meta.client || !element.value) return

		// Применяем CSS-переменную для скорости
		element.value.style.setProperty('--parallax-speed', speed.toString())

		// Добавляем класс для CSS-параллакса
		element.value.classList.add('parallax-css')
		if (direction === 'down') {
			element.value.classList.add('parallax-css--down')
		}

		// Устанавливаем стили для оптимизации
		element.value.style.willChange = 'transform'
	}

	const destroy = () => {
		if (!element.value) return
		element.value.classList.remove('parallax-css', 'parallax-css--down')
		element.value.style.willChange = 'auto'
	}

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

