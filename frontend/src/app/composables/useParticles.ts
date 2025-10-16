// Canvas Particles composable с адаптивными настройками
export const useParticles = (canvasRef: Ref<HTMLCanvasElement | undefined>) => {
	interface Particle {
		x: number
		y: number
		vx: number
		vy: number
		radius: number
	}

	// Определение типа устройства
	const getDeviceType = () => {
		const width = window.innerWidth

		if (width < 768) {
			return 'mobile'
		} else if (width < 1024) {
			return 'tablet'
		} else {
			return 'desktop'
		}
	}

	// Адаптивные настройки для разных устройств
	const getDeviceSettings = () => {
		const deviceType = getDeviceType()

		switch (deviceType) {
			case 'mobile':
				return {
					numberOfParticles: 20, // Мало частиц для производительности
					connectionDistance: 100,
					mouseRadius: 0, // Без взаимодействия с мышью (нет мыши на мобильном)
					particleSpeed: 0.3,
					particleSize: { min: 1, max: 2 },
					opacity: 0.5,
				}
			case 'tablet':
				return {
					numberOfParticles: 40,
					connectionDistance: 120,
					mouseRadius: 80,
					particleSpeed: 0.4,
					particleSize: { min: 1, max: 2.5 },
					opacity: 0.6,
				}
			case 'desktop':
				return {
					numberOfParticles: 60,
					connectionDistance: 150,
					mouseRadius: 120,
					particleSpeed: 0.5,
					particleSize: { min: 1.5, max: 3 },
					opacity: 0.7,
				}
			default:
				return {
					numberOfParticles: 60,
					connectionDistance: 150,
					mouseRadius: 120,
					particleSpeed: 0.5,
					particleSize: { min: 1.5, max: 3 },
					opacity: 0.7,
				}
		}
	}

	const initParticles = (customOptions?: {
		particleColor?: string
		lineColor?: string
	}) => {
		const {
			particleColor = 'rgba(255, 255, 255, 0.4)',
			lineColor = 'rgba(255, 255, 255, 0.15)',
		} = customOptions || {}

		if (!canvasRef.value) return

		const canvas = canvasRef.value
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		// Получаем настройки для текущего устройства
		let settings = getDeviceSettings()
		const particlesArray: Particle[] = []
		const mouse = { x: 0, y: 0 }
		let animationId: number | null = null

		// Размер canvas
		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight

			// Пересоздаём частицы при изменении размера
			recreateParticles()
		}

		// Создание частиц
		const createParticles = () => {
			particlesArray.length = 0 // Очищаем массив

			for (let i = 0; i < settings.numberOfParticles; i++) {
				particlesArray.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					vx: (Math.random() - 0.5) * settings.particleSpeed,
					vy: (Math.random() - 0.5) * settings.particleSpeed,
					radius:
						Math.random() *
							(settings.particleSize.max - settings.particleSize.min) +
						settings.particleSize.min,
				})
			}
		}

		// Пересоздание частиц при resize
		const recreateParticles = () => {
			settings = getDeviceSettings() // Обновляем настройки
			createParticles()
		}

		resizeCanvas()
		window.addEventListener('resize', resizeCanvas)

		// Отслеживание мыши (только на desktop/tablet)
		const handleMouseMove = (e: MouseEvent) => {
			if (settings.mouseRadius > 0) {
				mouse.x = e.clientX
				mouse.y = e.clientY
			}
		}

		if (settings.mouseRadius > 0) {
			window.addEventListener('mousemove', handleMouseMove)
		}

		// Анимация
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			// Обновление и рисование частиц
			particlesArray.forEach((particle, i) => {
				// Движение
				particle.x += particle.vx
				particle.y += particle.vy

				// Отскок от границ
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

				// Взаимодействие с мышью (только если включено)
				if (settings.mouseRadius > 0) {
					const dx = mouse.x - particle.x
					const dy = mouse.y - particle.y
					const distance = Math.sqrt(dx * dx + dy * dy)

					if (distance < settings.mouseRadius) {
						const force =
							(settings.mouseRadius - distance) / settings.mouseRadius
						particle.x -= (dx / distance) * force * 2
						particle.y -= (dy / distance) * force * 2
					}
				}

				// Рисуем частицу
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
				ctx.fillStyle = particleColor
				ctx.globalAlpha = settings.opacity
				ctx.fill()

				// Линии между близкими частицами
				for (let j = i + 1; j < particlesArray.length; j++) {
					const particle2 = particlesArray[j]
					if (!particle2) continue

					const dx2 = particle2.x - particle.x
					const dy2 = particle2.y - particle.y
					const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

					if (distance2 < settings.connectionDistance) {
						const lineOpacity =
							(1 - distance2 / settings.connectionDistance) * settings.opacity
						ctx.beginPath()
						ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${lineOpacity})`)
						ctx.lineWidth = 1
						ctx.moveTo(particle.x, particle.y)
						ctx.lineTo(particle2.x, particle2.y)
						ctx.stroke()
					}
				}
			})

			ctx.globalAlpha = 1
			animationId = requestAnimationFrame(animate)
		}

		animate()

		// Cleanup
		const cleanup = () => {
			if (animationId) {
				cancelAnimationFrame(animationId)
			}
			window.removeEventListener('resize', resizeCanvas)
			window.removeEventListener('mousemove', handleMouseMove)
		}

		return cleanup
	}

	return {
		initParticles,
	}
}
