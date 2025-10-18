// Composable для управления мобильным меню
export const useMobileMenu = () => {
	const isMobileMenuOpen = ref(false)

	// Открыть/закрыть меню
	const toggleMobileMenu = () => {
		isMobileMenuOpen.value = !isMobileMenuOpen.value
		// Блокируем скролл при открытом меню
		document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : ''
	}

	// Закрыть меню
	const closeMobileMenu = () => {
		isMobileMenuOpen.value = false
		document.body.style.overflow = ''
	}

	// Закрываем меню при ресайзе на desktop
	const handleResize = () => {
		if (window.innerWidth >= 1024) {
			closeMobileMenu()
		}
	}

	// Auto cleanup при монтировании
	onMounted(() => {
		window.addEventListener('resize', handleResize)
	})

	onUnmounted(() => {
		window.removeEventListener('resize', handleResize)
		// Восстанавливаем скролл при unmount
		document.body.style.overflow = ''
	})

	return {
		isMobileMenuOpen,
		toggleMobileMenu,
		closeMobileMenu,
	}
}
