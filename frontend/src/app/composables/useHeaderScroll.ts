import { useScroll } from '@vueuse/core'

// Composable для отслеживания скролла в Header
export const useHeaderScroll = (threshold: number = 100) => {
	const { y } = useScroll(window)
	const isScrolled = computed(() => y.value > threshold)

	return {
		scrollY: y,
		isScrolled,
	}
}

