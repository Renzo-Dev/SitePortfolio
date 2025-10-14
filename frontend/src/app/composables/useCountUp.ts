// Count-up анимация для чисел
import { gsap } from 'gsap'

export const useCountUp = () => {
	const animateNumber = (
		element: HTMLElement,
		startValue: number,
		endValue: number,
		duration = 2,
		suffix = ''
	) => {
		const obj = { value: startValue }

		gsap.to(obj, {
			value: endValue,
			duration,
			ease: 'power2.out',
			onUpdate: function () {
				const currentValue = Math.floor(obj.value)
				element.textContent = `${currentValue}${suffix}`
			},
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				once: true,
			},
		})
	}

	return {
		animateNumber,
	}
}
