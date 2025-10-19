import { useScroll } from '@vueuse/core'

// Composable для отслеживания скролла в Header
export const useHeaderScroll = (threshold: number = 100) => {
	// Проверка на клиентскую сторону
	if (!import.meta.client) {
		return {
			scrollY: ref(0),
			isScrolled: ref(false),
		}
	}

	const { y } = useScroll(window)
	const savedScrollState = ref(false) // Сохраняем состояние при блокировке скролла

	// Проверяем состояние скролла с учётом сохранённого
	const isScrolled = computed(() => {
		// Если body заблокирован (position: fixed), используем сохранённое состояние
		if (document.body?.style.position === 'fixed') {
			return savedScrollState.value
		}
		// Иначе проверяем текущий скролл
		const currentState = y.value > threshold
		savedScrollState.value = currentState
		return currentState
	})

	return {
		scrollY: y,
		isScrolled,
	}
}
