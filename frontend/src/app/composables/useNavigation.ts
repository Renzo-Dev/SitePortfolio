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

	// Скролл к секции (упрощенная версия без callback)
	const navigateToSection = (sectionId: string, offset: number = -80) => {
		// Просто скроллим к секции
		scrollToSection(sectionId, offset)
	}

	return {
		navLinks,
		scrollToSection,
		navigateToSection,
	}
}
