// Magnetic effect для кнопок
import { gsap } from 'gsap'

export const useMagnetic = (elementRef: Ref<HTMLElement | undefined>) => {
	const isActive = ref(false)

	const handleMouseMove = (e: MouseEvent) => {
		if (!elementRef.value) return

		const rect = elementRef.value.getBoundingClientRect()
		const centerX = rect.left + rect.width / 2
		const centerY = rect.top + rect.height / 2
		const deltaX = e.clientX - centerX
		const deltaY = e.clientY - centerY

		gsap.to(elementRef.value, {
			x: deltaX * 0.3,
			y: deltaY * 0.3,
			duration: 0.3,
			ease: 'power2.out',
		})
	}

	const handleMouseLeave = () => {
		if (!elementRef.value) return

		gsap.to(elementRef.value, {
			x: 0,
			y: 0,
			duration: 0.5,
			ease: 'elastic.out(1, 0.3)',
		})
	}

	return {
		handleMouseMove,
		handleMouseLeave,
	}
}
