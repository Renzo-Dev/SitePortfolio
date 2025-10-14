// Scroll reveal анимации
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollReveal = () => {
	// Базовая анимация появления секции
	const revealSection = (
		selector: string,
		options: {
			delay?: number
			stagger?: number
			y?: number
			duration?: number
		} = {}
	) => {
		const { delay = 0, stagger = 0.2, y = 60, duration = 0.8 } = options

		gsap.from(selector, {
			opacity: 0,
			y,
			duration,
			stagger,
			delay,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: selector,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})
	}

	// Fade-in анимация
	const fadeIn = (selector: string, delay = 0) => {
		gsap.from(selector, {
			opacity: 0,
			duration: 0.8,
			delay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: selector,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})
	}

	// Slide-in слева
	const slideInLeft = (selector: string, delay = 0) => {
		gsap.from(selector, {
			opacity: 0,
			x: -60,
			duration: 0.8,
			delay,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: selector,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})
	}

	// Slide-in справа
	const slideInRight = (selector: string, delay = 0) => {
		gsap.from(selector, {
			opacity: 0,
			x: 60,
			duration: 0.8,
			delay,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: selector,
				start: 'top 80%',
				toggleActions: 'play none none reverse',
			},
		})
	}

	return {
		revealSection,
		fadeIn,
		slideInLeft,
		slideInRight,
	}
}
