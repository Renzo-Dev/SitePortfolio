import { gsap } from 'gsap'

// Composable для управления full-screen мобильным меню с GSAP анимацией
export const useMobileMenu = () => {
	const isMobileMenuOpen = ref(false)
	const isClosing = ref(false)
	const menuElement = ref<HTMLElement | null>(null)
	let scrollPosition = 0 // Сохраняем позицию скролла
	let currentAnimation: gsap.core.Tween | null = null

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

	// Анимация открытия меню через GSAP
	const animateOpen = (element: HTMLElement) => {
		// Останавливаем предыдущую анимацию если есть
		if (currentAnimation) {
			currentAnimation.kill()
		}

		// Получаем все ссылки для каскадной анимации
		const links = element.querySelectorAll('.header__mobile-link')
		const ctaButton = element.querySelector('.header__mobile-cta')

		// Timeline для синхронизации анимаций
		const tl = gsap.timeline()

		// 1. Анимация самого меню (slide in from right) - мгновенная
		tl.fromTo(
			element,
			{
				x: '100%',
				opacity: 1,
			},
			{
				x: '0%',
				duration: 0.25, // Очень быстрое открытие
				ease: 'power2.out', // Легкая плавность
			}
		)

		// 2. Каскадная анимация ссылок (stagger) - одновременно
		tl.fromTo(
			links,
			{
				x: 20, // Минимальное смещение
				opacity: 0,
			},
			{
				x: 0,
				opacity: 1,
				duration: 0.2, // Быстрое появление
				stagger: 0.02, // Минимальная задержка
				ease: 'power2.out',
			},
			'-=0.2' // Начинаем сразу с меню
		)

		// 3. Анимация CTA кнопки - появляется вместе со ссылками
		if (ctaButton) {
			tl.fromTo(
				ctaButton,
				{
					y: 10,
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					duration: 0.2,
					ease: 'power2.out', // Без bounce для скорости
				},
				'-=0.15' // Почти одновременно
			)
		}

		currentAnimation = tl
	}

	// Анимация закрытия меню через GSAP
	const animateClose = (element: HTMLElement, callback: () => void) => {
		// Останавливаем предыдущую анимацию если есть
		if (currentAnimation) {
			currentAnimation.kill()
		}

		// Мгновенное закрытие
		const tl = gsap.timeline({
			onComplete: callback,
		})

		tl.to(element, {
			x: '100%',
			duration: 0.2, // Очень быстрое закрытие
			ease: 'power2.in', // Ускорение при выходе
		})

		currentAnimation = tl
	}

	// Открыть меню - мгновенно
	const openMenu = () => {
		isMobileMenuOpen.value = true
		isClosing.value = false
		lockScroll()

		// Один nextTick для рендеринга, затем сразу анимация
		nextTick(() => {
			if (menuElement.value) {
				animateOpen(menuElement.value)
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
		// Останавливаем GSAP анимацию если есть
		if (currentAnimation) {
			currentAnimation.kill()
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
