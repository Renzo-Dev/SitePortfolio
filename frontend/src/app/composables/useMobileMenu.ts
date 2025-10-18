// Composable для управления full-screen мобильным меню с JS анимацией
export const useMobileMenu = () => {
	const isMobileMenuOpen = ref(false)
	const isClosing = ref(false)
	const menuElement = ref<HTMLElement | null>(null)
	let animationFrameId: number | null = null
	let scrollPosition = 0 // Сохраняем позицию скролла

	// Блокировка скролла с компенсацией скроллбара
	const lockScroll = () => {
		// Сохраняем текущую позицию скролла
		scrollPosition = window.scrollY || window.pageYOffset

		// Вычисляем ширину скроллбара
		const scrollbarWidth =
			window.innerWidth - document.documentElement.clientWidth

		// Сохраняем в CSS переменную для использования в стилях
		document.documentElement.style.setProperty(
			'--scrollbar-compensation',
			`${scrollbarWidth}px`
		)

		// Блокируем скролл на body с сохранением позиции
		document.body.style.overflow = 'hidden'
		document.body.style.position = 'fixed'
		document.body.style.top = `-${scrollPosition}px`
		document.body.style.left = '0'
		document.body.style.right = '0'
		document.body.style.paddingRight = `${scrollbarWidth}px`

		// Компенсируем для header (fixed элемент)
		const header = document.querySelector('.header') as HTMLElement
		if (header) {
			header.style.paddingRight = `${scrollbarWidth}px`
		}

		// Блокируем скролл на html
		document.documentElement.style.overflow = 'hidden'
	}

	// Разблокировка скролла
	const unlockScroll = () => {
		// Убираем блокировку с body
		document.body.style.overflow = ''
		document.body.style.position = ''
		document.body.style.top = ''
		document.body.style.left = ''
		document.body.style.right = ''
		document.body.style.paddingRight = ''

		// Убираем компенсацию с header
		const header = document.querySelector('.header') as HTMLElement
		if (header) {
			header.style.paddingRight = ''
		}

		// Убираем блокировку с html
		document.documentElement.style.overflow = ''
		document.documentElement.style.removeProperty('--scrollbar-compensation')

		// Восстанавливаем позицию скролла
		window.scrollTo(0, scrollPosition)
	}

	// Открыть/закрыть меню с плавными переходами
	const toggleMobileMenu = () => {
		if (isMobileMenuOpen.value) {
			closeWithAnimation()
		} else {
			openMenu()
		}
	}

	// Анимация открытия меню (JS)
	const animateOpen = (element: HTMLElement) => {
		const duration = 500 // 500ms для более плавной анимации
		const startTime = performance.now()
		const startPosition = 100 // начинаем с 100% (за экраном)

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)

			// Easing функция (easeOutCubic - более плавная без отскока)
			const easeOutCubic = (t: number) => {
				return 1 - Math.pow(1 - t, 3)
			}

			const easedProgress = easeOutCubic(progress)
			const currentPosition = startPosition * (1 - easedProgress)

			element.style.transform = `translateX(${currentPosition}%)`

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate)
			} else {
				element.style.transform = 'translateX(0%)'
			}
		}

		animationFrameId = requestAnimationFrame(animate)
	}

	// Анимация закрытия меню (JS)
	const animateClose = (element: HTMLElement, callback: () => void) => {
		const duration = 350 // 350ms
		const startTime = performance.now()
		const startPosition = 0
		const endPosition = 100

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime
			const progress = Math.min(elapsed / duration, 1)

			// Easing функция (easeInCubic - плавное ускорение)
			const easeInCubic = (t: number) => t * t * t

			const easedProgress = easeInCubic(progress)
			const currentPosition =
				startPosition + (endPosition - startPosition) * easedProgress

			element.style.transform = `translateX(${currentPosition}%)`

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate)
			} else {
				element.style.transform = 'translateX(100%)'
				callback()
			}
		}

		animationFrameId = requestAnimationFrame(animate)
	}

	// Открыть меню
	const openMenu = () => {
		isMobileMenuOpen.value = true
		isClosing.value = false
		lockScroll()

		// Первый nextTick - элемент рендерится
		nextTick(() => {
			if (menuElement.value) {
				// Устанавливаем начальную позицию БЕЗ transition
				menuElement.value.style.transition = 'none'
				menuElement.value.style.transform = 'translateX(100%)'
				menuElement.value.style.opacity = '1'

				// Форсируем reflow
				void menuElement.value.offsetHeight

				// Второй nextTick - гарантируем применение стилей
				nextTick(() => {
					if (menuElement.value) {
						// Небольшая задержка для стабильности
						requestAnimationFrame(() => {
							if (menuElement.value) {
								animateOpen(menuElement.value)
							}
						})
					}
				})
			}
		})
	}

	// Закрыть меню с анимацией
	const closeWithAnimation = () => {
		isClosing.value = true

		if (menuElement.value) {
			animateClose(menuElement.value, () => {
				isMobileMenuOpen.value = false
				isClosing.value = false
				unlockScroll()
			})
		} else {
			isMobileMenuOpen.value = false
			isClosing.value = false
			unlockScroll()
		}
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
		// Отменяем анимацию если есть
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId)
		}
		unlockScroll()
	})

	return {
		isMobileMenuOpen,
		isClosing,
		toggleMobileMenu,
		closeMobileMenu,
		unlockScroll,
		menuElement, // Экспортируем ref для привязки к элементу
	}
}
