// Composable для плавного скролла
export const useSmoothScroll = () => {
	const scrollToElement = (elementId: string, offset = 0) => {
		if (process.server) return

		const element = document.getElementById(elementId)
		if (!element) return

		const elementPosition =
			element.getBoundingClientRect().top + window.pageYOffset
		const offsetPosition = elementPosition - offset

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		})
	}

	const scrollToTop = () => {
		if (process.server) return

		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return {
		scrollToElement,
		scrollToTop,
	}
}
