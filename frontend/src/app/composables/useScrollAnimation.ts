// Composable для анимаций при скролле
export const useScrollAnimation = () => {
	const observeElements = (selector: string, animationClass = 'fade-in-up') => {
		if (process.server) return

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add(animationClass, 'is-visible')
						observer.unobserve(entry.target)
					}
				})
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			}
		)

		const elements = document.querySelectorAll(selector)
		elements.forEach((el) => observer.observe(el))

		return observer
	}

	return {
		observeElements,
	}
}
