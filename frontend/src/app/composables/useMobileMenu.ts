// Composable для управления full-screen мобильным меню с плавными анимациями
export const useMobileMenu = () => {
	const isMobileMenuOpen = ref(false)
	const isClosing = ref(false)

	// Блокировка скролла с компенсацией скроллбара
	const lockScroll = () => {
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth
		document.documentElement.style.setProperty(
			'--scrollbar-compensation',
			`${scrollbarWidth}px`
		)
		document.body.style.overflow = 'hidden'
		document.body.style.paddingRight = `${scrollbarWidth}px`
	}

	// Разблокировка скролла
	const unlockScroll = () => {
		document.body.style.overflow = ''
		document.body.style.paddingRight = ''
		document.documentElement.style.removeProperty('--scrollbar-compensation')
	}

	// Открыть/закрыть меню с плавными переходами
	const toggleMobileMenu = () => {
		if (isMobileMenuOpen.value) {
			closeWithAnimation()
		} else {
			openMenu()
		}
	}

	// Открыть меню
	const openMenu = () => {
		isMobileMenuOpen.value = true
		isClosing.value = false
		lockScroll()
	}

	// Закрыть меню с анимацией (увеличено время для более плавной анимации)
	const closeWithAnimation = () => {
		isClosing.value = true

		// Ждём завершения анимации закрытия (600ms)
		setTimeout(() => {
			isMobileMenuOpen.value = false
			isClosing.value = false
			unlockScroll()
		}, 600)
	}

	// Публичный метод для закрытия (используется при клике на ссылку)
	const closeMobileMenu = () => {
		if (isMobileMenuOpen.value) {
			closeWithAnimation()
		}
	}

	// Закрываем меню при ресайзе на desktop
	const handleResize = () => {
		if (window.innerWidth >= 1024 && isMobileMenuOpen.value) {
			isMobileMenuOpen.value = false
			isClosing.value = false
			unlockScroll()
		}
	}

	// Закрываем меню при нажатии Escape
	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape' && isMobileMenuOpen.value) {
			closeWithAnimation()
		}
	}

	// Инициализация
	onMounted(() => {
		// Вычисляем начальную ширину скроллбара
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth
		document.documentElement.style.setProperty(
			'--scrollbar-width',
			`${scrollbarWidth}px`
		)

		window.addEventListener('resize', handleResize)
		window.addEventListener('keydown', handleEscape)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
		window.removeEventListener('keydown', handleEscape)
		unlockScroll()
	})

	return {
		isMobileMenuOpen,
		isClosing,
		toggleMobileMenu,
		closeMobileMenu,
	}
}
