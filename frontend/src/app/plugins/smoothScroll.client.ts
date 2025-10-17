// Smooth scroll plugin with animation
export default defineNuxtPlugin(() => {
	// Функция для плавного анимированного скролла
	const scrollTo = (
		target: string | number,
		options: { offset?: number; duration?: number } = {}
	) => {
		const { offset = 0, duration = 1000 } = options

		if (!import.meta.client) return

		let targetPosition = 0

		if (typeof target === 'string') {
			const element = document.querySelector(target)
			if (element) {
				targetPosition =
					element.getBoundingClientRect().top + window.pageYOffset + offset
			}
		} else {
			targetPosition = target
		}

		const startPosition = window.pageYOffset
		const distance = targetPosition - startPosition
		const startTime = performance.now()

		// Easing функция (easeInOutCubic) для плавности
		const easeInOutCubic = (t: number): number => {
			return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
		}

		const animation = (currentTime: number) => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)
			const ease = easeInOutCubic(progress)

			window.scrollTo(0, startPosition + distance * ease)

			if (progress < 1) {
				requestAnimationFrame(animation)
			}
		}

		requestAnimationFrame(animation)
	}

	return {
		provide: {
			scrollTo,
		},
	}
})
