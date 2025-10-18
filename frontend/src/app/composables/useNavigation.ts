// Composable для навигации по секциям
export const useNavigation = () => {
	// Список навигационных ссылок
	const navLinks = [
		{ id: 'about', label: 'Обо мне', href: '#about' },
		{ id: 'portfolio', label: 'Портфолио', href: '#portfolio' },
		{ id: 'services', label: 'Услуги', href: '#services' },
		{ id: 'contact', label: 'Контакты', href: '#contact' },
	]

	// Получаем функцию скролла из layout через inject
	const scrollToSection = inject<(id: string, offset?: number) => void>(
		'scrollToSection',
		(id: string) => {
			// Fallback на нативный скролл если Lenis недоступен
			const element = document.getElementById(id)
			if (element) {
				const offset = 80
				const elementPosition =
					element.getBoundingClientRect().top + window.scrollY
				window.scrollTo({
					top: elementPosition - offset,
					behavior: 'smooth',
				})
			}
		}
	)

	// Скролл к секции с закрытием меню
	const navigateToSection = (
		sectionId: string,
		offset: number = -80,
		onNavigate?: () => void
	) => {
		// Если есть callback (закрытие меню)
		if (onNavigate) {
			// Сначала закрываем меню
			onNavigate()

			// Ждём завершения анимации закрытия меню (300ms) перед скроллом
			setTimeout(() => {
				scrollToSection(sectionId, offset)
			}, 350)
		} else {
			// Если нет callback - скроллим сразу
			scrollToSection(sectionId, offset)
		}
	}

	return {
		navLinks,
		scrollToSection,
		navigateToSection,
	}
}
